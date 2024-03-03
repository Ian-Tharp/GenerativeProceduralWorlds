# GenerativeProceduralWorlds
Web app proof of concept for generative artificial intelligence to steer the direction and parameters of procedural generation within video games. This should, in theory, aid in creating a constantly dynamic and ever evolving world.
With the help of generative AI, the world can change based off of player preferences and interactions with NPCs in the world.

In the long term, this system could be expanded out to procedurally generate an infinite amount of immersive experiences for players. With the advancements in text to 3D workflows, AI agents, crews and swarms, this would just need
to be connected to some sort of middle-layer to input 3D objects or executable code into the game during runtime. If we can somehow create a new proposed system architecture to allow for generative AI content to be stored into some
sort of RAG (Retrieval Augmented Generation) VM or other proposed solution, we can utilize the synthetic data from our AI swarms to modify and update the parameters of the world during runtime.

My initial proposal and idea that needs to be expanded upon is what I call the Cognitive Core of Systems. This is inspired by the learning strategy used in neural networks, essentially decomposing various tasks into sub-tasks handled
by their individual 'expert', following a hierarchical MoE. For example, our 'World Generator' holds the centralized information for the creation of future procedural assets (characters, dialogue, 3D assets, animation, SFX, VFX, etc.)
that would get fed into a "second server" if you will, that interacts with our game to create these assets during runtime.

Front-End ----- CDN ----- Backend ----- Cloud Services ----- SQL Databases
                             |                |                   |
                      Cognitive Core ----- VM Scaling ----- Cloud Storage
                             |                                     |
                    Mixture of Experts ----- Synthetic Data ----- RAG
                             |
                Generative Content Director
                             |
                     Game Studio Manager
                             |
                Individual Agents for Roles
                             |
              Autonomous Tasks for Game Dev ----- Backend APIs


This idea is simply theoretical at the moment, but this proposed solution is the basis of this proof of concept project. If successful, the expansion of plugins for Python to be utilized inside of Unreal Engine would be the ultimate
goal to ensure that this sort of system would work. The expansion of exectuable Python scripts during runtime within Unreal Engine would be a huge game changer. If there are certain APIs or just functionality built into the engine
itself, the Python scripts would be able to execute the creation of assets during runtime, allowing for this system to work. Although, again at the time of this creation, I am not qualified or knowledgeable enough to understand if
this system is even a viable project or idea to pursue. Time will tell.

(ChatGPT suggested improvement on the architecture diagram)
 Front-End
      |
 CDN/Backend ------- API Gateway ------- Cloud Services (e.g., Azure, Storage, Compute)
      |                                           |
 Game Engine <----> Cognitive Core <----> Mixture of Experts (MoE)
      |                 Middleware                |----> Synthetic Data Generation
      |                (Autonomous Tasks,         |----> Retrieval-Augmented Generation (RAG)
      |                 Expert Systems,           |
      |                 Content Director)         |
      |                                           |
      |<------------ Feedback & Analytics <-------|

