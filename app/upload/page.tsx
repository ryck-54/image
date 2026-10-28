'use client';

import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import { Button, Input, Template } from '@/components';
import { useImageService } from '@/resource/service';

export default function UploadPage() {
  const imageService = useImageService();
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [tagsText, setTagsText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess(false);

    const imageName = name.trim();
    const tags = tagsText
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!imageName) {
      setError('Informe o nome da imagem.');
      return;
    }
    if (!file) {
      setError('Selecione um arquivo de imagem.');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('O arquivo deve ter no máximo 20 MB.');
      return;
    }
    if (tags.length === 0) {
      setError('Informe pelo menos uma tag.');
      return;
    }

    setIsLoading(true);
    try {
      await imageService.enviar(file, imageName, tags);
      setSuccess(true);
      setName('');
      setFile(null);
      setTagsText('');
      formRef.current?.reset();
    } catch (cause) {
      console.error('Erro ao enviar imagem:', cause);
      setError(
        cause instanceof Error
          ? cause.message
          : 'Não foi possível enviar a imagem.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Template>
      <main className="mx-auto max-w-xl p-4">
        <h1 className="mb-4 text-2xl font-bold">Enviar imagem</h1>

        <form
          ref={formRef}
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            label="Nome da imagem"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <Input
            label="Arquivo (PNG, JPG, JPEG ou GIF; máximo de 20 MB)"
            type="file"
            accept=".png,.jpg,.jpeg,.gif"
            onChange={(event) =>
              setFile(event.currentTarget.files?.[0] ?? null)
            }
            required
          />

          <Input
            label="Tags separadas por vírgula"
            value={tagsText}
            onChange={(event) => setTagsText(event.target.value)}
            placeholder="natureza, viagem"
            required
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar imagem'}
          </Button>
        </form>

        {error && <p className="mt-4 text-red-600" role="alert">{error}</p>}
        {success && (
          <p className="mt-4 text-green-700" role="status">
            Imagem enviada com sucesso!
          </p>
        )}

        <Link className="mt-4 inline-block underline" href="/galeria">
          Voltar para a galeria
        </Link>
      </main>
    </Template>
  );
}