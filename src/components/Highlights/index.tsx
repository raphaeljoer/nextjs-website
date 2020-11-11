import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  HighlightsContent,
  HighlightItem,
  HighlightButton,
} from './styles';

const Highlights = () => {
  return (
    <Container>
      <HighlightsContent>
        <HighlightItem className="item01">
          <Image src="/images/usd-circle.svg" width={36} height={36} />
          <h2>Corporate finance</h2>
          <p>Leverage agile frameworks to provide a robust synopsis</p>
        </HighlightItem>

        <HighlightItem className="item02">
          <Image src="/images/file-invoice-dollar.svg" width={36} height={36} />
          <h2>Audit & Evaluation</h2>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
          </p>
        </HighlightItem>

        <HighlightItem className="item03">
          <h2>Market analysis</h2>
          <p>
            Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …
          </p>
          <Link href="https://google.com" passHref>
            <HighlightButton>
              Read more <FiArrowRight />
            </HighlightButton>
          </Link>
        </HighlightItem>

        <HighlightItem className="item04">
          <Image src="/images/usd-circle.svg" width={36} height={36} />
          <h2>Corporate finance</h2>
          <p>Leverage agile frameworks to provide a robust synopsis</p>
        </HighlightItem>

        <HighlightItem className="item05">
          <Image src="/images/usd-circle.svg" width={36} height={36} />
          <h2>Corporate finance</h2>
          <p>Leverage agile frameworks to provide a robust synopsis</p>
        </HighlightItem>
      </HighlightsContent>
    </Container>
  );
};

export default Highlights;
