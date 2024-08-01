import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import logo from '../../../static/img/Kiaan_Agrowtech_Logo.svg';

const FeatureList = [
  {
    title: 'Kiaan Agrow',
    // Svg: require('@site/static/img/Kiaan_Agrowtech_logo.svg').default,
    description: (
      <>
        Imagine a new age of agriculture, where data transforms everything
      </>
    ),
  },
  {
    title: 'Kiaaniot',
    // Svg: require('@site/static/img/Kiaan_Agrowtech_logo.svg').default,
    description: (
      <>
        Where data science meets nature's intelligence.
      </>
    ),
  },
  {
    title: 'Acretech',
    // Svg: require('@site/static/img/Kiaan_Agrowtech_logo.svg').default,
    description: (
      <>
        Discover the future of farming: Invest in sustainable agriculture and grow your portfolio
        while nurturing the planet.
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
