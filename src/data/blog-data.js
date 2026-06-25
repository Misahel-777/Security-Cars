import { generateArticleSchemas } from './schemas';

export const ARTICLES = {
  "como-insonorizar-un-auto": {
    slug: "como-insonorizar-un-auto",
    title: "Cómo insonorizar un auto en Lima: guía completa",
    description: "Aprende qué materiales se usan, cuánto cuesta y cuánto dura el proceso de insonorización de un auto en Lima, Perú.",
    image: "https://securitycars.com/img/blog/como-insonorizar-un-auto.jpg",
    author: "Security Cars",
    publishedDate: "2025-06-01T00:00:00-05:00",
    faq: [
      { question: "¿Cuánto dura la insonorización?", answer: "Entre 1 y 2 días dependiendo de las zonas a tratar." },
    ],
  },
};

export function getArticleSchemasBySlug(slug) {
  const article = ARTICLES[slug];
  if (!article) return [];
  return generateArticleSchemas(article);
}