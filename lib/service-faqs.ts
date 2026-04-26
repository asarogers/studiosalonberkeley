/**
 * lib/service-faqs.ts
 *
 * Per-service FAQ sets for Studio Salon Berkeley.
 * These are surfaced on service detail pages in place of the generic SERVICE_FAQS
 * and power the visible FAQ accordion + FAQPage JSON-LD.
 *
 * Questions are PAA-style — grounded in what someone searching that specific
 * service in Berkeley would actually type into Google.
 */
import type { FAQ } from "@/lib/common-faqs";

export const SERVICE_FAQ_MAP: Record<string, FAQ[]> = {
  "loc-maintenance": [
    {
      q: "How often should I get my locs retwisted?",
      a: "Most clients come in every four to six weeks. If you have finer locs or a looser texture, you may need to come in closer to four weeks to keep the roots from budding and merging. Dense or coarser locs can often stretch to six weeks without issue. Going much longer than eight weeks means more new growth to manage cleanly and a slightly longer appointment.",
    },
    {
      q: "What causes product buildup in locs, and how do I prevent it?",
      a: "Buildup comes from heavy butters, waxes, and thick gels getting trapped inside the loc shaft where water can't rinse them out. To prevent it, stick to lightweight oils and residue-free leave-ins, and shampoo with a clarifying formula every wash. At Studio Salon we use residue-free products specifically matched to locs so buildup doesn't accumulate between visits.",
    },
    {
      q: "What is the difference between interlocking and palm rolling for locs?",
      a: "Palm rolling twists the root clockwise using your palms and relies on the hair wrapping around itself as it dries — it is gentler and creates a rounder loc shape. Interlocking passes the end of the loc back through the root using a tool, creating a mechanically locked knot that holds longer between appointments and holds better in water. The right choice depends on your texture, loc maturity, and lifestyle. We discuss it at your first visit and keep consistent from there.",
    },
    {
      q: "What is loc budding, and is it something to worry about?",
      a: "Budding is a normal stage in the loc journey where the middle of the loc swells out before the hair fully locks. It happens most between months two and six and means the hair is actively locking — it is not damage. What you watch out for is budding at the root where locs start to fuse to their neighbors. That is where early intervention at a maintenance visit separates locs cleanly before they grow together.",
    },
    {
      q: "How can I tell if my locs are healthy?",
      a: "Healthy locs feel light and flexible, not stiff, brittle, or hollow. The scalp should be flake-free and not overly itchy. Roots should be forming new growth with a defined grid rather than merging sideways. Ends should be sealed and not fraying into lint traps. If locs are unusually thin at a point, feel dry no matter how much you oil, or are shedding in clumps, those are signals to bring to a maintenance appointment sooner rather than later.",
    },
  ],

  "natural-hair-styling": [
    {
      q: "What is the right wash day sequence for natural hair?",
      a: "A thorough wash day goes: pre-poo or scalp oil if your hair is very dry, clarifying or moisturizing shampoo in sections, rinse, deep conditioner under heat for 20 to 30 minutes, cool rinse to close the cuticle, leave-in on soaking-wet hair, and then styling product. Skipping the cool rinse or applying product to hair that is too dry are the two steps that most affect how well the style holds.",
    },
    {
      q: "How do I protect my natural hair from heat damage during styling?",
      a: "Use a quality heat protectant on damp hair before any blow dry or flat iron work. Work in small sections and keep the tool moving — dwelling in one spot is where damage happens. Choose the lowest effective temperature for your texture rather than the highest setting. At Studio Salon we tension-blow dry first to get the hair mostly smooth before the flat iron touches it, which means fewer passes and less heat overall.",
    },
    {
      q: "Why does my natural hair shrink so much, and how do you manage it?",
      a: "Shrinkage is a sign of healthy elasticity — highly coiled hair can shrink 50 to 80 percent from its stretched length. We manage it by stretching with tension drying, banding, or twisting on damp hair before styling. If you want length to show without heat, a twist-out or braid-out stretches the curl without permanently altering it. Silk pressing stretches further but is a heat service, so it factors into how often we use it.",
    },
    {
      q: "What is the difference between a protective style and a low-manipulation style?",
      a: "A protective style tucks the ends of your hair away — braids, twists, sew-ins, and crochet are protective because the ends are not exposed to friction. A low-manipulation style, like a twist-out or wash-and-go, leaves the hair out but minimizes daily touching and restyling. Both approaches reduce breakage compared to daily manipulation, but they do it differently. At Studio Salon we talk through which one fits your lifestyle and hair goals before recommending.",
    },
    {
      q: "Can natural hair be styled for a formal event without heat?",
      a: "Yes — perm rod sets, flexi-rod sets, braid-outs, and bantu knot-outs all create defined, polished styles without a flat iron. For updos and structured looks, we pin and set with strong-hold products that hold through a long event. These styles can be done the night before so you have time to let them fully dry and reveal. Call (510) 690-5274 to scope a heatless formal style at Studio Salon.",
    },
  ],

  "silk-press": [
    {
      q: "Can a silk press permanently damage my natural hair?",
      a: "A single well-executed silk press at the right temperature will not permanently alter your curl pattern. Damage happens from repeated high heat, too many passes in the same spot, pressing on hair that is already weakened from color or chemical services, or pressing without a proper heat protectant. At Studio Salon we choose temperature based on your hair's porosity and density — not habit — and we never press hair we think is too compromised to handle heat safely.",
    },
    {
      q: "How long does a silk press last?",
      a: "A well-done silk press on properly prepped hair typically lasts seven to fourteen days before curls begin to revert on their own. Humidity, sweat, and moisture are the main variables — a foggy Berkeley week will shorten it compared to a dry stretch. Sleeping on a silk pillowcase or in a satin bonnet and avoiding humidity when possible will extend it significantly.",
    },
    {
      q: "How should I sleep on a silk press to make it last?",
      a: "Wrap your hair before bed — the classic method is to brush the hair smooth, wrap it around the head in the direction it falls, and secure with a satin scarf or bonnet. A silk pillowcase alone helps but is not as effective as wrapping. Avoid any moisture on the hair at night: no steam rooms, no sweaty workouts, and no heavy oils applied directly to the hair.",
    },
    {
      q: "Will Berkeley's fog and humidity cause my silk press to revert?",
      a: "It can. Natural hair reacts to moisture in the air by contracting back toward its curl pattern — this is called reversion and it is not damage, it is just the hair responding to humidity. A light anti-humidity serum on the finished press helps create a barrier. Avoiding foggy walks, covering the hair in light rain, and steering clear of steam are the practical habits that keep a press looking fresh longer in the Bay Area.",
    },
    {
      q: "What is the difference between a silk press and a blowout?",
      a: "A blowout stretches the hair with tension and a round brush under heat from a blow dryer — it removes most curl definition but leaves some body and bend. A silk press goes one step further: after the blowout, a flat iron is used in small sections to fully smooth and straighten the shaft. The result is sleeker, shinier, and straighter than a blowout alone. Both are temporary. A silk press typically lasts longer and reads more polished.",
    },
  ],

  "hair-color": [
    {
      q: "How much can you lift natural or loc hair with color?",
      a: "The amount of lift possible depends on your natural base level, the porosity of your hair, and whether the hair has had any previous chemical services. Fine or porous hair may lift quickly but can also become fragile fast. Dense coils often require more developer and multiple sessions to reach lighter levels safely. At Studio Salon we do a strand and porosity check before any lift service and are transparent about what is realistic in one visit versus what needs a multi-session plan.",
    },
    {
      q: "How does color affect natural hair texture and curl pattern?",
      a: "Lightening — especially bleach — opens the cuticle and can loosen the curl pattern, sometimes permanently. The degree depends on how much lift was done and how the hair was cared for after. Deposit-only color and glosses have minimal effect on texture. Toners and semi-permanents sit on the outside of the cuticle and typically do not alter the pattern. We always walk through what to expect for your specific texture before color is applied.",
    },
    {
      q: "What is the difference between a toner and a permanent color?",
      a: "A toner is a semi-permanent or demi-permanent color applied after lifting to neutralize brassiness or add a targeted tone — it fades over several weeks and does not lift the hair further. Permanent color contains developer that opens the cuticle to deposit or lift pigment, and it does not fade the same way. Permanent color is used for full coverage, significant color change, or root touch-ups. The right choice depends on your goal and the current state of your hair.",
    },
    {
      q: "What is a color melt, and how is it different from balayage?",
      a: "Balayage is a painting technique — color or lightener is swept onto the surface of the hair in a freehand pattern, creating a high-contrast sun-kissed effect with distinct lighter sections. A color melt is a blending technique — two or three shades are seamlessly graduated from roots to ends with no visible line between them. You can do a color melt with or without balayage painting underneath. Balayage creates dimension; a color melt creates smooth transition. Many looks use both together.",
    },
    {
      q: "How long should I wait between color services?",
      a: "Root touch-ups on permanent color are typically done every four to six weeks as new growth appears. Highlights and balayage last longer and are usually refreshed every eight to twelve weeks depending on placement and grow-out tolerance. Any bleach or high-lift service should not be repeated until the hair has had time to recover and is in a strong protein state — rushing back for back-to-back bleach appointments is where breakage happens. We will tell you at the first service when we recommend coming back.",
    },
  ],

  "braids": [
    {
      q: "What is the difference between knotless braids and traditional box braids?",
      a: "Traditional box braids start with a knot of extension hair at the root, which creates immediate tension at the scalp. Knotless braids feed the extension hair in gradually after starting with your natural hair, so there is no knot and no immediate pull. Knotless braids sit flatter, look more natural at the root, and put less stress on the edges and scalp. The tradeoff is that knotless installs take longer and cost more than traditional box braids. For clients with fine edges or a history of tension, knotless is almost always the better call.",
    },
    {
      q: "Can braids cause traction alopecia, and how do you prevent it?",
      a: "Yes — braids installed too tightly, especially at the edges, can cause traction alopecia over time. The warning signs during install are pain that does not ease in the first hour, bumps or pimples along the hairline within a day, and edges that look pulled and thin after takedown. At Studio Salon we braid at low tension from the very first row and build the edge braids with extra care. If your edges are already compromised, we talk through that before we start and may recommend a different style.",
    },
    {
      q: "How long do braids last?",
      a: "With proper care, box braids and knotless braids typically last four to eight weeks. Cornrows last two to four weeks before the roots need refreshing. Smaller braids tend to last longer than large ones because there is less weight pulling on each root. Keeping the scalp moisturized, sleeping with a satin bonnet, and avoiding excessive manipulation extend the life of any install. Beyond eight weeks, most braid styles start to lint and tangle in ways that make takedown harder and can stress the hair.",
    },
    {
      q: "How do you moisturize hair under braids?",
      a: "The scalp still needs moisture even when hair is braided. A lightweight oil — jojoba, sweet almond, or a dedicated scalp oil — applied along the parts every few days keeps the scalp from drying out and flaking. Avoid heavy butters and thick creams on braided hair because they sit on the surface and cause buildup at the root. A diluted leave-in conditioner spritzed lightly on the braids themselves can help with dryness. We give every client a home-care rundown before they leave the chair.",
    },
    {
      q: "How do I know if my edges are healthy enough for braids?",
      a: "Healthy edges have density that matches the rest of your hairline — no visible scalp through the baby hair, no thinning patches, and no soreness at rest. If you can see through your edges when the hair is laid flat, or if there are patches where the hair is significantly shorter than surrounding hair, those are signs that tension at the hairline should be minimized. We look at the hairline at every consult and braid the perimeter differently if there is any concern about edge health.",
    },
  ],

  "sew-in-weave": [
    {
      q: "What is the difference between a closure, a frontal, and a leave-out?",
      a: "A leave-out means a section of your natural hair is left out and blended with the weave — it requires daily heat or styling to match the extension hair. A closure is a small piece of hair (usually four by four or five by five inches) sewn in at the top of the install to cover the part; your natural hair is fully hidden. A frontal covers the entire hairline from ear to ear, giving the most styling versatility but requiring the most maintenance and customization. We talk through which fits your lifestyle before the install.",
    },
    {
      q: "How long does a sew-in weave install take?",
      a: "At Studio Salon, the full sew-in install — including cleanse, blow dry, braided foundation, sew-in, and finishing wash and blow dry — runs about 195 minutes, or just over three hours. First-time installs or more complex styles like vixen parts may run slightly longer. If your hair needs a deep conditioning treatment or you are bringing a frontal that needs to be customized, plan for additional time. We tell you the realistic window when you book.",
    },
    {
      q: "How do I care for my natural hair while it is under a sew-in?",
      a: "The hair under the weave still needs moisture. Every one to two weeks, use a syringe or applicator bottle to work a diluted leave-in conditioner onto the scalp and natural hair through the wefts. Keep the scalp clean with a diluted shampoo wash every week or two. Avoid letting sweat sit on the scalp for days at a time. When you take the weave out, plan for a deep conditioning treatment on your natural hair before installing the next style.",
    },
    {
      q: "How long does a sew-in weave last?",
      a: "A properly installed and maintained sew-in typically lasts six to eight weeks. At that point the natural hair growth will have raised the wefts enough to affect the lay and appearance. You can sometimes stretch it to ten weeks with a tighten-up appointment, but beyond that the foundation is usually too loose to sit flat. Going too long also increases the risk of matting at the roots when the weave is taken down.",
    },
    {
      q: "Does a sew-in protect your natural hair?",
      a: "When installed correctly and maintained, yes. The natural hair is braided into a flat foundation and the ends are tucked, which protects them from daily friction and environmental exposure. The key word is correctly — a sew-in installed too tightly, left in too long, or taken down without proper detangling can cause more damage than it prevents. At Studio Salon the foundation is built for scalp comfort and the natural hair is conditioned before we install, so the protective benefit is real.",
    },
  ],

  "crochet-braids": [
    {
      q: "How are crochet braids installed — are they sewn in?",
      a: "Crochet braids are not sewn in. The natural hair is cornrowed first into a flat foundation. Then a latch hook or crochet needle is passed under a cornrow, the extension hair is looped around the needle, and pulled back through to create a knot that sits against the braid. No thread and no glue are involved. The process is fast compared to knotless braids and puts far less tension on the scalp than a sew-in because nothing is being pulled taut against the scalp.",
    },
    {
      q: "Do crochet braids actually protect your natural hair?",
      a: "Yes — crochet is one of the most protective installs because the natural hair lives inside the cornrow foundation and the ends are not exposed at all. As long as the cornrows are not too tight and the scalp is kept moisturized between appointments, the natural hair is essentially on a break for the duration of wear. Clients recovering from tension damage or a rough wig schedule often find crochet gives their edges real time to recover.",
    },
    {
      q: "What types of hair work best for crochet braids?",
      a: "Crochet is extremely versatile — you can use kinky, curly, wavy, straight, or loc-texture extension hair depending on the look you want. Water wave and deep wave hair give voluminous curly results. Marley and kinky hair gives a natural coil look. Passion twist hair and faux loc hair are both popular crochet installs. The main requirement is that the hair be sold in a form that can be looped and knotted — most extension hair specifically packaged for crochet works well. We give you a hair count and brand guidance at consult.",
    },
    {
      q: "How long does a crochet install take?",
      a: "At Studio Salon, a crochet install runs about 150 minutes — two and a half hours — from cleanse and blow dry through the finished cornrow foundation and full crochet. This is significantly faster than a large knotless braid install. Simpler styles and smaller head sizes may come in under that; more elaborate styles with hot water curling or detailed shaping at the ends may run slightly over. We scope the time when you book.",
    },
    {
      q: "How long do crochet braids last, and how do you maintain them?",
      a: "Most crochet installs last four to six weeks. The natural hair underneath grows out and eventually raises the cornrow foundation enough to show, which is the main signal that it is time to take down. Weekly scalp refreshing with a diluted leave-in or light oil keeps the scalp healthy. Sleeping with a satin bonnet preserves the texture of the crochet hair. Styles in curly or water wave hair can be refreshed with a light water and conditioner spritz to reactivate the curl.",
    },
  ],

  "quick-weave": [
    {
      q: "What is the difference between a quick weave and a sew-in?",
      a: "A sew-in is built on a braided foundation — the wefts are sewn onto cornrows with thread. A quick weave uses a protective cap or wrap over the natural hair, and wefts are bonded with hair glue onto the cap, not sewn or glued directly to the hair. This makes a quick weave faster to install and easier to remove, but it is also a shorter-lasting style. Sew-ins are generally better for longer wear; quick weaves are better for an event or short-term look.",
    },
    {
      q: "Does the glue in a quick weave damage your natural hair?",
      a: "When done correctly, no — the glue never touches your natural hair. A protective cap or wrap is placed over the natural hair first, and the wefts are bonded to the cap. At Studio Salon we are careful about the cap method and make sure the natural hair is fully covered before any adhesive comes near it. Damage from quick weaves typically happens when glue is applied directly to the hair or scalp, which is not how this chair does it.",
    },
    {
      q: "How long does a quick weave last?",
      a: "A quick weave typically lasts two to four weeks. The bonding adhesive loosens over time, especially with washing, sweat, and humidity. This is shorter than a sew-in but is often exactly right for clients who want a full weave look for a specific event or vacation. For longer wear, a sew-in is usually the better choice. We make this recommendation honestly at consult so you end up in the right service for your timeline.",
    },
    {
      q: "Can I wash my hair with a quick weave in?",
      a: "You can rinse the style with cool water but avoid soaking the base — water weakens the bonding adhesive and can cause the style to lift or shift earlier than expected. Dry shampoo or targeted scalp refreshing with a light spritz works better for keeping the scalp clean during wear. If the style is for a specific event window, plan wash day after takedown rather than during wear.",
    },
    {
      q: "Who is a good candidate for a quick weave versus a sew-in?",
      a: "Quick weaves suit clients who want a full weave look for a short window — a week, a reunion, a trip — without committing three hours and $180 to a sew-in they will only wear for two weeks. They are also a fit for clients who do not have enough hair growth to braid a solid sew-in foundation. Sew-ins are better for clients who want to wear the style for six to eight weeks and want more styling versatility over time. We talk through both options at consult if you are not sure.",
    },
  ],

  "mens-hair-barbering": [
    {
      q: "What is the difference between a low fade, a mid fade, and a high fade?",
      a: "The terms describe where the taper begins on the head relative to the ears. A low fade starts the taper just above the ear and at the nape — the gradation is tight and close to the hairline. A mid fade starts the taper at the temple level, roughly at the middle of the sides and back. A high fade starts much higher — often at or above the temple — creating more contrast between the very short sides and the longer top. The right choice depends on your head shape and how much contrast you want.",
    },
    {
      q: "How do I describe what I want to a stylist if I don't know the terminology?",
      a: "Bring a photo — it is the single most useful thing you can do. A reference on your phone, even a rough approximation, tells the stylist more than any verbal description. Beyond that, communicate three things: how much length you want on top, how short you want the sides, and whether you want a hard or skin fade versus a softer taper. If you are not sure, say so — a good stylist will ask the right follow-up questions and hold clippers until you both agree on the plan.",
    },
    {
      q: "How often should men come in for a haircut or line-up?",
      a: "Most men who keep a tight cut come in every two to three weeks for a line-up or shape-up to keep the edges clean. A full cut is typically needed every four to six weeks as the shape grows out. Clients with locs or braids have their own maintenance schedule — loc retwists run every four to six weeks regardless of whether a cut is needed. If you are growing out a cut into braid length, we can talk timing so the grow-out phase does not feel rough.",
    },
    {
      q: "Can men start locs at Studio Salon?",
      a: "Yes — Studio Salon does loc starter sets for men as part of the natural hair and loc work in the chair. Starter options include two-strand twists, comb coils, interlocked starts, and freeform. The right start method depends on your texture, your density, and how hands-on you want to be with early-stage maintenance. A brief consult by phone or in person at 2902 Sacramento St is the best first step so we can look at the hair and map the starter method.",
    },
    {
      q: "What should I tell the stylist about my beard when I come in?",
      a: "For beard shaping, bring the same context you would for a cut — a reference photo of the shape you want, information about how your beard grows in (patchier on one side, slow on the cheeks, fast on the chin), and what you want preserved versus cleaned up. If you want a fade connecting the hair to the beard, mention it upfront so the fade and the beard shaping are planned together. Beard shaping is an add-on at Studio Salon and is quoted before we start.",
    },
  ],

  "womens-haircut": [
    {
      q: "How do I communicate exactly what I want to my stylist?",
      a: "Bring reference photos in natural light — screenshot them from Instagram, Pinterest, or Google Images and save a few options that show the shape you want from multiple angles. Beyond photos, describe the specific things you care most about: length you want to keep, whether you want layers, whether you want a style that works for your natural texture or one that requires heat. Tell your stylist what you have hated about past cuts too — knowing what went wrong is as useful as knowing what you liked.",
    },
    {
      q: "Should natural hair be trimmed differently than relaxed or straight hair?",
      a: "Yes. Natural hair is almost always cut dry or stretched rather than soaking wet, because curly and coily hair shrinks significantly when wet — a wet cut can remove far more length than intended. A dry cut also lets the stylist see how the curl actually falls in real life rather than cutting a shape that only works when wet. At Studio Salon we assess the hair dry before any water is introduced for natural hair cuts, and adjust the technique based on curl pattern and density.",
    },
    {
      q: "How do I know when it is time to cut split ends versus just getting a trim?",
      a: "Split ends are a structural break in the hair shaft — once a hair is split, it continues to split upward and cannot be repaired with product. If you see fraying, single-strand knots, or ends that look thin and wispy compared to the hair an inch above them, it is time to cut. A trim of a quarter to half an inch removes the damage while preserving length. If you wait until the splits are severe, more length has to go to get above them. Coming in every eight to twelve weeks for a light trim keeps overall length better than waiting.",
    },
    {
      q: "Will a trim change my curl pattern?",
      a: "No — a trim removes damaged or stretched ends, which can actually make curls look more defined and springier because the weight of old, tired ends is gone. You may notice more shrinkage after a trim on coily hair, which is a sign of improved elasticity, not a change in pattern. Some clients feel their curls are tighter after a trim; that is the healthy new ends behaving as they should without the drag of split or weakened tips pulling them down.",
    },
    {
      q: "Can a haircut fix shrinkage or make hair look longer?",
      a: "A cut can reshape the hair to appear longer by removing bulk from the ends and creating more of a point or tapered shape. A round or blunt shape often appears shorter because the volume sits outward rather than downward. Layering strategically can reduce volume at the sides while allowing length to show in the center. However, a haircut alone will not permanently stretch the curl — that is a styling and stretching question. We will tell you honestly which length goals a cut can help with and which ones are a styling conversation.",
    },
  ],

  "chemical-relaxer": [
    {
      q: "How long should I wait between relaxer touch-ups?",
      a: "Most clients doing regular touch-ups wait eight to twelve weeks between appointments, timed to when new growth is visible and the line of demarcation — where the relaxed hair meets the natural root — is clearly defined. Going shorter than eight weeks risks overlapping the relaxer onto already-processed hair, which is where breakage comes from. Going past twelve weeks is fine for your hair health but makes the touch-up appointment longer and more technical. We look at your regrowth at the appointment and confirm timing is right before applying.",
    },
    {
      q: "Can I transition from relaxed to natural hair without cutting it all off?",
      a: "Yes — transitioning by growing out the relaxer while keeping length is called a long-term transition. The main challenge is managing the line of demarcation where natural and relaxed hair meet, which is structurally the weakest point and prone to breakage. Protective styles — braids, twists, sew-ins — are the most common tool for getting through the transition while retaining length. We can map a transition plan at consult and help you maintain the hair through each stage without a big chop if that is not what you want.",
    },
    {
      q: "How do I keep relaxed hair healthy between appointments?",
      a: "Relaxed hair has been chemically opened at the cuticle and needs consistent moisture, protein, and gentle handling to stay healthy. Deep condition every one to two weeks. Use a protein treatment monthly or whenever the hair feels limp or stretchy. Avoid excessive heat — the hair is already processed and does not need high temperatures on top of it. Protect the ends with protective styles between appointments, and trim every eight to twelve weeks to keep splits from traveling up the shaft.",
    },
    {
      q: "What happens if relaxer is applied to already-relaxed hair?",
      a: "Overlapping relaxer onto hair that has already been processed is one of the most common causes of relaxer-related breakage. The hair in the overlapping zone gets double the chemical exposure its structure can handle, and it weakens at that point. This is why proper sectioning, careful application only on new growth, and watching processing time actively matter so much. At Studio Salon we apply in clean sections to regrowth only and watch the timer actively so processing does not go past what the hair can handle.",
    },
    {
      q: "How do I know if my relaxer is too strong for my hair?",
      a: "Signs that a relaxer strength is wrong for your hair include excessive breakage in the weeks after the service, a significant change in texture beyond what was intended, scalp burns even with proper basing, and hair that feels gummy or stretchy without snapping back when wet. Relaxers come in different strengths (mild, regular, super), and the right one depends on your natural texture and what you are trying to achieve. We assess texture and hair history at consult before choosing a formulation.",
    },
  ],

  "two-strand-twist": [
    {
      q: "What is the difference between two-strand twists and locs?",
      a: "Two-strand twists are a temporary style — two sections of hair are twisted around each other from root to tip, but the hair is not permanently locked. They can be untwisted, washed out, and re-done indefinitely. Locs are a permanent style where the hair has matted together and cannot be separated without cutting. Twists are sometimes used as a starter method for locs — the twist begins the coiling process — but wearing twists does not automatically create locs. If you are using twists as a starter, the intention and maintenance approach are different from styling twists.",
    },
    {
      q: "How long do two-strand twists last as a style?",
      a: "A well-installed twist set on properly prepped hair typically holds two to three weeks as a style before the roots begin to frizz significantly and the twists start to unravel at the ends. Finer textures tend to unravel faster than coarser textures. Sleeping in a satin bonnet nightly, keeping the scalp lightly moisturized, and avoiding excessive manipulation extend the life of the set. After takedown, the twist-out style itself can last an additional three to five days depending on the curl definition.",
    },
    {
      q: "Can two-strand twists be used to start locs?",
      a: "Yes — two-strand twists are one of the most common loc starter methods, especially for clients with 4a through 4c textures. The twist begins to coil and tighten on itself over weeks and months as the hair locks. The advantage of twist starters over comb coils is that they hold more length and can be maintained without a loctician for longer between visits. The disadvantage is that the early stages can look fuzzy or unravel if not maintained carefully. We can walk through starter method options in a consult at 2902 Sacramento St.",
    },
    {
      q: "How often do two-strand twists need to be retwisted?",
      a: "If you are wearing twists as a temporary style, the full set is usually redone from scratch every two to three weeks. If you are using twists as a loc starter method, a loctician retwists the roots every four to six weeks as the new growth comes in — similar to a loc maintenance schedule. Between professional retwists, you can do a light palm roll on new growth at home to keep the roots neat, but be careful not to disturb the body of the twist before it has locked.",
    },
    {
      q: "What products work best for two-strand twists?",
      a: "The ideal product combination for twists is a moisturizing leave-in conditioner applied to wet or damp hair, followed by a holding cream or butter that has enough grip to keep the twist together without being so heavy it causes buildup. Lighter textures (3b, 3c) usually need less hold. Denser coils (4b, 4c) need more. At Studio Salon we match the product sequence to your specific texture and porosity so the twist holds from root to tip and the eventual twist-out has real definition rather than frizz.",
    },
  ],

  "eyebrow-waxing": [
    {
      q: "How long does eyebrow waxing last?",
      a: "Most clients find their wax results last three to four weeks before the hair has grown back enough to need another shape-up. Hair grows at slightly different rates for everyone — if you have faster facial hair growth, you may be coming in closer to three weeks. If you are on a slower cycle, you might stretch to five weeks. We recommend not tweezing between appointments so all the hair is at a consistent length for the next wax.",
    },
    {
      q: "What should I avoid after getting my eyebrows waxed?",
      a: "For 24 to 48 hours after waxing, avoid direct sun exposure on the waxed area — the skin is temporarily more sensitive to UV and can burn or hyperpigment more easily. Skip retinol and exfoliating acids around the brow area for at least 48 hours. Avoid heavy sweating, saunas, or steam rooms the day of the appointment. Do not apply heavy foundation or concealer directly over the waxed skin until the next day. A light soothing serum or aloe gel is fine to calm any redness.",
    },
    {
      q: "What is the difference between eyebrow waxing and eyebrow threading?",
      a: "Waxing uses a thin layer of warm wax applied in the direction of hair growth and removed in one smooth pull, taking multiple hairs at once. Threading uses a twisted cotton thread rolled over the skin to trap and pull individual hairs at the follicle. Waxing is faster for a full brow shape and grips even short, fine hairs well. Threading is more precise for stray individual hairs and is a better fit for clients with very sensitive skin or who are on retinol or other topicals that make waxing higher-risk. Both can produce a clean result in the right hands.",
    },
    {
      q: "Can I get my eyebrows waxed if I use retinol or skincare acids?",
      a: "Retinol, tretinoin, and exfoliating acids (AHAs, BHAs) thin the skin over time, making it more susceptible to lifting during waxing — the skin can tear or come off with the wax. We ask about current skincare at every brow appointment. If you are actively using retinol or prescription tretinoin, you should stop using it on the brow area for at least five to seven days before waxing. If you are on a strong prescription retinoid, threading may be the safer option. Always mention your skincare routine when you book.",
    },
    {
      q: "Is eyebrow waxing about shaping or just cleanup?",
      a: "Both, and it depends on what you need. A shape-up means we are working with your natural brow bone and face structure to design or restore an arch — this is particularly useful for clients who have over-tweezed or want a different look. A cleanup is a maintenance visit where the overall shape is already established and we are just removing the stray hairs that have grown back since the last wax. First-time clients usually get a shape-up conversation so we are building the right foundation. Regular clients typically come in for cleanup. We always consult before we pull.",
    },
  ],
};

export function getServiceFAQs(slug: string): FAQ[] | null {
  return SERVICE_FAQ_MAP[slug] ?? null;
}
