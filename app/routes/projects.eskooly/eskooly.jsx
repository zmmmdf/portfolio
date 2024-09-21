import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/kalvi-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/kalvi-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/kalvi-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/kalvi-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/kalvi-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/kalvi-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/kalvi-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/kalvi-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/kalvi-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/kalvi-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/kalvi-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/kalvi-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/kalvi-lesson-builder-dark-large.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/kalvi-lesson-builder-dark-placeholder.png';
import imageSprLessonBuilderDark from '~/assets/kalvi-lesson-builder-dark.png';
import imageSprLessonBuilderLightLarge from '~/assets/kalvi-lesson-builder-light-large.png';
import imageSprLessonBuilderLightPlaceholder from '~/assets/kalvi-lesson-builder-light-placeholder.png';
import imageSprLessonBuilderLight from '~/assets/kalvi-lesson-builder-light.png';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/kalvi-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/kalvi-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/kalvi-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/kalvi-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/kalvi-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/kalvi-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/kalvi-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/kalvi-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/kalvi-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/kalvi-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/kalvi-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/kalvi-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './eskooly.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Designing the future of education';
const description =
  'I worked as the development lead on a major iteration of eSkooly product. We took the platform in a bold new direction, focusing on becoming the best system for learning designers.';
const roles = [
  'Idea generator',
  'Back end Development',
  'Front End Development',
  'Team leadership',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.eskooly.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
            In 2024, eSkooly began a project to build
            an entirely new platform from the ground up
            to serve the edtech landscape with a pioneering
             open-source digital education infrastructure, 
             empowering educators to deliver unparalleled 
             online learning experiences.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                  : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Unified Technology Stack for empowering Modern Learning</ProjectSectionHeading>
              <ProjectSectionText>
                Enable Virtual Campuses, Self-paced Moocs & Online Degree Programs, Live Classes,
                Communities, Mobile Apps, and Assessments with One Unified Platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w`
                  : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Create your own classroom
              and educate better</ProjectSectionHeading>
              <ProjectSectionText>
              Crafting course experiences should be enjoyable, not tedious. Quickly design
              your live or self-paced courses with our exceptional authoring tools
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                Build a vibrant community to foster social learning experience
                </ProjectSectionHeading>
                <ProjectSectionText>
                Effective learning transcends videos and quizzes. It flourishes through
                collaboration, feedback, and collective effort.
                <br/><br/>
                <b>Discussing made easy</b> <br/>
                With all of your resources and communication in one place, Kalvi can keep learners engaged and connected when everyone’s remote.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w`
                    : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w`
                    : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Parícutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kīlauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        Next-generation learning experiences
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The flexibility of the product allowed for developers to create
                        engaging interactive experiences as highly configurable plugins
                        that could then be used and manipulated by learning designers.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                      Transform educational journey into an exciting adventure
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                      Our gamification framework lets you to create experiences that make acquiring new skills
                      both captivating and gratifying for learners
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                      Robust Assessment Engine to Proctor,
                      Evaluate and Conduct Exams
                      </ProjectSectionHeading>
                      <ProjectSectionText> 
                      Adaptive Engine Our engine streamlines the use of advanced psychometrics, 
                      including CAT, MST, IRT and AES, for efficient and sophisticated 
                      testing solutions.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['EarthPartial', 'Chunk']}
                labels={['Mantle', 'Outer core', 'Inner core']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                      Integratation
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                      Integrated with all tools you already know and love.
                      With plugins for all major content formats and learning standards,
                      integrate and go live with Kalvi in less than an hour.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
              Join our waiting list and let eSkooly boost 
              your productivity! We're dedicated to 
              bringing more schools online, faster.
                {' '}
                <Link href="https://tally.so/r/wAxxED">
                Sign up now
                </Link>{' '}
                to be part of the change.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
