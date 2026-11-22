/* =====================================================================
   ALL THE WORDS AND PICTURES ON THE WEBSITE LIVE IN THIS FILE.

   How to edit:
   - Change any text between the quotation marks "like this".
   - **two stars** around words make them bold.
   - [words](https://link) turns words into a link.
   - To add a photo: put it in assets/photos, then copy one
     { image: "...", caption: "..." } line and change the name.
   ===================================================================== */

window.PORTFOLIO = {

  name: "Fatematuj Johura Tonni",
  eyebrow: "Cumilla, Bangladesh · First-generation student · Intended major: Neuroscience (with interests in Psychology and Biology)",
  cover: "assets/photos/cover.jpg",
  coverAlt: "A collage of twelve photos of Tonni: speaking on stage, receiving awards, volunteering with Red Crescent, painting a mural, and with children during a winter clothes drive",

  quoteBn: "",
  quoteEn: "“You can do it. Go, take the microphone, and recite the poem.”",
  intro: "My mother said these words to me when I was in first grade, at my village primary school, and it was the first time anyone handed me a voice. I have been trying to pass that microphone on ever since. I believe learning becomes complete only when we teach it to someone else, put it to use in real life, and let it make a difference for the people around us. That belief shapes everything I do. Through NeuroSynapse, I asked 212 young people about the stress no one had asked them about. At the bedsides of the National Institute of Cardiovascular Diseases, I listen to heart-attack patients describe how they really live, so that the advice they receive fits their lives. In classrooms, I hand the questions to younger students and wait for their answers. As a first-generation student headed toward neuroscience, my goal is to keep turning what I learn into something that helps the people around me.",

  numbers: [
    { value: "3",    label: "international research conferences" },
    { value: "430+", label: "people interviewed or surveyed" },
    { value: "80",   label: "students in NeuroSynapse competitions" },
    { value: "35+",  label: "awards and honors" }
  ],

  connect: [
    { kind: "linkedin",  label: "LinkedIn",  handle: "fatematuj-tonni",          url: "https://www.linkedin.com/in/fatematuj-tonni/" },
    { kind: "youtube",   label: "YouTube",   handle: "@tonniteaches",            url: "https://www.youtube.com/@tonniteaches" },
    { kind: "facebook",  label: "Facebook",  handle: "fatematuj.johura.tonni",   url: "https://www.facebook.com/fatematuj.johura.tonni.2025" },
    { kind: "instagram", label: "Instagram", handle: "@johura_tonni",            url: "https://www.instagram.com/johura_tonni/" },
    { kind: "email",     label: "Email",     handle: "fatematujtonni@gmail.com", url: "mailto:fatematujtonni@gmail.com" }
  ],

  /* ============== 1. RESEARCH ============== */
  research: {
    lead: "Before my first conference in Türkiye, I had no idea how research worked. I learned by writing that first abstract, and I have been learning by doing ever since, which is how I learn best.",
    conferences: [
      { name: "2nd International Conference on Bangladesh Studies (ICBS-II)", where: "Istanbul University, Türkiye · 9–10 October 2026", result: "Presented as author", note: "270+ researchers took part" },
      { name: "2nd International Student Research Conference (ISRC) 2026", where: "University of Dhaka · 27 December 2026", result: "Selected for oral presentation", note: "2,363 papers submitted, about 20% accepted" },
      { name: "2nd International Conference on Social Sciences: Challenges, Innovation and Development (ICSS 2027)", where: "Sylhet · January 2027", result: "Accepted for presentation", note: "" }
    ],
    projects: [
      {
        kicker: "Research Project 1",
        title: "The July Revolution and Bangladeshi Youth",
        meta: "Lead Researcher and Author · Part of [NeuroSynapse](https://www.instagram.com/_neurosynapse_) · January 2026 – present",
        blocks: [
          { type: "p", text: "In July 2024, young people in Bangladesh led a movement that changed the country. Most of them followed it and joined it through their phones. I wanted to understand what those weeks did to them, so I designed an anonymous survey in Bangla and English and collected answers from 118 people aged 18 to 30. I did this study on my own: the questions, the outreach, the analysis, and the writing." },
          { type: "p", text: "The same study answered two different questions, so I presented two different parts of it." },
          { type: "callout", icon: "🗳️", tone: "blue", text: "**At ICBS-II, Istanbul University:** how the July Revolution moved young people to take part in Bangladesh’s national parliamentary election. This was the civic side of the story." },
          { type: "callout", icon: "📱", tone: "purple", text: "**At ISRC 2026, University of Dhaka:** what constant exposure to violence on social media did to young people’s mental health. This was the emotional side of the story." },
          { type: "gallery",
            items: [
              { image: "assets/certs/research-icbs2-istanbul-2026.jpg", caption: "Certificate from ICBS-II 2026, Istanbul University, confirming I presented this paper as an author.", alt: "ICBS-II 2026 certificate" },
              { image: "assets/photos/flag.jpg", caption: "Holding the national flag on 5 August 2024, the day the July movement ended. The weeks before this day are what my research is about.", alt: "Tonni holding a large Bangladesh flag in a crowd" },
              { image: "assets/photos/isrc-slide-title.png", caption: "Title slide of my ISRC 2026 oral presentation.", alt: "ISRC 2026 presentation title slide", link: "assets/docs/isrc-2026-slides.pdf" }
            ],
            side: [
              { type: "list", title: "What I found", items: [
                "79.3% saw movement content on social media very often, and 86.2% relied mainly on Facebook.",
                "73.5% often had intrusive thoughts about disturbing content, 69.9% had trouble concentrating, and 69.6% felt anxious or overwhelmed.",
                "Those who saw disturbing content very often reported more anxiety than those who saw it less (76.7% compared with 56.4%).",
                "97.2% want stronger media-literacy education, and 91.7% want mental-health support built into youth and education policy."
              ] },
              { type: "p", text: "The young people who carried the movement also carried its weight. My next step is a larger, more balanced sample with validated mental-health scales." },
              { type: "note", text: "Manuscript under review at CPSR Journal. [See the ISRC slides (PDF)](assets/docs/isrc-2026-slides.pdf)" }
            ]
          }
        ]
      },
      {
        kicker: "Research Project 2",
        title: "Heart Attack Patients at NICVD",
        meta: "Dietary Patterns and Lifestyle Risk Factors Among Acute Myocardial Infarction (AMI) Patients Admitted to the National Institute of Cardiovascular Diseases (NICVD), Dhaka · July 2025 – present",
        blocks: [
          { type: "p", text: "**Advisor:** Dr. Md Hasan Faruque Bhuiyan, Medicine and Cardiology Specialist, National Institute of Cardiovascular Diseases (NICVD), Dhaka" },
          { type: "p", text: "Heart disease is one of the biggest killers in Bangladesh, yet most patients I meet had never been told how their daily food and habits were connected to their heart. I wanted to find out what people were eating and doing in the years before their heart attack so that the advice they get afterward actually fits their lives." },
          { type: "p", text: "The cardiology wards are usually open only to medical students. Dr. Bhuiyan opened them to me after I told him about my NeuroSynapse survey. Since then I sit at patients’ bedsides with a questionnaire and ask about their diet, salt, tobacco, physical activity, and medical history, and I keep every answer anonymous." },
          { type: "gallery",
            items: [
              { image: "assets/photos/nicvd-bedside.jpg", caption: "Interviewing a patient at his bedside in the NICVD cardiology ward.", alt: "Tonni in a white coat interviewing a patient sitting on a hospital bed" },
              { image: "assets/photos/nicvd-ward.jpg", caption: "Each interview covers diet, salt, tobacco, physical activity, and medical history.", alt: "Tonni sitting on a ward bed with a clipboard, talking with a patient" }
            ],
            side: [
              { type: "stat", value: "109", text: "**patients interviewed as of 22 November 2026.** This study is ongoing, so the number keeps growing. My Common App lists an earlier count because it was written before these interviews." }
            ]
          },
          { type: "note", text: "Every photo of a patient or participant on this page is shared with their permission." },
          { type: "list", title: "What I have found so far", note: "(from the first 54 patients)", items: [
            "59.3% had high blood pressure.",
            "40.7% had diabetes.",
            "42.6% routinely added extra salt to their food."
          ] },
          { type: "h", text: "Working as a team" },
          { type: "p", text: "I started this study alone. The wards are crowded and every interview takes time, so I invited my junior, Shayra, to join me. Now I teach her what I have learned, from how to approach a patient to how to record each answer, and together we reach far more patients than I could on my own. I am grateful she said yes. Leading this study has taught me that good research is rarely a one-person job, and that the best way to keep learning is to bring someone along with you." },
          { type: "p", text: "This research has been accepted for presentation at the 2nd International Conference on Social Sciences: Challenges, Innovation and Development (ICSS 2027) in Sylhet. Alongside it, I am working with Dr. Bhuiyan to create simple health-awareness materials for these same patients." }
        ]
      },
      {
        kicker: "Ongoing exploration",
        title: "Allergies, the Brain, and Mood",
        meta: "Informal study · ongoing",
        blocks: [
          { type: "p", text: "Histamine drives allergic reactions, but it is also a messenger in the brain. I started by asking people around me how they feel during an allergy flare. Over half described trouble concentrating or “brain fog,” and many linked flares to irritability or low motivation. This is an informal study, and I am still learning how to turn it into a proper one." }
        ]
      }
    ]
  },

  /* ============== 2. NEUROSYNAPSE ============== */
  neurosynapse: {
    meta: "Youth mental health and neuroscience · April 2025 – present · [Instagram](https://www.instagram.com/_neurosynapse_) · [Borderless](https://launchpad.borderless.so/neurosynapse4g55dx?ref=7542hwqeb5zbm8iy4av0lsai)",
    blocks: [
      { type: "p", text: "NeuroSynapse started with my own stress. During my gap year I was anxious about my future and could not stop wondering whether other young people felt the same way. So I wrote a survey and asked them. 212 young people answered, and they described academic pressure, an uncertain future, and trouble sleeping and concentrating. Most said they wanted counselling in their schools and colleges, and almost none had it." },
      { type: "p", text: "That survey changed my direction. It was the first time I saw that a question, asked carefully, could turn private worries into evidence. It also led me to the NICVD wards: when I described NeuroSynapse to a cardiologist, he invited me into his hospital to do research. What began as curiosity about stress pulled me toward neuroscience and public health, and toward the idea that the brain and the body cannot be studied apart." },
      { type: "gallery",
        items: [
          { image: "assets/photos/neurosynapse-prize-girl.jpg", caption: "A pencil can feel like a trophy.", alt: "Tonni handing a prize to a schoolgirl in front of a blackboard" },
          { image: "assets/photos/neurosynapse-prize-boy.jpg", caption: "Every child who tried got noticed.", alt: "Tonni giving a pen to a schoolboy in front of a blackboard" }
        ],
        side: [
          { type: "list", title: "NeuroSynapse grew from there", items: [
            "Essay and quiz competitions on the brain and mental health for 80 students, including madrasah students.",
            "Drawing, poetry, and song activities for school children, where every child who took part was recognized.",
            "The July Revolution study in Research Project 1 is part of NeuroSynapse."
          ] },
          { type: "callout", icon: "🏆", tone: "purple", text: "NeuroSynapse ranked **#1 on the [Borderless Student Launchpad](https://launchpad.borderless.so/neurosynapse4g55dx?ref=7542hwqeb5zbm8iy4av0lsai)**." }
        ]
      }
    ]
  },

  /* ============== 3. BIOBOOST NEURONUTRI ============== */
  bioboost: {
    meta: "Food resilience for flood-affected women · May 2025 – present · [Project site](https://sites.google.com/view/seedsforhope-fatematujjohura/home)",
    blocks: [
      { type: "gallery",
        items: [
          { image: "assets/photos/seeds-for-hope.jpg", caption: "They chose to stand in this photograph, and they chose to plant.", alt: "Women and children holding vegetable seed packets, with Tonni standing among them" }
        ],
        side: [
          { type: "p", text: "When I went with relief to flood-affected villages after the 2024 floods, I kept meeting women who had lost their crops and their income. A relief packet lasts a few days. I wanted to give them something that would keep growing and let them work and earn on their own terms." },
          { type: "p", text: "So I used the money from my teaching internship to buy vegetable seeds and saplings for 20 flood-affected women, and saplings for students at village high schools. I drew on what I had learned in MIT’s En-ROADS climate-simulation training, and followed their harvests over WhatsApp. Tomatoes, pumpkins, and grain went to their families’ tables." }
        ]
      }
    ]
  },

  /* ============== 4. COMMUNITY SERVICE & LEADERSHIP ============== */
  service: {
    lead: "Where I come from, help rarely arrives in one big piece. It arrives in a truck, a jacket, a pencil, a seed.",
    volunteering: [
      { title: "Youth Volunteer, Bangladesh Red Crescent Society", dates: "2023 – present",
        text: "Raised $500 for flood relief, organized blood drives, helped lead a dengue-awareness campaign, and gave first aid and CPR at the National Kabaddi Championship. Completed Red Cross Red Crescent Basic and First Aid Training (2023) and IFRC’s WASH in Emergencies course." },
      { title: "Rover Mate, Bangladesh Scouts", dates: "Major Abdul Gani Open Scout Group · 2023 – present",
        text: "Directed traffic for up to six hours a day when police left the streets after the July 2024 uprising, which earned me the Scout Volunteer Award. I also tutor children for free and serve Ramadan meals. Completed Fire Service and Civil Defense Volunteer Training (2025)." },
      { title: "Flood relief and community school", dates: "2024 – present",
        text: "Led a fundraiser that brought drinking water and dry food to more than 200 flood-affected families, and teach at a free community school for children who would otherwise be working." }
    ],
    photos: [
      { image: "assets/photos/redcrescent-first-aid.jpg", pos: "62% 40%", caption: "Giving first aid to a player at the National Kabaddi Championship, 2025.", alt: "Tonni in a Red Crescent vest and gloves treating a player's head injury" },
      { image: "assets/photos/redcrescent-kabaddi.jpg", caption: "Carrying an injured player off the mat on a stretcher.", alt: "Red Crescent volunteers carrying an injured player on a stretcher across a kabaddi hall" },
      { image: "assets/photos/redcrescent-kabaddi-team.jpg", caption: "Our Red Crescent first-aid team, ready beside the kabaddi court.", alt: "Five Red Crescent volunteers seated behind a stretcher and a first-aid bag" },
      { image: "assets/photos/redcrescent-cumilla-unit.jpg", caption: "With fellow volunteers at the Bangladesh Red Crescent Society, Cumilla Unit.", alt: "A large group of Red Crescent volunteers in red vests outside the Cumilla unit office" },
      { image: "assets/photos/scouts-traffic.jpg", caption: "Directing traffic on a rainy day in Cumilla as a Bangladesh Scouts volunteer.", alt: "Tonni in scout uniform directing auto-rickshaws on a busy street" },
      { image: "assets/photos/fire-service-training-group.jpg", caption: "Fire Service and Civil Defense Volunteer Training, December 2025.", alt: "Scouts and fire service officers posing behind a training banner" },
      { image: "assets/photos/winter-drive-baby.jpg", caption: "Clothes we no longer wore were still warm for someone who had none.", alt: "Tonni holding a baby beside the baby’s mother during the winter clothes drive" },
      { image: "assets/photos/winter-drive-railway.jpg", caption: "A warm morning on a railway platform.", alt: "Tonni hugging a smiling child in warm new clothes on a railway platform" },
      { image: "assets/photos/flood-relief-truck.jpg", caption: "One truck, many doorsteps: flood relief.", alt: "A truck loaded with bottled water, bananas, and sacks of food for flood relief" }
    ],
    youthgen: {
      title: "Organizer, YouthGEN 2025",
      meta: "[TECHious](https://techious.org/) · 2025 · [YouthGEN 2025](https://techious.org/youthgen-2025/)",
      text: "[YouthGEN](https://techious.org/youthgen-2025/) is the flagship youth event of [TECHious](https://techious.org/), a non-profit youth development community in Cumilla founded in 2022. Under the theme “From Ideas to Impact,” it connects students with technology, practical skills, and leadership. I was on the organizer panel for YouthGEN 2025, held at Shilpakala Academy in Cumilla for more than 1,000 students, and helped run its hands-on Experience Zone with AI, virtual reality, robotics, and business leadership. Years of being class captain had taught me how to keep a crowd organized and a team calm, and both came in handy. TECHious recognized my work with an organizer’s Token of Love.",
      image: "assets/photos/youthgen-organizer-2025.jpg",
      caption: "Organizer’s Token of Love, YouthGEN 2025, from Team TECHious.",
      alt: "Tonni holding a framed YouthGEN 2025 organizer certificate"
    },
    leadership: [
      { title: "President (2023–24) and Vice President (2021–22), Science Club", dates: "Rampur High School and Cumilla Collectorate School and College",
        text: "Mentored 22 younger members, designed National Biology Olympiad study tracks, and guided school teams to three national awards, including National Runner-Up at the National Science and Technology Fair." },
      { title: "Elected Student Government President and Class Captain", dates: "2020 – 2024",
        text: "Represented the welfare concerns of 53 classmates, coached 14 debaters, and planned six school-wide events for more than 1,000 students." },
      { title: "Academic Intern, Crossroads Initiative", dates: "2025 – present",
        text: "I teach students as part of Crossroads Initiative’s academic team." },
      { title: "Biology Instructor and Curriculum Intern, Alpha Academic Care", dates: "2024 – present",
        text: "Teach human physiology and genetics to 35 students in grades 9 and 10, using hand-drawn diagrams to make hard ideas stick." },
      { title: "Selected, UNITAR Women’s Leadership in Disaster Risk Reduction Training", dates: "Funded by the Government of Japan",
        text: "Trained in disaster preparedness and women-led community response." }
    ]
  },

  /* ============== TEAMWORK & ENGAGEMENT ============== */
  teamwork: {
    lead: "Most of what I am proud of, I did with other people.",
    blocks: [
      { type: "gallery",
        items: [
          { image: "assets/photos/teamwork-science-fair-45.jpg", caption: "With my teammates, building our project for the 45th National Science and Technology Fair.", alt: "Seven students in light blue uniforms gathered around a model city with roads, buildings, and solar panels" }
        ],
        side: [
          { type: "p", text: "Our school and college teams reached the national round of the National Science and Technology Fair three times, at the 42nd, 43rd, and 45th fairs, and came home as National Runner-Up each time. A science fair project is never one person’s work: someone wires the lights, someone glues the roads, and someone has to explain all of it to the judges. At the 45th fair, that last job was mine, and I was named Best Presenter." },
          { type: "p", text: "Working in teams like this taught me to listen first and to give everyone a part they can own." }
        ]
      }
    ]
  },

  /* ============== 5. MIC IS MINE ============== */
  mic: {
    lead: "Recitation, debate, speeches, and the occasional folk song. The microphone was my first classroom.",
    highlights: [
      { icon: "🎙️", title: "Recitation", text: "First, second, and third place at the National Child Award Competition 2022, and district first places at the Youth Festival 2025 and July Mass Uprising Day 2026.", filter: "recitation" },
      { icon: "🗣️", title: "Speech and debate", text: "First place in speech at the Youth Festival 2025 and in extempore speech on National Library Day 2026. Best Speaker and Winner, Inter-School Anti-Corruption Debate 2024.", filter: "speech" },
      { icon: "✍️", title: "Essays", text: "Ten prizes in district essay competitions between 2023 and 2026, five of them first place.", filter: "essay" },
      { icon: "🎶", title: "Music and anchoring", text: "First place in folk song at the Bangladesh Scouts Talent Hunt 2026, and anchor for school and cultural programs.", filter: null }
    ],
    photos: [
      { image: "assets/photos/mic-podium.jpg", caption: "Speaking at the podium.", alt: "Tonni speaking into a microphone at a podium beside a man in a suit" }
    ]
  },

  /* ============== 6. WRITING ============== */
  writing: {
    lead: "Essays in Bangla, stories and reflections in English.",
    items: [
      { title: "Runner-Up, English Fiesta 1.0 Writing Competition", text: "2024" },
      { title: "Ten district essay prizes", text: "On national days and literary anniversaries, 2023–2026" }
    ],
    comingSoon: "Selected pieces will be added here."
  },

  /* ============== 7. ART & PHOTOGRAPHY ============== */
  art: {
    lead: "Let me show you how my heart beats in colors.",
    items: [],
    comingSoon: "",
    note: "My paintings, crafts, and photographs live in their own portfolio. Click below to see them.",
    link: { url: "https://sites.google.com/view/artphotographyportfolio-tonni/home", label: "See my art and photography →" }
  },

  /* ============== 8. CERTIFICATES & AWARDS ============== */
  honors: [
    { title: "Oral Presenter, 2nd International Student Research Conference (ISRC) 2026", meta: "University of Dhaka · 2,363 papers, about 20% accepted" },
    { title: "Presenter, 2nd International Conference on Bangladesh Studies (ICBS-II) 2026", meta: "Istanbul University, Türkiye" },
    { title: "Research Presentation Accepted, 2nd International Conference on Social Sciences: Challenges, Innovation and Development (ICSS 2027)", meta: "Sylhet" },
    { title: "National Runner-Up (with school team), 42nd, 43rd, and 45th National Science and Technology Fair", meta: "Best Presenter (individual), 45th Fair" },
    { title: "National Winner, 1st Position, MFH National General Knowledge and Mathematics Olympiad", meta: "MFH Science Club · October 2023 · Senior category" },
    { title: "#1, Borderless Student Launchpad", meta: "For NeuroSynapse" },
    { title: "National Best Student", meta: "First in Bangladesh in Economics, Literature, and Public Speaking" },
    { title: "National Winner, Ministry of Cultural Affairs Competitions", meta: "Multiple years" },
    { title: "Best Speaker and Winner, Inter-School Anti-Corruption Debate", meta: "2024 · also Inter-College Debate Competition, 2026" },
    { title: "First Place, Speech, Youth Festival (Tarunyer Utsab)", meta: "2025" },
    { title: "First Place, Bangladesh Scouts Talent Hunts", meta: "2024 (Creative Talent Hunt) and 2026 (Folk Song)" },
    { title: "Scout Volunteer Award", meta: "For traffic management and flood-rescue leadership" },
    { title: "Organizer’s Token of Love, YouthGEN 2025", meta: "TECHious" }
  ],

  certFilters: [
    { id: "child",      label: "National Child Award" },
    { id: "recitation", label: "Recitation" },
    { id: "speech",     label: "Speech" },
    { id: "essay",      label: "Essay" },
    { id: "writing",    label: "Writing and reading" },
    { id: "academic",   label: "Academic" },
    { id: "training",   label: "Training" }
  ],

  certificates: [
    { cat: "child", image: "assets/certs/child-award-recitation-1st.jpg", title: "First Place, Recitation", issuer: "National Child Award Competition", year: "2022", text: "Awarded for first place in poetry recitation at the National Child Award Competition." },
    { cat: "child", image: "assets/certs/child-award-recitation-2nd.jpg", title: "Second Place, Recitation (Set Piece)", issuer: "National Child Award Competition", year: "2022", text: "Awarded for second place in the set-piece category, where every competitor performs the same poem." },
    { cat: "child", image: "assets/certs/child-award-recitation-3rd.jpg", title: "Third Place, Recitation", issuer: "Bangladesh Shishu Academy", year: "2022", text: "Awarded by Bangladesh Shishu Academy for third place in recitation." },

    { cat: "recitation", image: "assets/certs/recitation-july-uprising-2026.jpg", title: "First Place, Recitation", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded under the Ministry of Cultural Affairs for first place in the recitation competition marking July Mass Uprising Day." },
    { cat: "recitation", image: "assets/certs/recitation-youth-festival-2025.jpg", title: "First Place, Recitation", issuer: "Youth Festival (Tarunyer Utsab)", year: "2025", text: "Awarded for first place in recitation at the Youth Festival, a cultural competition for young people across the district." },
    { cat: "recitation", image: "assets/certs/recitation-independence-2026.jpg", title: "Third Place, Recitation", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for third place in the recitation competition held for Independence and National Day." },
    { cat: "recitation", image: "assets/certs/recitation-7th-march-2024.jpg", title: "Third Place, Recitation", issuer: "Cumilla District Public Library", year: "2024", text: "Awarded for third place in the recitation competition commemorating the historic 7th of March." },

    { cat: "speech", image: "assets/certs/speech-extempore-library-day-2026.jpg", title: "First Place, Extempore Speech", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded on National Library Day for first place in extempore speech, where the topic is given on the spot." },
    { cat: "speech", image: "assets/certs/speech-youth-festival-2025.jpg", title: "First Place, Speech", issuer: "Youth Festival (Tarunyer Utsab)", year: "2025", text: "Awarded for first place in the speech competition at the Youth Festival." },

    { cat: "essay", image: "assets/certs/essay-victory-day-2025.jpg", title: "First Place, Essay", issuer: "Cumilla District Public Library", year: "2025", text: "Awarded for first place in the essay competition held for Great Victory Day." },
    { cat: "essay", image: "assets/certs/essay-shaheed-day-2026.jpg", title: "First Place, Essay", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for first place in the essay competition for Shaheed Day and International Mother Language Day." },
    { cat: "essay", image: "assets/certs/essay-nazrul-127.jpg", title: "First Place, Essay", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for first place in the essay competition marking the 127th birth anniversary of national poet Kazi Nazrul Islam." },
    { cat: "essay", image: "assets/certs/essay-nazrul-2025.jpg", title: "First Place, Essay", issuer: "Cumilla District Public Library", year: "2025", text: "Awarded for first place in the essay competition for Kazi Nazrul Islam’s birth anniversary." },
    { cat: "essay", image: "assets/certs/essay-nazrul-125.jpg", title: "First Place, Essay", issuer: "Cumilla District Administration", year: "2024", text: "Awarded by the District Administration for first place in the essay competition celebrating Kazi Nazrul Islam’s 125th birth anniversary." },
    { cat: "essay", image: "assets/certs/essay-independence-2026.jpg", title: "Second Place, Essay", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for second place in the essay competition held for Independence and National Day." },
    { cat: "essay", image: "assets/certs/essay-bangla-new-year.jpg", title: "Second Place, Essay", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for second place in the essay competition celebrating Bangla New Year 1433." },
    { cat: "essay", image: "assets/certs/essay-library-day-2026.jpg", title: "Third Place, Essay", issuer: "Cumilla District Public Library", year: "2026", text: "Awarded for third place in the essay competition on National Library Day." },
    { cat: "essay", image: "assets/certs/essay-sachin-mela-2023.jpg", title: "Third Place, Essay", issuer: "Cumilla District Administration", year: "2023", text: "Awarded at Sachin Mela, the District Administration’s festival in memory of composer Sachin Dev Burman." },

    { cat: "writing", image: "assets/certs/english-fiesta.jpg", title: "Runner-Up, English Writing", issuer: "English Fiesta 1.0 · Innovative English Forum", year: "2024", text: "Awarded as runner-up in the English writing competition at English Fiesta 1.0." },
    { cat: "writing", image: "assets/certs/book-reading-nazrul-2025.jpg", title: "Third Place, Book Reading", issuer: "Cumilla District Public Library", year: "2025", text: "Awarded for third place in the book-reading competition for Kazi Nazrul Islam’s birth anniversary, which tests how closely competitors have read an assigned book." },

    { cat: "academic", image: "assets/certs/mfh-olympiad-2023.jpg", title: "National Winner, 1st Position", issuer: "MFH Science Club", year: "2023", text: "Awarded first position in the MFH National General Knowledge and Mathematics Olympiad (Senior category), held 6–8 October 2023." },
    { cat: "academic", image: "assets/certs/best-student-performance-2022.jpg", title: "Best Student Performance Award", issuer: "BSB–Cambrian Education Group", year: "2022", text: "Awarded for earning a perfect GPA 5.00 in the Secondary School Certificate (SSC) examination." },
    { cat: "academic", image: "assets/certs/gpa5-felicitation-2022.jpg", title: "GPA-5 Achiever Felicitation", issuer: "Prothom Alo and Shikho", year: "2022", text: "Recognition for students who earned GPA 5.00 in the SSC examination." },

    { cat: "training", image: "assets/certs/training-fire-service-photo.jpg", title: "Fire Service and Civil Defense Volunteer Training", issuer: "Bangladesh Scouts, Cumilla District Rover", year: "2025", text: "Completed the volunteer training program with Fire Service and Civil Defence, Cumilla, held 17–18 December 2025." },
    { cat: "training", image: "assets/certs/training-red-crescent-first-aid.jpg", title: "Basic and First Aid Training", issuer: "Red Cross Red Crescent", year: "2023", text: "Completed basic first aid training as a Red Crescent youth volunteer." }
  ],

  /* ============== 9. MOMENTS & FEATURED ============== */
  featured: [
    { title: "NeuroSynapse ranked #1 on the Borderless Student Launchpad", meta: "Borderless", url: "https://launchpad.borderless.so/neurosynapse4g55dx?ref=7542hwqeb5zbm8iy4av0lsai" },
    { title: "Featured in the newspaper while collecting data for my July Revolution research", meta: "News · Facebook", url: "https://www.facebook.com/share/p/1FYaFdjQqu/" },
    { title: "YouthGEN 2025", meta: "TECHious", url: "https://techious.org/youthgen-2025/" },
    { title: "Science project presentation, National Science and Technology Fair", meta: "Video · Facebook", url: "https://www.facebook.com/share/v/1BJ9uj1Hp4/" },
    { title: "Featured post", meta: "Facebook", url: "https://www.facebook.com/share/p/19NtqTTXGT/" }
  ],
  moments: [],
  momentsComingSoon: "More moments will be added here.",

  /* ============== ON STAGE (prize moments) ============== */
  onstage: {
    lead: "A few of the moments when the hard work came back as a prize.",
    photos: [
      { image: "assets/photos/prize-library-dc.jpg", pos: "92% 50%", caption: "A prize-giving at the Cumilla District Public Library, with the Deputy Commissioner of Cumilla as chief guest.", alt: "Tonni receiving a prize from officials at a table" },
      { image: "assets/photos/prize-library-certificate.jpg", caption: "Receiving a certificate at the Cumilla District Public Library.", alt: "Tonni holding a certificate beside an elderly man" },
      { image: "assets/photos/prize-victory-poetry.jpg", caption: "Receiving a book at a Victory Day poetry recital, Birchandra Library, Cumilla.", alt: "Tonni holding a book beside a girl and an elderly man in front of a Victory Day banner" },
      { image: "assets/photos/prize-science-week.jpg", pos: "8% 50%", caption: "Receiving a trophy and certificate during National Science and Technology Week.", alt: "Tonni receiving a trophy and certificate from three officials" },
      { image: "assets/photos/prize-science-fair.jpg", caption: "Receiving a prize at the National Science and Technology Fair.", alt: "Tonni in a light blue uniform receiving a prize from officials on stage" },
      { image: "assets/photos/prize-redcrescent-barsha.jpg", pos: "68% 50%", caption: "Receiving a prize at Youth Red Crescent’s Barsha Utsab, the monsoon festival.", alt: "Tonni receiving a prize in front of a Barsha Utsab banner, with volunteers clapping" },
      { image: "assets/photos/prize-scouts.jpg", caption: "Receiving a prize at a Bangladesh Scouts program.", alt: "Tonni in scout uniform receiving a framed gift from four men" },
      { image: "assets/photos/prize-scout-uniform.jpg", caption: "Receiving a prize in my scout uniform.", alt: "Tonni in scout uniform receiving a gift from an official" },
      { image: "assets/photos/prize-burichong.jpg", caption: "Receiving a crest at a reunion and felicitation ceremony in Burichong.", alt: "Tonni receiving a crest from a man at a decorated table" },
      { image: "assets/photos/prize-stage-trophy.jpg", caption: "Receiving a trophy on stage.", alt: "Tonni receiving a trophy from men behind a flower-decorated table" },
      { image: "assets/photos/prize-office-gift.jpg", caption: "Another small prize, another reason to keep going.", alt: "Tonni in a face mask receiving a wrapped gift from a man" }
    ]
  },

  /* ============== MORE (opens from the ≡ menu) ============== */
  education: [
    { school: "Cumilla Collectorate School and College", detail: "HSC (Science), 2024 · GPA 4.83/5.00" },
    { school: "Rampur High School, a village school in Cumilla", detail: "SSC (Science), 2022 · GPA 5.00/5.00" }
  ],
  skills: [
    { title: "Research", text: "Survey design, bedside data collection, descriptive statistics and biostatistics, abstract writing, conference presentation" },
    { title: "Teaching and communication", text: "Lesson design, diagram-based teaching, public speaking, debate, bilingual writing" },
    { title: "Service", text: "First aid and CPR, disaster-risk reduction, community fundraising and relief work" },
    { title: "Creative", text: "Drawing, painting, photography, creative writing" },
    { title: "Languages", text: "Bangla (native), English (fluent), German (beginner)" }
  ]
};
