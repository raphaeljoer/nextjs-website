import { GetServerSideProps } from 'next';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { Title } from '@/styles/pages/Home';
import { client } from '@/lib/prismic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

interface HomeProps {
  products: Document[];
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      <SEO
        title="DevCommerce, your best option!"
        description="melhor site"
        image="boost.png"
        shouldExcludeSuffix
      />
      <section>
        <Title>Products</Title>

        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/catalog/products/${product.uid}`}>
                  <a>{PrismicDOM.RichText.asText(product.data.title)}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  return {
    props: {
      products: products.results,
    },
  };
};
