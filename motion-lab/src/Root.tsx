import { Composition, Folder } from 'remotion';
import { HeroTitolo, type HeroTitoloProps } from './compositions/HeroTitolo';
import { CascataAutomatica, CASCATA_DURATION_S } from './compositions/CascataAutomatica';

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="Prove">
      <Composition
        id="HeroTitolo"
        component={HeroTitolo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={
          {
            titolo: 'Scelto dalle autoscuole che hanno smesso di lavorare a mano',
            sottotitolo: 'Agenda, pagamenti e segretaria AI in un solo posto.',
          } satisfies HeroTitoloProps
        }
      />
      <Composition
        id="CascataAutomatica"
        component={CascataAutomatica}
        durationInFrames={Math.round(CASCATA_DURATION_S * 30)}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
