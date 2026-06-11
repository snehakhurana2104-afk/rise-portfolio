import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Rocket, Lightbulb, Target, BookOpen } from 'lucide-react';
export default function StrengthDetail() {
  const { name } = useParams();

  const contentData = {
    'Adaptability': {
  title: 'Adaptability',
  imageUrl: 'https://i.pinimg.com/1200x/21/7a/38/217a38e05f412b05251fe8cb14a72d72.jpg',
  example: 'During an unexpected system outage at a major international airport, Raj successfully leveraged his adaptability to re-route passengers and manage real-time logistical challenges, ensuring minimal service disruption.',
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Fluid Scheduling" by intentionally incorporating buffer windows into your calendar. This allows you to manage unforeseen tasks proactively, enabling you to respond to volatility with professional composure.',
    '🚀 Strategic Stretch Goal: Proactively volunteer to lead or support projects characterized by high ambiguity and rapidly shifting priorities to further refine your crisis management and agility capabilities.',
    '💡 Coaching Insight: Maintain a reflective journal to document your navigation of unexpected changes. Evaluate whether your actions effectively fostered stability and empowered your team during critical transitions.'
  ]
},
    'Connectedness': {
  title: 'Connectedness',
  imageUrl:'https://i.pinimg.com/1200x/f4/ba/4c/f4ba4c7303978375e76d30a313c60edd.jpg',
  // Real-World Success Story
  example: 'During a high-pressure product redesign, Ananya observed the team struggling under the weight of missed deadlines and technical friction. Rather than focusing on the delays, she bridged the gap between code and reality by illustrating how their healthcare app was directly improving the lives of patients in rural India. By weaving their daily work into the fabric of a humanitarian mission, she didn\'t just solve a delay—she reignited the team’s morale and sense of professional urgency.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate a "Greater Narrative"—start meetings by articulating how the day\'s tasks ripple outward to serve the final mission, keeping purpose at the forefront.',
    '🚀 Strategic Stretch Goal: Position yourself as an impact-architect. Lead a CSR or purpose-driven initiative that tangibly links your company\'s internal technical objectives with real-world external impact.',
    '💡 Coaching Insight: Deepen your "Systems-Thinker" mindset. Explore the biographies of global changemakers; analyze how they effectively harnessed cause-and-effect relationships to build sustainable movements.'
  ]
},
    'Developer': {
    title: 'Developer',
    imageUrl:'https://i.pinimg.com/1200x/56/4e/b6/564eb60a575e7ec80883cb7717caa5a7.jpg',
   example: 'Priya, a mid-level manager, identified the latent potential in a quiet analyst who displayed a budding interest in data visualization. Rather than assigning routine tasks, she tailored his growth by providing targeted professional challenges and consistent, authentic recognition. This empathetic investment not only bolstered his confidence but accelerated his career trajectory; within a year, he transitioned from a silent contributor to the lead architect of the company`s global Power BI automation strategy.',
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Micro-Mentorship"—provide one piece of highly specific, authentic feedback that validates a colleague’s small but meaningful improvement.',
    '🚀 Strategic Stretch Goal: Commit to a 30-day "Empowerment Sprint." Mentor a junior team member with the explicit goal of elevating their core skill set; document the progress and your own evolution as a leader.',
    '💡 Coaching Insight: Maintain a "Growth Ledger." Document not just the achievements of others, but your role in catalyzing them—this is the foundation of high-impact leadership.',
    '🎯 Leadership Reflection: "In the last 30 days, whose professional evolution have I actively supported? How did this partnership create value for both of our career paths?"'
  ]
    },
    'Empathy': {
  title: 'Empathy',
  imageUrl:'https://i.pinimg.com/1200x/07/3d/53/073d53be73dddc678092d9186174cbed.jpg',
  // Real-World Success Story
  example: 'Following a period of post-pandemic transition, Ramesh—a team leader—observed subtle but critical signs of burnout among his direct reports. Rather than defaulting to increased monitoring, he implemented a "Feelings Friday" initiative, creating a dedicated forum for psychological transparency. Over the course of three months, this intervention fostered deep emotional safety, resulting in a measurable 40% increase in team engagement metrics and a sustained shift toward a culture of trust.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Master "Active Reflective Listening"—in every interaction, consciously mirror the speaker\'s emotions back to them (e.g., "It sounds like you are feeling quite challenged by this pivot; is that accurate?") to validate their perspective.',
    '🚀 Strategic Stretch Goal: Architect a "Psychological Safety" initiative within your organization, such as a mental wellness circle or an anonymous feedback framework, to institutionalize support.',
    '💡 Coaching Insight: Adopt the "Feel-Felt-Found" communication model—a sophisticated technique to validate emotions while steering the conversation toward constructive, solution-oriented outcomes.',
    '🎯 Leadership Reflection: "In what ways have I created a space for my team to show up as their authentic selves? How has this influenced our collective performance?"'
  ]
},
'Harmony': {
  title: 'Harmony',
  imageUrl:'https://i.pinimg.com/1200x/3a/6f/18/3a6f18d705797dae33c5f73124ddcdc6.jpg',
  // Real-World Success Story
  example: 'Two engineering teams were deadlocked over conflicting testing tool requirements. Kavita, utilizing her Harmony talent, facilitated a structured whiteboard session that reframed the debate around shared strategic outcomes rather than individual preferences. By guiding the stakeholders to find common ground, she enabled a collaborative selection of a hybrid testing framework, which ultimately reduced testing cycle times by 20%.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Consensus-First" communication. In every debate, proactively identify points of alignment by asking, "Where do our objectives overlap?" to build a foundation for resolution.',
    '🚀 Strategic Stretch Goal: Facilitate a high-stakes conflict resolution session. Design a structured agenda that ensures equitable airtime for every stakeholder, transitioning the group from contention to cooperation.',
    '💡 Coaching Insight: Develop your "Mediation Toolkit." Study established frameworks like those in "Crucial Conversations" to master the language of de-escalation and collaborative problem-solving.',
    '🎯 Leadership Reflection: "How can I transform this friction into a productive dialogue that moves the team toward our common goal?"'
  ]
},
'Includer': {
  title: 'Includer',
  imageUrl:'https://i.pinimg.com/1200x/56/6f/41/566f41ae61734dceef35509ca0d3dfbd.jpg',
  // Real-World Success Story
  example: 'During a high-stakes product launch, Aman recognized the risk of team members feeling disconnected from the achievement. He orchestrated a surprise appreciation initiative, featuring a video that explicitly showcased the contributions of every individual—regardless of seniority or role. This gesture of radical inclusion went viral internally, significantly boosting cross-departmental morale and reinforcing a culture where every contribution is visible and valued.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Active Inclusion"—in every meeting, consciously scan the room or the video call for those who have remained silent, and intentionally invite their perspective to the table.',
    '🚀 Strategic Stretch Goal: Architect a new organizational tradition that spotlights "invisible" contributors—such as administrative support or operational teams—who are vital to the mission but rarely center-stage.',
    '💡 Coaching Insight: Adopt the "Empty Chair" methodology. During strategic decision-making, always visualize an empty chair representing stakeholders who are absent from the discussion; ask yourself, "Whose voice are we missing, and how does this decision affect them?"',
    '🎯 Leadership Reflection: "How have I expanded our circle of influence today to ensure that no valuable perspective remains on the periphery?"'
  ]
},
'Individualization': {
  title: 'Individualization',
  imageUrl:'https://i.pinimg.com/1200x/7e/5c/11/7e5c11ca61195305ae00d95bc0f3adbd.jpg',
  // Real-World Success Story
  example: 'Meena, acting as a Training Lead, recognized that a "one-size-fits-all" approach to internship training was failing to engage her cohort. She pivoted to curate bespoke learning pathways for each intern—aligning specialized tracks in UI/UX design with DevOps operations based on their intrinsic interests. This commitment to personalized development yielded a 90% retention rate, as interns felt uniquely recognized and professionally empowered.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Observational Awareness"—consciously map the unique professional profile of every teammate, including their preferred communication style, core motivators, and non-verbal stress signals.',
    '🚀 Strategic Stretch Goal: Author bespoke "Individualized Development Plans" (IDPs) for every team member you lead or mentor, ensuring that their growth objectives are aligned with their specific strengths rather than standardized metrics.',
    '💡 Coaching Insight: Leverage professional assessment frameworks (such as CliftonStrengths, MBTI, or DiSC) as diagnostic tools to calibrate your leadership style and tailor your support for maximum impact.',
    '🎯 Leadership Reflection: "Am I managing my team as a homogeneous group, or am I treating each individual as the distinct professional asset they are? What specific data point have I learned about each member today?"'
  ]
},
'Positivity': {
  title: 'Positivity',
  imageUrl:'https://i.pinimg.com/1200x/14/95/47/149547a00561f53d88d850e1fa4c976e.jpg',
  // Real-World Success Story (Professional Polish)
  example: 'Following a challenging product delivery, Nikhil—the project lead—chose to anchor the team’s conclusion in authentic appreciation. Instead of a generic group email, he curated personalized commendations for each team member, explicitly highlighting their individual "value-add." This deliberate act of recognition transformed a period of collective exhaustion into one of shared achievement, effectively fostering a culture of gratitude and re-energizing the team for the next cycle.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate the "Recognition Ritual"—consciously identify one specific "win" or contribution every day and share it with the team to reinforce a culture of appreciation.',
    '🚀 Strategic Stretch Goal: Institutionalize optimism. Architect a company-wide initiative such as a "Gratitude Wall" or a dedicated "Shout-Out" channel to ensure high-effort work is visible and celebrated.',
    '💡 Coaching Insight: Master the "Yes, And..." communication model—a powerful technique to validate the reality of current challenges while maintaining an optimistic, solution-oriented focus.',
    '🎯 Leadership Reflection: "Am I balancing my optimism with realism? How can I ensure my positivity is perceived as a catalyst for growth rather than a dismissal of real issues?"'
  ]
},
'Relator': {
  title: 'Relator',
  imageUrl:'https://i.pinimg.com/1200x/6d/57/84/6d5784cd3edf9c4e012f7f242ca76854.jpg',
  // Real-World Success Story
  example: 'Sushma, leading a high-performing hybrid team, leveraged her Relator strength to transcend physical distance. By consistently prioritizing personalized outreach—such as recognizing life milestones and holding space for authentic, non-transactional check-ins—she cultivated a profound level of psychological safety. Her team\'s trust in her was so deeply rooted that during a critical operational crisis, the group mobilized with unparalleled cohesion and unwavering loyalty.',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Relational Depth"—proactively reach out to one colleague for a non-transactional, one-on-one conversation that focuses on rapport rather than immediate task outcomes.',
    '🚀 Strategic Stretch Goal: Become an "Anchor Mentor." Commit to mentoring 2–3 individuals with a focus on long-term professional evolution and holistic well-being, moving beyond mere task-based management.',
    '💡 Coaching Insight: Master the art of "Virtual Presence"—ensure that your communication in digital spaces remains consistent, authentic, and attentive, proving that deep connections can thrive even in remote environments.',
    '🎯 Leadership Reflection: "Am I investing enough time in the "relational capital" of my team? How can I ensure that my connections are built on genuine mutual trust rather than superficial networking?"'
  ]
},
   'Activator': {
  title: 'Activator',
  imageUrl:'https://i.pinimg.com/1200x/b2/29/63/b22963188f6225e631efd7ad7ef921f2.jpg',
  // Real-World Success Story
  example: 'At a leadership offsite, Manish—a team lead with strong Activator talent—noticed a cycle of "analysis paralysis" stalling their critical projects. Instead of continuing the discussion, he stepped to the whiteboard, mapped a 1-week pilot project, and initiated action. This decisive pivot cut through weeks of organizational indecision, successfully transforming static planning into dynamic, measurable progress.',
  
  // Positive Quote
  quote:   "The best way to get something done is to begin.",
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Micro-Momentum"—start each day by identifying one lingering task and executing the smallest possible first step immediately.',
    '🚀 Strategic Stretch Goal: Act as an "Inertia Breaker." Proactively volunteer to lead projects that are currently stalled, utilizing your talent for initiation to restore operational momentum.',
    '💡 Coaching Insight: Master the "Pause-to-Plan" framework—dedicate 5 minutes to define the ultimate objective before your initial spark leads to execution, ensuring your speed aligns with long-term strategy.',
    '🎯 Leadership Reflection: "Am I driving action for the sake of motion, or am I truly catalyzing meaningful progress? How can I ensure my urgency empowers my team?"'
  ]
},
'Command': {
  title: 'Command',
  imageUrl:'https://i.pinimg.com/1200x/fe/d1/df/fed1df1a256cf33a0c5b799de1e6a701.jpg',
  // Real-World Success Story
  example: 'A manager with Command talent noticed a colleague being unfairly criticized during a high-stakes client call. She calmly intervened, redirected the focus back to the verified facts, and stabilized the conversation. Her ability to step in decisively gave the entire team the confidence to speak up when needed, transforming a tense situation into one of clarity and professional resolution.',
  
  // Positive Quote
  quote: '"Speak your mind—even if your voice shakes." — Maggie Kuhn',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Assertive Clarity"—in every team interaction, practice stating your position concisely and directly without aggressive undertones.',
    '🚀 Strategic Stretch Goal: Facilitate a high-stakes turnaround. Identify a project or situation lacking direction and provide the structural leadership required to bring it back to baseline.',
    '💡 Coaching Insight: Balance "Authority" with "Empathy." Remember that your presence can be intimidating; intentionally use your strength to advocate for those who are hesitant to speak up.',
    '🎯 Leadership Reflection: "Did I lead with strength or with volume today? How can I ensure my decisiveness builds confidence in others rather than overshadowing their voices?"'
  ]
},
'Communication': {
  title: 'Communication',
  imageUrl:'https://i.pinimg.com/1200x/bf/a8/ec/bfa8ec1238acc5ea09f02b620dc8e500.jpg',
  // Real-World Success Story
  example: 'During a high-stakes product pitch, Ananya, a software engineer, leveraged her Communication talent by utilizing a compelling analogy to explain a complex cloud solution. By translating dense technical specifications into a narrative that resonated with the client, she secured their buy-in and turned a challenging technical discussion into a successful partnership opportunity.',
  
  // Positive Quote
  quote: '"Good communication is as stimulating as black coffee, and just as hard to sleep after." — Anne Morrow Lindbergh',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Refine your storytelling—practice framing complex ideas with structured visuals and analogies to ensure clarity and engagement.',
    '🚀 Strategic Stretch Goal: Position yourself as an organizational storyteller. Lead a major internal initiative or town hall meeting where you simplify and translate high-level strategic goals for cross-functional teams.',
    '💡 Coaching Insight: Balance "Expression" with "Active Listening." While your talent lies in conveying ideas, ensure you practice deep, attentive listening to understand the underlying needs of your audience.',
    '🎯 Leadership Reflection: "Did my communication today spark action or just occupy time? How can I ensure my message is not just heard, but deeply understood and actionable?"'
  ]
},
'Competition': {
  title: 'Competition',
  imageUrl:'https://i.pinimg.com/1200x/74/14/a1/7414a110e1b0a361477212acea934ebd.jpg',
  // Real-World Success Story
  example: 'A project manager utilized the Competition talent to revitalize team performance by gamifying the development process. By introducing a transparent leaderboard and celebrating incremental milestones, she transformed a period of sluggish output into a high-energy race toward excellence. This competitive approach fostered healthier collaboration and significantly accelerated project delivery times.',
  
  // Positive Quote
  quote: '"When you win, nothing hurts. But to be a winner, you must plan to win, prepare to win, and expect to win." — Joe Namath',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Performance Benchmarking"—instead of focusing solely on others, compare your current results against your own best performance to foster consistent personal growth.',
    '🚀 Strategic Stretch Goal: Facilitate a healthy competitive environment. Lead a "Hackathon" or a structured innovation sprint where teams can compete to solve key organizational challenges.',
    '💡 Coaching Insight: Balance "Winning" with "Collaboration." Use your competitive drive to set ambitious team goals, but ensure success is measured by collective milestones rather than individual accolades.',
    '🎯 Leadership Reflection: "Am I using my competitive nature to inspire the team to reach new heights, or am I creating unnecessary friction? How can I ensure our competitive focus remains aligned with shared organizational objectives?"'
  ]
},
'Maximizer': {
  title: 'Maximizer',
  imageUrl:'https://i.pinimg.com/1200x/72/17/7c/72177ccf2f8a724bc7eaa0e5eff66c9e.jpg',
  // Real-World Success Story
  example: 'A team leader recognized that "good enough" was stifling innovation in her engineering department. Instead of accepting baseline results, she shifted her focus to "polishing the diamonds"—identifying team members with specific potential and providing them with advanced stretch assignments. This strategic refinement turned average outputs into standout achievements, fostering a culture of continuous improvement and excellence.',
  
  // Positive Quote
  quote: '"Don’t strive to be well-rounded. Strive to be brilliant at what you’re best at." — Marcus Buckingham',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Focus on your "Zone of Genius"—each quarter, identify one area to refine from 80% to 100% mastery rather than spreading your energy too thin.',
    '🚀 Strategic Stretch Goal: Become an "Optimization Architect." Lead a project focused on refining existing processes or product quality, applying your talent for excellence to drive measurable impact.',
    '💡 Coaching Insight: Balance "Excellence" with "Pragmatism." While you push for the highest standard, ensure your pursuit of perfection remains aligned with project timelines and organizational outcomes.',
    '🎯 Leadership Reflection: "Am I polishing the right diamonds, or am I getting lost in the details? How can I ensure my standards inspire the team toward growth rather than causing fatigue?"'
  ]
},
'Self-Assurance': {
  title: 'Self-Assurance',
  imageUrl:'https://i.pinimg.com/1200x/23/fa/24/23fa240b0f21768e17d68e64d7ded214.jpg',
  // Real-World Success Story
  example: 'During a critical organizational pivot, a manager with Self-Assurance recognized that team morale was faltering due to extreme market uncertainty. Instead of seeking consensus from a paralyzed leadership group, she trusted her internal compass to set a clear, decisive direction for her department. Her unwavering conviction acted as an anchor for her team, turning widespread anxiety into focused execution and resulting in the successful delivery of a high-stakes project ahead of schedule.',
  
  // Positive Quote
  quote: '"Believe in yourself and the world will believe in you." — Unknown',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Evidence-Based Confidence"—keep a success journal to document situations where your internal conviction led to a positive outcome, providing tangible proof of your instincts.',
    '🚀 Strategic Stretch Goal: Take the lead on a "High-Ambiguity Project." Rely on your internal compass to navigate the uncertainty, providing a steady hand for the team when others are hesitant.',
    '💡 Coaching Insight: Balance "Confidence" with "Collaboration." Your Self-Assurance is a superpower; however, ensure you combine it with analytical data or input from others to build broader team buy-in and organizational alignment.',
    '🎯 Leadership Reflection: "Did I lead with conviction today? How can I ensure my team feels empowered by my confidence rather than feeling excluded from the decision-making process?"'
  ]
},
'Significance': {
  title: 'Significance',
  imageUrl:'https://i.pinimg.com/1200x/0a/46/f2/0a46f287cfa4f7f169a72f52c0028c30.jpg',
  // Real-World Success Story
  example: 'A director in a mid-sized firm observed that her team was suffering from low morale, primarily because their contributions felt disconnected from the company’s impact. By utilizing her Significance talent, she restructured internal reporting to explicitly highlight individual contributions and how they directly enabled the firm’s quarterly successes. This shift didn’t just boost morale; it fostered an culture of high-accountability where every team member felt their work was truly meaningful and visible.',
  
  // Positive Quote
  quote: '"The meaning of life is to find your gift. The purpose of life is to give it away." — Pablo Picasso',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Impact-Alignment"—at the end of each day, identify one task you completed and articulate how it contributed to the broader team objective or organizational value.',
    '🚀 Strategic Stretch Goal: Become an "Visibility Champion." Lead projects that are high-impact but currently lack visibility; ensure your team’s contributions are showcased to key stakeholders to drive institutional recognition.',
    '💡 Coaching Insight: Balance "Desire for Impact" with "Humility." While your drive for significance is a powerful motivator, ensure you recognize and elevate the contributions of others—your leadership is most potent when it empowers collective success.',
    '🎯 Leadership Reflection: "Am I seeking impact for the work itself, or for the recognition? How can I ensure my need for significance translates into building a legacy that supports and uplifts my entire team?"'
  ]
},
'Woo': {
  title: 'Woo (Winning Others Over)',
  imageUrl:'https://i.pinimg.com/1200x/a8/5d/90/a85d90ceb668b9e3e92f70d4e12ca8b3.jpg',
  // Real-World Success Story
  example: 'During a cross-departmental integration project, the team faced significant resistance to new workflows. A project lead with high Woo talent organized a series of informal "Coffee & Context" sessions, where she actively engaged stakeholders, listened to their concerns, and built genuine personal rapport. By turning initial skepticism into a collaborative relationship, she secured broad buy-in for the integration, transforming potential roadblocks into active advocates for the new system.',
  
  // Positive Quote
  quote: '"You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you." — Dale Carnegie',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Relational Breadth"—make a conscious effort to initiate a brief, high-quality interaction with someone outside your immediate team or circle to broaden your network.',
    '🚀 Strategic Stretch Goal: Become an "Organizational Bridge-Builder." Volunteer to lead a project that requires building consensus across fragmented departments, utilizing your natural ability to connect to create unity.',
    '💡 Coaching Insight: Balance "Charm" with "Substance." While your ability to connect is a major strength, ensure you follow up your initial meetings with consistent reliability to transform transient connections into deep, professional trust.',
    '🎯 Leadership Reflection: "Am I using my ability to connect to foster genuine collaboration, or am I merely collecting contacts? How can I ensure my influence supports the long-term success of the people I connect with?"'
  ]
},
'Analytical': {
  title: 'Analytical',
  imageUrl:'https://i.pinimg.com/1200x/7d/72/f4/7d72f453d30beff498bcfae30d278285.jpg',
  // Real-World Success Story
  example: 'During a complex budget review, an analyst with high Analytical talent identified a recurring discrepancy in cross-departmental expenditures that others had overlooked. By methodically deconstructing the data and tracing the patterns back to their source, he not only saved the firm significant capital but also established a more robust, data-driven reporting framework that is now the organizational standard.',
  
  // Positive Quote
  quote: '"Data-driven decisions are the foundation of sustainable success." ',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Pattern Recognition"—in every meeting or project, consciously look for the underlying data points or assumptions that drive the primary arguments being made.',
    '🚀 Strategic Stretch Goal: Become an "Insights Architect." Lead a project that requires synthesizing large, complex datasets into a clear, actionable strategic narrative for senior leadership.',
    '💡 Coaching Insight: Balance "Analysis" with "Action." Your talent thrives in deconstructing complex problems, but ensure you partner with "Activator" or "Achiever" colleagues to translate your insights into timely, decisive results.',
    '🎯 Leadership Reflection: "Am I using analysis to provide clarity and progress, or am I getting lost in the details of the data? How can I ensure my insights are communicated simply enough to drive effective decision-making?"'
  ]
},
'Context': {
  title: 'Context',
  imageUrl:'https://i.pinimg.com/1200x/bc/a1/49/bca149731d8cb80907f0aa1ca95bc4ef.jpg',
  // Real-World Success Story
  example: 'A project manager noticed that her team was repeating past mistakes that had previously stalled product launches. Utilizing her Context talent, she compiled a "Lessons Learned" repository, documenting the historical "why" and "how" behind previous organizational challenges. By framing these past experiences as valuable strategic assets, she prevented a costly error during a new product rollout, enabling the team to move forward with a clearer understanding of the landscape.',
  
  // Positive Quote
  quote: '"If you want to understand today, you have to search yesterday." — Pearl S. Buck',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Retrospective Awareness"—end every week by identifying one task or project interaction and documenting the historical context that influenced the current outcome.',
    '🚀 Strategic Stretch Goal: Become an "Organizational Historian." Lead a "Post-Mortem" or "Project Retro" initiative for your team, ensuring that historical context is analyzed to inform smarter, future-oriented decision-making.',
    '💡 Coaching Insight: Balance "Looking Backward" with "Future-Focus." Your strength is grounding decisions in history; partner with "Futuristic" or "Strategic" colleagues to ensure your contextual insights are used to build momentum, not dwell on the past.',
    '🎯 Leadership Reflection: "Am I using history to provide wisdom for our next steps, or am I anchoring the team in the past? How can I ensure my contextual awareness makes the team feel prepared rather than restricted?"'
  ]
}, 
'Futuristic': {
  title: 'Futuristic',
  imageUrl:'https://i.pinimg.com/1200x/18/e8/32/18e8323f144464104f86b58bac6f2b47.jpg',
  // Real-World Success Story
  example: 'A product strategist with high Futuristic talent noticed that her team was consistently focused on near-term feature parity rather than long-term market trends. By creating a "Vision Roadmap" that illustrated the industry’s trajectory 3–5 years out, she helped the team pivot from reactive development to proactive innovation. This shift enabled the company to build features today that solved the problems of tomorrow, ultimately securing a significant first-mover advantage.',
  
  // Positive Quote
  quote: '"The best way to predict the future is to create it." — Peter Drucker',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Future-Casting"—allocate 15 minutes each week to research emerging technological, social, or economic trends and brainstorm how they might disrupt your current projects.',
    '🚀 Strategic Stretch Goal: Become an "Innovation Evangelist." Lead a "Future-State Workshop" for your team to help them visualize long-term goals, moving the discussion beyond the immediate quarterly roadmap.',
    '💡 Coaching Insight: Balance "Vision" with "Implementation." Your talent for seeing what’s possible is a major asset; partner with "Focus" or "Achiever" colleagues to ensure your bold visions are broken down into actionable, high-velocity steps.',
    '🎯 Leadership Reflection: "Am I painting a compelling picture of our future that motivates the team to act now? How can I ensure my forward-looking insights provide a sense of direction rather than a sense of distance?"'
  ]
},
  'Ideation': {
  title: 'Ideation',
  
  // Real-World Success Story
  example: 'Facing a stagnating product roadmap, Arjun used his Ideation talent to facilitate a "Blue Sky" brainstorming session. By encouraging the team to discard all conventional constraints, he surfaced a novel, unconventional feature set that eventually became the company’s primary revenue driver, proving that radical creative thinking can solve systemic business challenges.',
  
  // Positive Quote
  quote: '"Ideas are the beginning points of all fortunes." — Napoleon Hill',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Concept Mapping"—capture every new idea in a dedicated digital notebook; review it weekly to identify patterns and potential real-world applications.',
    '🚀 Strategic Stretch Goal: Become an "Innovation Catalyst." Proactively lead cross-functional workshops designed to generate disruptive solutions for existing operational bottlenecks.',
    '💡 Coaching Insight: Balance "Creativity" with "Practical Implementation." Use your talent to dream big, but partner with "Deliberative" or "Focus" colleagues to vet your ideas for feasibility and strategic alignment.',
    '🎯 Leadership Reflection: "Am I generating ideas for the sake of novelty, or are my concepts addressing meaningful problems? How can I ensure my team feels empowered to refine my abstract concepts into actionable plans?"'
  ]
},
'Input': {
  title: 'Input',
  imageUrl:'https://i.pinimg.com/1200x/89/c3/2b/89c32b7ca517c5bf5e599571ce2759ea.jpg',
  // Real-World Success Story
  example: 'During a major market shift, a product strategist leveraged her Input talent to compile a comprehensive library of competitive research, industry trends, and regulatory updates. By synthesizing this massive influx of information into a digestible strategic brief, she provided her leadership team with the data-backed insights necessary to pivot their business model effectively ahead of the competition.',
  
  // Positive Quote
  quote: '"Knowledge is power. Information is liberating." — Kofi Annan',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Curated Learning"—instead of collecting information indiscriminately, focus on gathering deep knowledge in one specific domain that directly advances your team’s core mission.',
    '🚀 Strategic Stretch Goal: Act as the "Knowledge Hub." Create a shared internal resource, such as a newsletter or a curated database, to distribute high-value information that benefits your entire department.',
    '💡 Coaching Insight: Balance "Acquisition" with "Application." Your strength lies in gathering resources, but your professional value is maximized when you translate that raw data into clear, actionable advice for others.',
    '🎯 Leadership Reflection: "Is my knowledge base helping my team make faster, better decisions? How can I ensure that I am sharing my insights effectively rather than hoarding them?"'
  ]
},
'Intellection': {
  title: 'Intellection',
  imageUrl:'https://i.pinimg.com/1200x/8a/92/3d/8a923db7e846dd7adf7cc45127f17b7b.jpg',
  // Real-World Success Story
  example: 'A senior strategist utilized her Intellection talent to deconstruct a long-standing departmental inefficiency. While others were quick to implement temporary "band-aid" solutions, she spent time in deep reflection and analysis to understand the root cognitive biases causing the problem. Her eventual solution, which involved a fundamental restructuring of team communication, yielded a permanent increase in operational clarity and team cohesion.',
  
  // Positive Quote
  quote: '"The unexamined life is not worth living." — Socrates',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Structured Contemplation"—dedicate 30 minutes of uninterrupted "white space" each day to think deeply about complex problems, ensuring that your reflections remain tethered to actionable outcomes.',
    '🚀 Strategic Stretch Goal: Become an "Intellectual Mentor." Lead a "Theory-to-Practice" roundtable where you help team members apply deep thinking to solve real-time challenges, bridging the gap between abstract reflection and practical execution.',
    '💡 Coaching Insight: Balance "Reflection" with "Collaboration." Your talent thrives in solitude, but your impact is maximized when you share your insights with others. Partner with "Activator" or "Woo" colleagues to ensure your reflections find their way into the world.',
    '🎯 Leadership Reflection: "Am I thinking for the purpose of clarity and better decision-making, or am I getting lost in over-thinking? How can I ensure my insights are accessible and useful to my team?"'
  ]
},
'Learner': {
  title: 'Learner',
  imageUrl:'https://i.pinimg.com/1200x/ae/96/b8/ae96b8c33521bd359149aceecb1d3593.jpg',
  // Real-World Success Story
  example: 'A project engineer observed that his team was using outdated technical standards, leading to compliance risks. By leveraging his Learner talent, he undertook a rigorous, self-directed certification program to master the latest industry regulations. He then translated this complex information into a simplified training manual for his peers, effectively modernizing the team’s workflow and reducing compliance errors by 40%.',
  
  // Positive Quote
  quote: '"The beautiful thing about learning is that no one can take it away from you." — B.B. King',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Micro-Learning"—dedicate 20 minutes each day to acquiring a new skill or reading a professional journal article relevant to your industry, ensuring your knowledge base remains agile.',
    '🚀 Strategic Stretch Goal: Become a "Knowledge Transfer Champion." Proactively identify internal skill gaps and curate resources or host brief workshops to help your colleagues upskill alongside you.',
    '💡 Coaching Insight: Balance "Knowledge Acquisition" with "Practical Application." While your drive to learn is a strength, ensure you partner with "Activator" or "Achiever" colleagues to apply your new insights to real-world, high-impact projects.',
    '🎯 Leadership Reflection: "Am I learning to solve specific professional challenges, or just for the sake of novelty? How can I ensure my continuous growth directly benefits my team’s performance?"'
  ]
},
'Strategic': {
  title: 'Strategic',
  imageUrl:'https://i.pinimg.com/1200x/30/22/2f/30222f6b0b83ba00051f9151ec26bfc9.jpg',
  // Real-World Success Story
  example: 'Faced with a sudden market disruption, a product director utilized her Strategic talent to rapidly evaluate multiple contingency pathways. Instead of reacting to the immediate pressure, she identified an emergent opportunity in a parallel market segment that others had ignored. By anticipating the long-term implications, she steered her company into a new, high-growth area, effectively turning a competitive threat into their most significant annual revenue stream.',
  
  // Positive Quote
  quote: '"Strategy is about making choices, trade-offs; it is about deliberately choosing to be different." — Michael Porter',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Scenario Planning"—for any major project or task, spend 10 minutes drafting three distinct "what-if" scenarios to identify potential obstacles and alternative paths to success.',
    '🚀 Strategic Stretch Goal: Become an "Architect of Vision." Volunteer to contribute to your company’s long-term roadmap or competitive positioning exercises; utilize your foresight to highlight hidden opportunities.',
    '💡 Coaching Insight: Balance "Vision" with "Tactical Execution." Your talent lies in seeing the best path forward; partner with "Achiever" or "Activator" colleagues to ensure your strategies are grounded in reality and delivered on time.',
    '🎯 Leadership Reflection: "Am I anticipating future trends, or am I getting stuck in speculative thinking? How can I communicate my strategic vision in a way that provides clarity and confidence for the team?"'
  ]
},
'Achiever': {
  title: 'Achiever',
  imageUrl:'https://i.pinimg.com/1200x/71/11/28/7111289c41f36f9e0a348478ce60b3df.jpg',
  // Real-World Success Story
  example: 'A project lead with the Achiever talent noticed that the team was struggling with a fragmented workflow and stagnant output. By setting aggressive daily milestones and fostering a culture of "done is better than perfect," she transformed the team’s output. Her relentless drive for progress not only met the quarter’s goals ahead of schedule but also instilled a sense of professional urgency that became the new departmental benchmark.',
  
  // Positive Quote
  quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Milestone Tracking"—start each day by defining 3–5 high-impact objectives. Track your completion rate to build personal momentum and keep your professional engine running.',
    '🚀 Strategic Stretch Goal: Become an "Execution Architect." Take ownership of a critical, high-risk project; apply your drive to turn complex challenges into a series of manageable, executable tasks.',
    '💡 Coaching Insight: Balance "Output" with "Well-being." Your talent thrives on continuous effort, but ensure you recognize the importance of periodic reflection to prevent burnout and ensure your hard work remains sustainable.',
    '🎯 Leadership Reflection: "Am I working on what matters most, or just checking boxes? How can I ensure my drive for achievement empowers my team to reach their own goals rather than leaving them feeling exhausted?"'
  ]
},
'Arranger': {
  title: 'Arranger',
  imageUrl:'https://i.pinimg.com/1200x/b6/fe/9c/b6fe9c36739c64db55792903c0a9d6ea.jpg',
  // Real-World Success Story
  example: 'A project manager with high Arranger talent inherited a team struggling with fragmented resources and conflicting schedules. By re-organizing the team structure and synchronizing workflows, he turned a chaotic environment into a streamlined operation. His ability to manage multiple moving parts simultaneously resulted in project delivery two weeks ahead of schedule and significantly improved cross-functional coordination.',
  
  // Positive Quote
  quote: '"The essence of strategy is choosing what not to do." — Michael Porter',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Resource Synchronization"—at the start of every project, intentionally map out all available resources and identify how they can be better re-arranged to optimize output.',
    '🚀 Strategic Stretch Goal: Become an "Operations Orchestrator." Take on complex projects that involve multi-stakeholder management; use your talent to synchronize diverse efforts into a single, cohesive workflow.',
    '💡 Coaching Insight: Balance "Flexibility" with "Stability." While you thrive on juggling multiple priorities, ensure your constant rearranging doesn’t create confusion for your team. Partner with "Consistency" or "Deliberative" colleagues to ensure that your optimizations are sustainable for everyone.',
    '🎯 Leadership Reflection: "Am I arranging for the sake of efficiency, or am I creating unnecessary disruption? How can I communicate my organizational changes in a way that empowers the team rather than adding stress?"'
  ]
},
'Belief': {
  title: 'Belief',
  imageUrl:'https://i.pinimg.com/1200x/7a/77/fd/7a77fd0509f754f867b272d69b91d59b.jpg',
  // Real-World Success Story
  example: 'A non-profit program director with high Belief talent recognized that her organization had lost touch with its founding humanitarian mission due to rapid administrative expansion. By initiating a "Values-Realignment" project, she re-centered team discussions on the core impact of their work. This shift restored team motivation and clarified the organization’s long-term objectives, leading to significantly higher donor engagement and program outcomes.',
  
  // Positive Quote
  quote: '"Values are not what you say, they are what you do." — Unknown',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Value-Check"—each morning, identify how one of your key decisions today aligns with your core personal and professional values.',
    '🚀 Strategic Stretch Goal: Become a "Culture Guardian." Champion initiatives that keep your team’s mission and core values at the forefront of their daily operations, ensuring that growth does not compromise integrity.',
    '💡 Coaching Insight: Balance "Conviction" with "Inclusivity." While your firm sense of purpose is a powerful leadership driver, partner with "Restorative" or "Harmony" colleagues to ensure your perspective remains open to diverse viewpoints without diluting your principles.',
    '🎯 Leadership Reflection: "Am I using my belief to inspire commitment to our shared goals, or is it creating barriers to collaboration? How can I ensure my passion for our mission empowers others to lead?"'
  ]
},
'Consistency': {
  title: 'Consistency',
  imageUrl:'https://i.pinimg.com/1200x/c3/13/d6/c313d67243df789e25f413daf9ecc64f.jpg',
  // Real-World Success Story
  example: 'A project operations lead recognized that his team’s output was erratic, with different members following different procedures for the same tasks. By implementing a standardized "Operating Rhythm" and clear, documented protocols, he ensured every team member operated under the same rules. This brought predictability to project timelines, boosted client trust in their reliability, and eliminated the "re-work" caused by inconsistent processes.',
  
  // Positive Quote
  quote: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Standardization"—identify one recurring task and document a clear, repeatable process for it that can be used by others to ensure uniformity and efficiency.',
    '🚀 Strategic Stretch Goal: Become an "Operations Advocate." Champion the development of a departmental "Best Practices" playbook, ensuring that your commitment to fair, consistent treatment of all projects becomes an organizational standard.',
    '💡 Coaching Insight: Balance "Rules" with "Flexibility." While your strength is providing a stable, predictable foundation, partner with "Adaptability" or "Ideation" colleagues to ensure that your processes remain effective when faced with unique, edge-case challenges.',
    '🎯 Leadership Reflection: "Am I promoting consistency to foster fairness and efficiency, or am I adhering to rules that have become outdated? How can I ensure my standard processes empower the team rather than stifling their ability to innovate?"'
  ]
},
'Deliberative': {
  title: 'Deliberative',
  imageUrl:'https://i.pinimg.com/1200x/ef/ea/e1/efeae146ca7ba48354edb455f33aedae.jpg',
  // Real-World Success Story
  example: 'A project manager with high Deliberative talent was tasked with overseeing a high-stakes technical migration. Recognizing the significant potential for hidden failure points, he insisted on an extended "Risk Assessment" phase. His methodical identification of these vulnerabilities prevented a catastrophic system outage, saving the company significant downtime and ensuring a seamless transition that would have otherwise jeopardized their client commitments.',
  
  // Positive Quote
  quote: '"Measure twice, cut once." — Proverb',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Risk-Benefit Mapping"—for important decisions, dedicate time to document the top three potential risks and their corresponding mitigation strategies.',
    '🚀 Strategic Stretch Goal: Become an "Organizational Safety Champion." Volunteer for quality assurance or risk management committees where your ability to anticipate obstacles is a core asset for project success.',
    '💡 Coaching Insight: Balance "Caution" with "Decisiveness." Your talent excels at identifying potential issues; partner with "Activator" or "Achiever" colleagues to ensure that your deliberative process leads to timely action rather than paralysis.',
    '🎯 Leadership Reflection: "Am I deliberating to ensure a successful outcome, or am I stalling due to risk-aversion? How can I communicate my risk assessments in a way that builds team confidence rather than fear?"'
  ]
},
'Discipline': {
  title: 'Discipline',
  imageUrl:'https://i.pinimg.com/1200x/97/d1/ff/97d1ffb657a617227af15c763522117f.jpg',
  // Real-World Success Story
  example: 'A project lead utilized her Discipline talent to navigate a complex, multi-year infrastructure project. By implementing a strict project rhythm, rigorous documentation standards, and granular task tracking, she ensured that the team hit every interim milestone despite numerous external delays. Her commitment to structured order provided the team with the predictability needed to maintain focus and execute successfully, ultimately delivering the project under budget.',
  
  // Positive Quote
  quote: '"Discipline is the bridge between goals and accomplishment." — Jim Rohn',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Structured Routine"—create a standard daily "Shut-Down" checklist to ensure all loose ends are tied up, allowing you to start the next day with total clarity.',
    '🚀 Strategic Stretch Goal: Become an "Efficiency Architect." Design a new, simplified project-tracking system for your team that reduces administrative burden while maintaining high standards of accountability.',
    '💡 Coaching Insight: Balance "Structure" with "Agility." While your strength lies in precision, ensure your systems are flexible enough to accommodate necessary changes. Partner with "Adaptability" or "Ideation" colleagues to ensure your discipline serves progress rather than routine.',
    '🎯 Leadership Reflection: "Am I fostering discipline to drive excellence, or am I creating bureaucracy? How can I ensure that my structured approach makes it easier for my team to perform their best work?"'
  ]
},
'Focus': {
  title: 'Focus',
  imageUrl:'https://i.pinimg.com/1200x/26/c1/75/26c17520faf5268b12a336fb0ab900a4.jpg',
  // Real-World Success Story
  example: 'A software engineer with high Focus talent was assigned a critical, multi-month migration project that had stalled due to frequent scope creep and shifting priorities. By blocking out deep-work sessions and relentlessly prioritizing high-impact tasks, he successfully steered the team through the remaining migration phases without distraction. His disciplined approach allowed the project to reach completion two weeks early, significantly improving system stability.',
  
  // Positive Quote
  quote: '"The successful warrior is the average man, with laser-like focus." — Bruce Lee',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Deep-Work Blocking"—dedicate 90-minute intervals to high-priority objectives, ensuring all notifications are silenced to maintain intense concentration.',
    '🚀 Strategic Stretch Goal: Become an "Objective Anchor." Help your team stay on track during meetings by refocusing conversations on the primary project goals whenever discussions begin to drift.',
    '💡 Coaching Insight: Balance "Intensity" with "Team Awareness." While your ability to concentrate is immense, ensure you remain accessible to your team. Partner with "Connectedness" or "Developer" colleagues to ensure your focus doesn’t isolate you from the broader team dynamics.',
    '🎯 Leadership Reflection: "Am I focusing on the right priorities, or am I merely working on what is right in front of me? How can I ensure my intensity drives collective success rather than just personal productivity?"'
  ]
},
'Responsibility': {
  title: 'Responsibility',
  imageUrl:'https://i.pinimg.com/1200x/b8/64/bb/b864bb03a2f009f3819e8201a89675bb.jpg',
  // Real-World Success Story
  example: 'A project coordinator with high Responsibility talent became the "go-to" leader for high-stakes client deliverables. When a key vendor failed to deliver on a critical deadline, she assumed personal ownership of the recovery, coordinating internal teams and managing stakeholder expectations until the project was successfully back on track. Her reputation for unwavering reliability turned the crisis into an opportunity to solidify long-term client trust.',
  
  // Positive Quote
  quote: '"The price of greatness is responsibility." — Winston Churchill',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Accountability Mapping"—start each day by identifying one key task where you are the primary point of ownership, ensuring you have the necessary resources to deliver as promised.',
    '🚀 Strategic Stretch Goal: Become an "Ownership Advocate." Mentor junior team members on the professional value of accountability and how to take ownership of their own professional growth and project outcomes.',
    '💡 Coaching Insight: Balance "Accountability" with "Delegation." While your natural tendency is to "carry the load," partner with "Developer" or "Maximizer" colleagues to identify tasks that should be delegated, allowing you to focus on high-impact leadership responsibilities.',
    '🎯 Leadership Reflection: "Am I taking ownership of outcomes to ensure excellence, or am I over-functioning for the team? How can I ensure my sense of responsibility empowers others to act rather than fostering dependency?"'
  ]
},
'Restorative': {
  title: 'Restorative',
  imageUrl:'https://i.pinimg.com/1200x/94/e6/be/94e6be56e5a5d643f7088d3ed543cca8.jpg',
  // Real-World Success Story
  example: 'A technical lead with high Restorative talent was assigned to a legacy system that had become plagued by frequent crashes and performance bottlenecks. Rather than pushing for a complete (and costly) system replacement, he methodically diagnosed the root causes of the technical debt, repaired the core infrastructure, and implemented automated health checks. His efforts restored the system to peak performance, saving the company significant capital and restoring team confidence in the platform.',
  
  // Positive Quote
  quote: '"The art of healing comes from nature, not from the physician." — Paracelsus',
  
  // Professional Growth Plan
  growthPlan: [
    '⚡ Daily Practice: Cultivate "Root-Cause Analysis"—for every problem you encounter, take five minutes to map out the underlying factors rather than applying an immediate, surface-level fix.',
    '🚀 Strategic Stretch Goal: Become an "Efficiency Surgeon." Seek out projects involving broken processes or struggling teams; use your talent to diagnose the core issues and lead the efforts to restore them to full functionality.',
    '💡 Coaching Insight: Balance "Problem-Solving" with "Growth." Your talent excels when things are broken, but ensure you also contribute to building new solutions. Partner with "Futuristic" or "Strategic" colleagues to ensure you are helping to create the future, not just fixing the past.',
    '🎯 Leadership Reflection: "Am I focusing my energy on problems that truly need restoration, or am I searching for things to fix? How can I ensure my diagnostic skills are valued as a strategic asset for the team?"'
  ]
}
  };

  // Agar name list mein nahi hai, toh fallback object
  const details = contentData[name] || { 
    title: name, 
    example: 'Content coming soon...', 
    growthPlan: ['No plan available yet.'] 
  };
const getIcon = (text) => {
    if (text.includes('Daily')) return <Zap size={20} className="text-yellow-500" />;
    if (text.includes('Strategic')) return <Rocket size={20} className="text-purple-500" />;
    if (text.includes('Coaching')) return <Lightbulb size={20} className="text-blue-500" />;
    if (text.includes('Leadership')) return <Target size={20} className="text-red-500" />;
    return <BookOpen size={20} />;
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', padding: '60px 20px', background: '#fcfcfc', fontFamily: 'Inter' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.h1 
          initial={{ y: -20 }} animate={{ y: 0 }}
          style={{ fontSize: '3.5rem', color: '#0f172a', textAlign: 'center', marginBottom: '60px' }}
        >
          {details.title}
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'start' }}>
          
          <motion.div initial={{ x: -30 }} animate={{ x: 0 }}>
            <h2 style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Real-World Application</h2>
            <p style={{ lineHeight: '1.9', color: '#334155', fontSize: '1.2rem', margin: '20px 0 40px' }}>{details.example}</p>

            <h3 style={{ color: '#0f172a', marginBottom: '25px' }}>Growth Trajectory</h3>
            {details.growthPlan.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10, background: '#f1f5f9' }}
                style={{ padding: '20px', borderRadius: '16px', marginBottom: '15px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px' }}
              >
                <div>{getIcon(item)}</div>
                <p style={{ margin: 0, color: '#475569' }}>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <img src={details.imageUrl} alt={details.title} style={{ width: '100%', borderRadius: '30px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }} />
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: '600', textDecoration: 'none' }}>
            <ArrowLeft size={18} /> Back to Dashboard
          </Link>
        </div>
      </div>
    </motion.div>
  );
}