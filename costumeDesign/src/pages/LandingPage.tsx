import React from "react";
import {PageWrapper} from "../page-sections/PageWrapper";

const wholeClass = ['• The designers wrote short statements that compiled their ideas responding to the music or script they were working with, that would help them communicate to collaborators or present their ideas in class.',
                '• They collected a body of visual research that helped uplift and focus on their design ideas.',
                '• Leading from their emotional response to the music or script and their visual research, they produced costume sketches as communication tools they would use to discuss their ideas.',
                '• They compiled paperwork essential to the costume design and production process, including spreadsheet breakdowns of the script or music source material, piece lists of each item in each of their sketches, and projected budgets describing comprehensive sourcing plans if they were to produce their designs.',
                '• Each project was presented by the designers to the class in phases, to simulate a professional design process with a team - the entire class acted as creative team members as the designers built trust with each other within the critique environment.'];

const WorkClothing = ['• Designers met and interviewed, with their permission, someone in their work clothing. Their objective was to collect information, and photos if they consent, to investigate how their clothes are specific to their job. How do their clothes allow them to work? Are they protective? Are they meant to communicate something about their job?',
                    '• The designers explored visual research and the process of collecting it, thinking about primary vs secondary sources, and how to interpret research into a sketch.',
                    '• They produced a costume sketch communicating the worker’s outfit, informed by what they learned as they collected information / research. ',
                    '• They compiled a piece list of all the items in their sketch.'];

const ConstructionFocus = ['• Responding to one of two options - Top Girls by Caryl Churchill or the Firebird Suite by Igor Stravinsky - the designers responded creatively to the source material and developed a point of view on the story or music.',
                    '• They wrote their point of view in the form of a short statement to refer to while designing and creating costume design paperwork like the breakdown and piece list for each sketch.',
                    '• They undertook and compiled visual research to support their ideas about the script or music piece, which lead to the creation of costume sketches for the piece.',
                    '• Using their sketches as inspiration, they considered how they would work with costume technicians, and produced technical sketches and mannequin explorations that would help guide collaborators in creating their designs from scratch.'];

const ProductionFocus = ['• The designers produced design concepts for dance and theater, using music and scripts they chose themselves. They responded to their source material and developed their design concept in the form of a pov statement, visual research, breakdown, and set of sketches.',
                    '• They developed a projected budget and sourcing plan for their looks, using a $500 total budget, costume stock at Bowdoin, and other hypothetical sourcing options.',
                    '• Leading from a class discussion about inclusive fitting practices, with a partner, the designers sourced one of their designs from costume stock and held a fitting with their partner. They presented these in-process looks in class with their designs and paperwork.'];

const Final = ['• For the first time, the designers focused on the same story - they had the choice of designing the ballet, opera, or script of A Midsummer Night’s Dream by William Shakespeare.',
            '• They had the opportunity to expand their process and produce more sketches than they had to date, following the same design process of reacting to the source material, writing their ideas down via their pov statement, creating a script breakdown and collecting visual research to facilitate their sketching process.',];


const LandingPage: React.FC = () => {
    return (
        <PageWrapper>
            <main className="py-20 px-10">
                <h1 className="pb-10">Welcome to the digital portfolio for Costume Design at Bowdoin College, spring 2025 semester.</h1>
                <p className="text-left">Clothing history is human history. Through the lens of costume design, this class engaged with skills that allowed students to immerse themselves in the study of clothing, analyze identity, and investigate performing arts design techniques in a collaborative environment. As they integrated imagination with self-advocacy, students learned to interpret visual research, explored methods of design resolution, and immersed themselves in vigorous group critique. The course aimed to de-mystify and grow appreciation for costume design, construction, and production management as the students engaged with each other and the performing arts community in Maine and beyond.</p>
                <p className="text-left">You will see work from projects completely throughout the semester, focusing on costume design for dance and theater. The designers explored topics vital to the costume design and production process, including budget creation and budget ethics in the performing arts, fitting inclusivity, technical costume explorations, and more.</p>
                <p className="text-left">Typical steps the class took on each assignment:</p>
                <ul className="text-left">
                    {wholeClass.map((item, index) => (
                        <li className="pb-2"key={index}> {item}</li>
                    ))}
                 </ul>
                 <h2 className="mt-16 mb-8 py-2 bg-theme_blue rounded-lg text-center">Work Clothing Project</h2>
                 <ul className="text-left">
                    {WorkClothing.map((item, index) => (
                        <li className="pb-2"key={index}> {item}</li>
                    ))}
                 </ul>
                 <h2 className="mt-16 mb-8 py-2 bg-theme_blue rounded-lg text-center">Responding to Music Project</h2>
                    <p className="text-left px-10">Designers chose from two different music tracks, to listen and respond to - Threads by This Will Destroy You, or Glosoli by Sigur Ros. They considered how they would collaborate with a choreographer to develop a movement piece with this music. They produced dance design sketches after thinking about how they felt while they listened.</p>
                 <h2 className="mt-16 mb-8 py-2 bg-theme_blue rounded-lg text-center">Construction Focus Project</h2>
                 <ul className="text-left">
                    {ConstructionFocus.map((item, index) => (
                        <li className="pb-2"key={index}> {item}</li>
                    ))}
                 </ul>
                 <h2 className="mt-16 mb-8 py-2 bg-theme_blue rounded-lg text-center">Production Focus Project</h2>
                 <ul className="text-left">
                    {ProductionFocus.map((item, index) => (
                        <li className="pb-2"key={index}> {item}</li>
                    ))}
                 </ul>
                 <h2 className="mt-16 mb-8 py-2 bg-theme_blue rounded-lg text-center">Final Project</h2>
                 <ul className="text-left">
                    {Final.map((item, index) => (
                        <li className="pb-2"key={index}> {item}</li>
                    ))}
                 </ul>
                <p></p>
            </main>
        </PageWrapper>
    );
  };
  
  export default LandingPage;