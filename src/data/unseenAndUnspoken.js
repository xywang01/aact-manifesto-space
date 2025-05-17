const AllowedFormats = {
    Image: "image",
    Video: "video",
    Text: "text",
}

export const unseenAndUnspoken = {
    artist1: {
        idx: 1,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Emily Au",
        ins_handle: ["@tofuuday"],
        quote: 'My practice is a way for me to understand myself and my experiences. As someone who grew up learning to ' +
            'avoid misfortunes, I\'ve created a space where I can confront the adversities in my life and face them ' +
            'head-on within my art.',
        bio: 'Emily Au is a Canadian emerging artist who received a Bachelor of Fine Arts with a Minor in Women and ' +
            'Gender Studies (with First-Class Standing) from Brock University. Her work often wrestles with a myriad of ' +
            'topics that affect her daily life such as mixed-race cultural identity, the racial binary, abjection and ' +
            'the aesthetic value of meat. In her final year at Brock, Au was accepted into an Honours studio course ' +
            'where she created her esteemed Of Earth and Flesh project. Au’s thesis allowed her to kick start her ' +
            'career as it was met with both domestic and global success and recognition. The attention Au’s projects ' +
            '(Halved, Of Earth and Flesh) have gathered enables her to make virtual connections around the world, ' +
            'fostering many relationships with like-minded creatives. In Canada, Au’s work has been shown throughout ' +
            'spaces in Niagara and the Greater Toronto Area. Additionally, Au has exhibited her work innotable ' +
            'international contemporary galleries such as CICA Museum (Seoul, South Korea), Hashimoto Contemporary ' +
            '(Los Angeles, California) and 13A New Street (Hong Kong).' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/tofuuday\">@tofuuday</a>",
        topic_name: "Unseen and Unspoken",
        quote_bg_url: require('@/assets/UnseenAndUnspoken/EmilyAu/IAmFull.jpg'),
        collection_title: "Of Earth and Flesh",
        description: "" +
            "<em>Maple Wood Smoked Bacon Vessel</em>\n" +
            "This piece is a part of my <i>Of Earth and Flesh</i> project which plays with the idea of the " +
            "abject, which is concerned with the disruption of the distinct categories between self and other, of life " +
            "and death. As Kristeva notes the abject is a threat to the perception of a clean and moral reality, viewers " +
            "react accordingly to the abject subjects through discomfort. My vessels exist in a space between life and " +
            "death since unlike real meat, their ceramic nature is permanently imperishable, never given the capability " +
            "to rot. Through removing meat’s capacity to decompose, my work defies death and asserts itself as unnatural, " +
            "as abject. Yet, the vessels are not truly part of the living either as they directly mimic something dead: " +
            "the animal corpse. The flesh my vessels emulate have never known life and yet, they perform as a direct " +
            "simulation of the butchered animal body. Thus, the vessels Of Earth and Flesh reside in between human " +
            "concepts of life and death, while simultaneously defying both. They challenge the preconceived notion of " +
            "the binary of alive and dead, separating themselves from convention, cleanliness and comprehensibility." +
            "\n\n" +
            "Using my vegetarian gaze, the <i>Maple Wood Smoked Bacon Vessel</i> came about as I wondered how the cold " +
            "flesh at the grocery store would sustain as a vase. Through creating this piece, I became a butcher in my " +
            "own right, a role I actively oppose in my daily life. Yet, I took pleasure in cutting, tearing, and " +
            "manipulating the clay as I slowly embraced my new position. However, during construction, there was a " +
            "contest between the clay and I, as I fought for the strips to defy gravity when all they wanted was to " +
            "resist my wishes and lazily flounder back onto the table. Although I may have asserted myself as victor, " +
            "the clay’s efforts are never forgotten as its rebellion is highlighted through its perpetual collapsing " +
            "posture. Hues of red, pink, amber and brown are appropriated to render the bloodiness of the muscle and " +
            "fat tissues from bodies not unlike man’s. Additionally, the marbling of fat is associated with value and " +
            "quality as we unknowingly relate the material of meat to ceramics and fine art. The aesthetic value of " +
            "meat may be common discourse in the carnivorous world, but is nonetheless vulgar as the beauty of a " +
            "mutilated carcass is inconceivable and absurd to me. Yet, the shiny, glass-like glaze beautifies the " +
            "vessels, solidifying them as objects capable of both offense and elegance." +
            "\n\n" +
            "<em>I Am Full</em>\n" +
            "I aim to explore the debilitating and overlooked mental health issue of disordered eating within Chinese " +
            "women. An expectation and standard of a thin and fragile body within both Chinese and the Chinese diaspora " +
            "has resulted in persistent anxieties around eating. Upon one scroll through Xiaohongshu and Douyin, it’s " +
            "easy to see how significant thinness is as a marker of beauty and accomplishment. The pressure of remaining " +
            "slender has shifted the connotations surrounding mealtime from being an opportunity for social connection " +
            "and pleasure to an entity to avoid. The act of lifting one’s rice bowl up to their mouth has become an " +
            "unsafe place, with fear of internal and external judgment. The stress one feels after finishing their food " +
            "can be so relentless it may be easier to fabricate a false sense of fullness rather than to feel the weight " +
            "of shame and panic.\n" +
            "\n" +
            "My project will display a visualization of the methods that Chinese women go through to restrain themselves " +
            "from eating. I aim to create a series of dinnerware, inspired by the popular Mun Shou pattern, often seen " +
            "in both restaurants and homes. Bowls, plates, serving dishes, and spoons with the phrase ‘萬壽無疆’ " +
            "(boundless longevity) will be changed to read 我吃饱了 (I’m full) to convey the message of restrictive " +
            "eating patterns as a result from mental health challenges surrounding food consumption. This series of " +
            "dinnerware with anxiety-induced affirmations will serve as a bleak reminder of Chinese women’s efforts to " +
            "persuade themselves to stop eating." +
            "\n\n" +
            "<em>Primary Colour Vases</em>\n" +
            "The <i>Primary Colour Vases</i>, was a way for me to explore and express visually my identity as a mixed-race " +
            "person. I often like to take traditional Chinese aesthetics and play with the idea of an \"interruption\". " +
            "As the brightness of the colour acts as a cue that the work is not done in a traditional nor \"authentic\" " +
            "way. Of course, this relation is often one of confusion, anxiety, identity-crisis' and psychological " +
            "distress. There's definitely a foundation of anxiety that comes with all these works, as well as a level " +
            "of insecurity and self-surveillance that has been a part of my journey.\n",
        directory: '/assets/UnseenAndUnspoken/EmilyAu',
        artworks: {
            art1: {
                name: "Maple Wood Smoked Bacon Vessel",
                year: '2023',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/EmilyAu/MapleWoodSmoked.jpg"),
            },
            art2: {
                name: "我吃饱了 (I’m Full)",
                year: '2023',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/EmilyAu/IAmFull.jpg"),
            },
            art3: {
                name: "Primary Qinghua",
                year: '2023',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/EmilyAu/PrimaryQinghua.jpg"),
            },


        },
        slides: [  // todo: check display aspect ratio
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/EmilyAu/MapleWoodSmoked.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/EmilyAu/IAmFull.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/EmilyAu/PrimaryQinghua.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist2: {
        idx: 2,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Zeng Lai",
        ins_handle: ["@zeng_lai"],
        quote: '"I hope that by repeatedly recreating these scenes through painting, I could eventually be at peace with the harsh reality and start look for confidence and self-love from inside."',
        bio: 'Zeng Lai is a product designer, content creator, and entrepreneur with an architecture and finance background. As a first-generation queer Chinese Canadian, he has a keen awareness of the challenges that arise from navigating ideological and cultural divides. This has fueled his fascination with exploring the concepts of dualities and in-betweenness.' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/zeng_lai\">@zeng_lai</a>",
        topic_name: "Unseen and Unspoken",
        quote_bg_url: require('@/assets/UnseenAndUnspoken/Zeng/untitled.jpg'),
        collection_title: "Body and the Soul",
        description: "Being a queer Asian living in Toronto, I find the desexualization of the Asian community " +
            "humiliating, suffocating, and demoralizing. It reached a point where internalized colonialism dictated " +
            "every decision I made, every thrill and pain I embraced. I wanted to break free from this vicious cycle, " +
            "and that's when I turned to painting. I consider painting a form of self-therapy. Just as a word loses " +
            "meaning when stared at too long, I began to commemorate traumatic life scenes embedded deep in my memory on paper.",
        directory: '/assets/UnseenAndUnspoken/Zeng',
        artworks: {
            art1: {
                name: "Untitled",
                year: '',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Zeng/untitled.jpg"),
            },
            art2: {
                name: "Untitled",
                year: '',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 1.jpg"),
            },
            art3: {
                name: "Untitled",
                year: '',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 2.jpg"),
            },
            art4: {
                name: "Untitled",
                year: '',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 3.jpg"),
            },
        },
        slides: [
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Zeng/untitled.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 1.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 2.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Zeng/untitled Closeup 3.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },

        ],
    },
    artist3: {
        idx: 3,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Vivek Shraya",
        ins_handle: ["@vivekshraya"],
        quote: '',
        bio: 'Vivek Shraya’s visual art practice spans several short films and photo essays including the ' +
            'internationally acclaimed <i>Trisha</i>, featured in <i>Village Voice</i> and <i>India Today</i>, and in ' +
            'solo exhibits in New York City and the Southern Alberta Art Gallery, as well as <i>Trauma Clown</i>, featured on the cover of ' +
            '<i>NOW Magazine</i> and <i>Legends of the Trans</i>, featured at Esker Foundation. A three-time Canadian Screen Award winner, ' +
            'Vivek is the creator and writer of the new CBC Gem Original Series <i>How to Fail as a Popstar</i>, which had its ' +
            'international premiere at Cannes. She has collaborated with musical icons Jann Arden, Peaches, and Jully ' +
            'Black, and was nominated for the Polaris Music Prize. Her best-selling book <i>I’m Afraid of Men</i> was heralded ' +
            'by Vanity Fair as “cultural rocket fuel." Vivek has been a brand ambassador for MAC Cosmetics and Pantene, ' +
            'and she is a director on the board of the Tegan and Sara Foundation.\n' +
            '\n' +
            '<b>Credits</b>\n' +
            'Creative direction: Vivek Shraya\n' +
            'Photography and consultation: Zachary Ayotte\n' +
            'Intimacy Coordinator: Shawna Pilva\n' +
            'Makeup & hair: Alanna Chelmick\n' +
            'Set assistant: Adam Holman\n' +
            'Models: Max Falzon, Bergen Hamilton, Maggie Hart, Tim Howie, Ielena Lesar, Scout Sackley\n' +
            'Special thanks: Shemeena Shraya, Trisha Yeo, Burcu Emeç, and Alyx Stariha' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/vivekshraya\">@vivekshraya</a>" +
            "\n" +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.vivekshraya.com/\">www.vivekshraya.com</a>",
        topic_name: "Unseen and Unspoken",
        quote_bg_url: require('@/assets/UnseenAndUnspoken/Vivek/Niche.jpg'),
        collection_title: "Niche",
        description: "A niche is defined as a cavity, hollow, or recess in a wall. When a work of art is classified as " +
            "“niche,” the “wall” or the environment in which the art was produced, recedes from view. This photo series " +
            "brings the wall back into the foreground.",
        directory: '/assets/UnseenAndUnspoken/Vivek',
        artworks: {
            art1: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche.jpg"),
            },
            art2: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 1a.jpg"),
            },
            art3: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 1b.jpg"),
            },
            art4: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 2a.jpg"),
            },
            art5: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 2b.jpg"),
            },
            art6: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 3a.jpg"),
            },
            art7: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 3b.jpg"),
            },
            art8: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 4a.jpg"),
            },
            art9: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 4b.jpg"),
            },
            art10: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 5a.jpg"),
            },
            art11: {
                name: "Niche",
                year: '2025',
                medium: "",
                file_name: require("@/assets/UnseenAndUnspoken/Vivek/Niche 5b.jpg"),
            },

        },
        slides: [
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 1a.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 1b.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 2a.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 2b.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 3a.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 3b.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 4a.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 4b.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 5a.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Vivek/Niche 5b.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist4: {
        idx: 4,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Jaime Woo",
        ins_handle: [""],
        quote: '',
        bio: "I am a writer and mindfulness practitioner and teacher based in Scarborough, and hold a Master of " +
            "Education from Queen’s University, with a concentration in Indigenous education. My capstone examined the " +
            "Indigenous language revitalization efforts in Puerto Rico for the Taino people.\n" +
            "\n" +
            "My work explores technology, culture, and identity, and increasingly I example how colonization, capitalism, " +
            "and neuroscience all inform those intersections. My writing has been published in This Magazine, Hyphen, " +
            "Advocate, Out, Them, and the Globe and Mail. My book, Meet Grindr, which dissected the design of the " +
            "popular hookup app Grindr and its influence on user behaviour, was nominated for a best non-fiction at the " +
            "Lambda Literary awards. \n" +
            "\n" +
            "I have practiced meditation for 7 years and been a teacher since 2021. I hold an advanced certificate in " +
            "Trauma-Sensitive Mindfulness (TSM) issued by David A. Treleaven, PhD as well as a certificate in " +
            "Foundations of Applied Mindfulness Meditation from the University of Toronto.\n" +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/thejaimewoo\">@thejaimewoo</a>" +
            "\n" +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://jaimewoo.com/\">https://jaimewoo.com</a>",
        topic_name: "Unseen and Unspoken",
        // quote_bg_url: require(''),
        collection_title: "The Birthday Banquet",
        description: "I am a writer focused on the intersections of culture, technology, and identity. My mindfulness " +
            "journey, fittingly, began 7 years ago when a friend introduced me to Headspace, the meditation app. \n" +
            "\n" +
            "I found interesting the contradictions between the concept of non-striving and an app that needed to " +
            "growth hack for VC funding. Since then, I've studied mindfulness and meditation more formally, but always " +
            "with a careful eye on the cultural context: what did it mean to have mindfulness booths in the toxic work " +
            "environment of the Amazon warehouses? Or revered leaders like Sharon Salzberg sharing heteronormative " +
            "advice? \n" +
            "\n" +
            "I am interested in exploring through words and through a sample meditation what practice could look like " +
            "rooted in radical love. When being a queer, non-binary third-culture kid doesn’t feel like an exception? \n" +
            "\n" +
            "Mindfulness is a reflection on our relationship within ourselves and with the world around us. But too " +
            "often these practices are normative. Take the practice of a body scan: what then for those of us who do " +
            "not feel safe in our bodies? This sense of not belonging to one's body is a common one, when you've been " +
            "told your desires are \"wrong,\" that your skin colour is unworthy.\n" +
            "\n" +
            "In trauma-sensitive mindfulness practice, we use the phrase, \"if it is supportive for you,\" because it " +
            "provides autonomy and agency to the practitioner. Offering modifications and variations is a way of " +
            "honouring innate wisdom. My essay and meditation would ask: what could be truly supportive for all of us?\n" +
            "\n" +
            "See also:\n" +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://hyphenmagazine.com/blog/2017/01/january-nonfiction-birthday-banquet-jaime-woo\">The Birthday Banquet</a>" +
            "\n" +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.out.com/out-exclusives/2017/1/09/love-black-and-white-love-ourselves-love-all-our-parts\">Love in Black and White: To Love Ourselves Is to Love All of Our Parts</a>" +
            "\n" +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.kirkusreviews.com/book-reviews/jaime-woo/meet-grindr\">Meet Grindr: How One App Changed the Way We Connect</a>",
        directory: '/assets/UnseenAndUnspoken/Jaime',
        artworks: {

        },
        slides: [
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet1.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet2.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet3.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet4.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet5.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet6.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/UnseenAndUnspoken/Jaime/TheBirthdayBanquet7.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },

        ],
    },
}