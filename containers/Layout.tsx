import Head from 'next/head';
import { getTitleString } from '../lib/utils/strings';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string | string[];
}

export default function Layout({
  children,
  title,
}: LayoutProps): React.ReactElement {
  const titleToBeDisplayed = getTitleString(title);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{titleToBeDisplayed}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
