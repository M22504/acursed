/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Intro':{
        subtitle: '',
        body:'Please use Menti to allow students to vote for their options of choice. You may want to zoom in on your browser to an optimal level and are strongly encouraged to narrate the lines.'
    }
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'synthetic':'synthetic.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'esophagation': 'esophagation.mp4',
	'evisceration': 'evisceration.mp4',
});

// Define the images used in the game.
monogatari.assets ('images', {
	'hand-spiral': 'hand_spiral.gif',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'main_bedroom' : 'gamer_bedroom.jpg',
	'simp' : 'simp_background.jpg',
	'antivax' : "antivax_background.jpg",
	'oyashiro': 'oyashiro.png',
	'tea_party': 'tea_party.jpg',
});


// Define the Characters
monogatari.characters ({
	'n': {
		// name: 'The Narrator',
		color: '#5bcaff'
	},
	'p': {
		name: 'You',
		color: '#ff99cc'
	},
	't' : {
		name: 'Twitter',
		color: '#cc0000'
	},
	'simp': {
		name: '@UNBEHOLDEN2NONE',
		color: '#3366ff',
		directory: 'simp',
		sprites: {
			normal: 'simp.png',
			mald: 'simp_mald.png',
			mald2: 'simp_mald2.png',
			mald3: 'simp_mald3.png',
			mald4: 'simp_mald4.png',
			sad: 'simp_sad.png',
			sad2: 'simp_sad3.png',
			sad3: 'simp_sad2.png',
			misog: 'simp_misog.png',
			kalm: 'simp_kalm.png'
		}
	},
	'v' : {
		name: '@VaudevilleMargarine',
		color: '#9933ff',
		directory: 'vaxxer',
		sprites: {
			normal: "vaxxer.png"
		}
	},
	'av' : {
		name: '@hunter2',
		color: '#006699',
		directory: 'antivaxxer',
		sprites: {
			discontent: "vax_discontent.png",
			discontenter: "vax_discontenter.png"
		}
	},
	'nipah': {
		name: '???',
		color: '#990000'
	},
	'br': {
		name: 'Bruce3434',
		color: '#ffdf00',
	},
	'host': {
		name: 'Host',
		color: '#619dff',
	},
	'audience': {
		name: 'Audience',
		color: '#ffffff'
	}

});

function stat (stat, value) {
    monogatari.storage('player').stats[stat] += value;
    $_(`[data-stat="${stat}"]`).value ( monogatari.storage('player').stats[stat]);
}

monogatari.script ({
	// The game starts here.
	'Start': [
		{
			"Function": {
				"Apply": function(){
					$_(`[data-stat="social_credit_score"]`).value ( 50);
					return true;
				},
				"Reverse": function(){
					$_(`[data-stat="social_credit_score"]`).value ( 50);
					return true;
				}
			}
		},
		'show message Intro',
		{
			'Input': {
				'Text': 'What will be your online username?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					monogatari.storage ({
						player: {
							name: input,
							stats: {
								"social_credit_score": 50
							}
						}
					});
					monogatari.characters['p'].name = input;
					return true;
				},
				'Revert': function () {
					monogatari.storage ({
						player: {
							name: '',
							stats: {
								"social_credit_score": 50
							}
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show scene main_bedroom with fadeIn',
		'n The day has begun. It\'s a holiday, so you choose to spend your entire day on the internet.',
		'n Your current social credit score is {{player.stats.social_credit_score}}.',
		'jump Tree',
	],
	'Tree': [
		'show scene main_bedroom',
		{
			'Choice': {
				'Dialog': 'n What do you want to do?',
				'Video': {
					'Text': 'Stream the tube',
					'Do': 'jump Video'
				},
				'Twitter': {
					'Text': 'Browse Twitter',
					'Do': 'jump Twit',
				},
				'CruiseControl': {
					'Text': 'Check celebrity posts',
					'Do': 'jump CruiseControl',
				},
				'Cromartie' : {
					'Text': 'Check your MySpace',
					'Do': 'jump Cromartie'
				}
			}
		}
	],
	'Vidya': [
		'n "Idle hands are the devil\'s plaything" you proclaim as you boot up your computer. You feel a tinge of guilt for not running the errands Mom asked you to.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -20);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -20);
					return true;
				}
			}
		},
		'end'
	],
	'Video': [
		"n You decide to idly browse some videos. You often enjoy the DIY-aesthetic embodied by channels of small time content-creators and independent journalists.",
		"n You take pride in stumbling upon oddities that would never see the light of day on mainstream media outlets. You'd even call yourself a connoisseur in esoteric media.",
		"n You find a strange looking video entitled 'ESOPHAGATION.AVI'",
		"n You pull the blinders.",
		'show video esophagation fullscreen with close controls',
		'show scene main_bedroom with fadeIn',
		"p \"What a hack.\"",
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", 50);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", 50);
					return true;
				}
			}
		},
		"jump Tree"
	],
	'Twit': [
		'n You open Twitter on your phone and begin mindlessly scrolling',
		'next',
		'show image twitter1.png at bottom with fadeIn',
		'n You scroll for a bit before encountering a post which catches your eye',
		'show background simp with fadeIn',
		'p What\'s this guy\'s problem?',
		'show character simp normal at left with slideInLeft end-fadeOut',
		'simp \"Just donated $300 dollars to @pokimane on her stream just now and she didn\'t read out my Twitch username. Thought I had a nice thing going along too.\"',
		{
			'Choice': {
				'Dialog': 'n How should you respond?',
				'Simp1A': {
					'Text': '"LUL SIMP what did you expect"',
					'Do': 'jump Simp1A'
				},
				'Simp1B': {
					'Text': '"You could have considered a more intelligent allocation of your finances given that your income appears to be below average based on your prior posts."',
					'Do': 'jump Simp1B'
				},
				'Simp1C': {
					'Text': '"Women..."',
					'Do': 'jump Simp1C'
				},
				'Simp1D': {
					'Text': 'Convince yourself to stop thinking about it and ignore',
					'Do': 'jump Simp1D'
				}
			}
		}
	],
	'Simp1A': [
		'show character simp mald at left with bounceIn end-fadeOut',
		"simp \"@{{player.name}} If exercising basic courtesy to a female makes you a simp, then yeah, I'm a simp\"",
		'show character simp mald2 at left with headShake end-fadeOut',
		'simp \"But of course if you are able to live the high life of trust-fund yuppies, you\'re therefore exempt from the simp title\"',
		'show character simp mald3 at left with shakeY end-fadeOut\"',
		'simp \"Why am I labelled me a simp for being nice to people.\"',
		'show character simp mald4 at left with wobble end-fadeOut',
		'simp \"Its general decency to stand for what one deserves. I do not wish to pick a fight, but it seems you are ' +
		'mistaken on the nuances of this conundrum. In fact, I don\'t know where this aggression is coming from, i\'d like to implore you ' +
		'to understand my position. Similar to how doctors and pharma in general generate money for the goods and services they provide, there\'s the implicit ' +
		'expectation that the streamer should give back to their fans who landed them that far ahead by giving them their due gratitude. It\'s this exploitation ' +
		'of viewers is what\'s ruining the community. I miss the good old days when streamers stood up to their fans.' +
		'I really just want everyone to get along.\"',
		'p Oh dear, it appears I may have hurt his feelings.',
		{
			'Choice': {
				'Dialog': 'n What are you going to say next?',
				'Simp1A': {
					'Text': '"Noted with thanks."',
					'Do': 'jump Simp2A'
				},
				'Simp1B': {
					'Text': '"Get off this site already, cretin. Oh, the miasmic atmosphere you produce."',
					'Do': 'jump Simp2B'
				},
				'Simp1C': {
					'Text': '\"Imagine being such a miserably troglodyte, wasting away spending your time ogling who make a living flaunting their beings on the internet, who leech of individuals like you who shamelessly leech off those around you to fund your unhealthy addictions. Sad!\"',
					'Do': 'jump Simp2C'
				},
				'Simp1D': {
					'Text': '"L"',
					'Do': 'jump Simp2B'
				}
			}
		}
	],
	'Simp1B': [
		'show character simp sad at left with bounceIn end-fadeOut',
		'simp \"@{{player.name}} im literally sitting here on the verge of tears\"',
		'show character simp sad2 at left with bounceIn end-fadeOut',
		'simp \"slaving away in this dead end job saving up for the end of the month splash\"',
		'show character simp sad3 at left with shakeX end-fadeOut',
		'simp \"maybe i should\'ve done that overtime, if i could get her the money earlier i might have been able to convince her in the donation message\"',
		'p Yikes, that took a turn',
		{
			'Choice': {
				'Dialog': 'n What are you going to say next?',
				'Simp1A': {
					'Text': '"Good, weep more"',
					'Do': 'jump Simp2B'
				},
				'Simp1B': {
					'Text': '"Look at the bright side, at least poki is $300 richer now"',
					'Do': 'jump Simp2D'
				},
				'Simp1C': {
					'Text': '\"Chin up, pals before e-pals.\"',
					'Do': 'jump Simp2D'
				}
			}
		}
	],
	'Simp1C': [
		'hide character simp with slideOutLeft',
		'n Did you expect your casual misogyny to be deemed socially acceptable as you provided a man with a false sense of comfort?',
		'n It appears your social credit score has gone down from that interaction.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -30);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -30);
					return true;
				}
			}
		},

		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'jump Antivax'
	],
	'Simp1D': [
		'n Congratulations on avoiding a social interaction in the digital sphere.',
		'n Your social credit score remains unchanged over your lack of any initiative.',
		'jump Antivax'
	],
	'Simp2A': [
		'hide character simp with slideOutLeft',
		't \"You have received no response from @__sad.and.lonely__\"',
		'p Welp, I guess that\'s the end of that.',
		'n How condescending of you.',
		'n It appears your social credit score has gone down from that interaction.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -30);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -30);
					return true;
				}
			}
		},

		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'jump Antivax'
	],
	'Simp2B': [
		'hide character simp with slideOutLeft',
		't \"You\'re blocked. You can\'t follow or see @__sad.and.lonely__\'s Tweets.\"',
		'p I guess I might\'ve gone a little bit too far.',
		'n It appears your social credit score has gone down from that interaction.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -20);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -20);
					return true;
				}
			}
		},

		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'n You should\'ve ...',
		'jump Antivax'
	],
	'Simp2C': [
		'hide character simp with slideOutLeft',
		't \"You\'re blocked. You can\'t follow or see @__sad.and.lonely__\'s Tweets.\"',
		'p I guess I might\'ve gone a little bit too far.',
		'n It appears your social credit score has gone down from that interaction.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -25);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -25);
					return true;
				}
			}
		},

		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'n You should\'ve ...',
		'jump Antivax'
	], 'Simp2D': [
		'show character simp kalm at left with slideInLeft slideOutLeft',
		'simp \"thanks, i feel a little better. the internet isnt that bad after all.\"',
		'p Welp, I guess that\'s the end of that.',
		'n It appears your social credit score has gone up from that interaction.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", +20);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -20);
					return true;
				}
			}
		},

		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'jump Antivax'
	],
	'Antivax': [
		'n You continue scrolling Twitter, inadequately absorbing the near endless stream of information being present to you.',
		'n An online discourse piques your interest.',
		'show background antivax with fadeIn',
		'p Ouh, what\'s this?',
		// 'show character simp kalm at left with slideInLeft',
		'show character av discontenter at left with slideInLeft',
		'av I don\'t know why the government keeps telling us to get the dangerous COVID-19 #vaccine. I won\'t risk my life or my children\'s life for them to inject microchips into us. They think they can fabricate a disease and fool us? If my children fall sick, I will heal them with essential oils instead.',
		'show character v normal at right with slideInRight',
		'v Not only are you letting yourself and your children potentially die, as an uneducated clown you are also endangering the rest of mankind. People like you should shut their trap and learn how to read a book before sharing your inane opinions to the rest of the world',
		'n You decide to chip in your opinion. ',
		{
			'Choice': {
				'Dialog': 'n What do you want to say?',
				'Vax1A': {
					'Text': '"@VaudvilleMargarine I agree fully! @hunter2 Get utterly destroyed by facts and logic, they don\'t care about your feelings."',
					'Do': 'jump VAX1A'
				},
				'Vax1B': {
					'Text': '"@VaudvilleMargarine You shouldn\'t give them a platform by entertaining their notions nor should you harrass them."',
					'Do': 'jump VAX1B'
				}
			}
		},
		'n Your current social credit score is now {{player.stats.social_credit_score}}',
		'jump Tree',
	],
	'VAX1A': [
		// 'n I feel like the attached images of Ben Shapiro were very unnecessary.',
		'hide character v with slideOutRight',
		'show character av discontent at left with shakeY slideInLeft',
		'av @{{player.name}} @VaudvilleMargarine Look at you government shills, promoting these falsehoods. So disrespectful too!',
		'av This only solidifies that the #vaccine is turning our people into mindless zombies that the government can control to make more of them, just like Alex Jones said!',
		'hide character av with slideOutRight',
		'n You could have done better',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -25);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -25);
					return true;
				}
			}
		},
		'jump Tree'
	],
	'VAX1B': [
		'hide character av',
		'show character v normal at right with slideInRight',
		'v "But but if I don\'t voice my condemnation them together with the rest of the rational community, then who will? Doesn\'t silent acquiescence give consent to those rabble-rousers to possibly proliferate their so-called agendas, whether ironically or not?"',
		'show character av discontent at left with slideInRight end-fadeOut',
		'av "Who are you calling a haggling Schnauzer!"',
		'p "Respect for others\' as people should take priority and if you feel that they really spreading dangerous opinions, you should voice your disapproval to the moderators would be willing to take action against their platform being known to host untenable uncompromising views which disrupt public safety."',
		'show character av discontenter',
		'jump Tree',
	],
	'CruiseControl': [
		'n With the recent devastation caused by the Los Alamos Tsunami crisis, you browse the twitter feeds of the celebrities to gauge whether they are sorry enough for the victims.',
		'n You find out that Tom Cruise vowed to donate a hefty sum to the cause.',
		"p \"I've always liked Mission Impossible 1, 2, 3, 4, 5 and 7, though they really are starting to milk the franchise.\" ",
		"n Interspersed within his tweets of prayers and salisbury steaks, were strange landscapes supposedly from his pilgrimage to the Ethiopian alps. He preaches about the power Scientology grants to its followers.",
		"n You feel a chill crawling down your back. You pull the blinders.",
		"p \"This is Scientology? Scientology will make me have control over my life?\"",
		"n An itch crawls up your throat, with the insatiable urge to tear it off like a scratch-and-sniff.",
		"show scene oyashiro with fadein",
		"n But then a bright irradiance enveloped the room, and you hear a soft voice incessantly apologising.",
		"nipah \"I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry.\"",
		"nipah \"It's my fault.\"",
		"p \"When I accidentally stepped on that stray's tail?\" ",
		"nipah \"It's my fault.\"",
		"p \"When I left the toilet seat up and Mom got really mad?\" ",
		"nipah \"It's my fault.\"",
		"p 'The recent UAP sightings?'",
		"nipah \"No, they're real.\"",
		"nipah \"But you shouldn't be here my child, huddled in this crawl space toiling away in front your screen. You could be a part of something greater than yourself. Come on now and join Scientology.\"",
		{
			'Choice': {
				'evisceration': {
					'Text': 'Accept the responsibility bestowed upon your existence, and become indoctrinated with one of them',
					'Do': 'jump evisceration'
				},
				'goodEnd': {
					'Text': 'Do not let yourself get consumed by radicalisation propagated through online interactions.',
					'Do': 'jump goodEnd'
				}
			}
		}
	],
	'evisceration': [
		'nipah \"Well done, I knew you would pick the peaceful option. If this were a J-RPG you would have been after my head. You must take the first step on your rite of passage.\"',
		'p \"...\"',
		'nipah \"You know what you must do, don\'t you?\"',
		'show video evisceration fullscreen with close controls',
		'jump Tree',
	],
	'goodEnd': [
		'p \"Giant Magical Orb of Illuminating Virtue, I will not let myself be suaded by your words. If you are the salvation I seek then be it so that I refute your offerings for the salvation I seek is not of forgiveness but atonement, where I am not bound by the sins I shlep but rather chased the objects of my torment to a brisk walk."',
		'nipah \"Very well, but you must prepare for the consequences. I decree 20 more \'Mission Impossible\'s featuring Sally Struthers from cult family classic Full House with the lead role.\"',
		'p \"I thought she was dead?\"',
		'nipah \"She is, the living dead.\"',
		'p \"This is the worst end!\"',
		'jump Tree',
	],
	'Cromartie': [
		'n You check your MySpace',
		'n As a wolf of Myspace investment banking, where you would do anything to keep yourself at the top of your game of building your social capital, you often peruse the feeds of your peers to determine the ideal time to piggyback on their boosts in online popularity.',
		'n They say you can only have 150 real friends but you have proven that the power of \'friendship\' you wield can fell a small nation',
		'n You are no stranger to the concept of bidding your likes, follows and shares low and winning big.',
		'p "Wendy is having her appendix pulled out? Totally uncool, looks like someone\'s stock is plummeting; Unfollow."',
		'p "Extrapolating from his recent musings on racecar beds and action figures, his recent move here and his dental samples after his yearly checkup, I can triangulate the places his parents have been to in the past 8 days and learnt that besides his father having a crippling addiction to castella cakes, he is going to have his 26th birthday at the Cheeser\'s at Madison avenue from 2pm to 4pm on a saturday because his mother\'s was called in by Wendy to cover for her shift because she was trying to get back at her for leaving early and making Tabatha do all the work. But really if Carlos hadn\'t been so sympathetic towards Abby then he would have cleared it up with Tabatha for her, but maybe Tabatha was just jumping on any chance to prove to Carlos that she had her own deal of troubles since she just doesn\'t understand that the commitment of her career because really she has been volatile since she had to quit her ballroom lessons."',
		'p " \'Congrats Noel, remember to lay off the cream puffs on your special day!\' I posted as I tagged him, believeing that it would be an effective way to boost my \'conscientious friend\' factor I meticulously cultivate as part of my persona."',
		'n Ding!',
		'n You hear a familiar jingle.',
		'p "Clarissa must be thanking me for the character skin I donated earlier during her sick day. I bet she is only being nice to me to make Richard jealous, but should I give her a laid back \'no problemo\' or an unassuming \'No problem\'?"',
		'n You find that it is instead an anonymous account with the handle, \'Bruce3434\'. \'Who\'s bruce\' You ask yourself.',
		'p "Who\'s bruce?"',
		'br "TODAY, YOU"',
		'n You quiver in your worn christmas jammies. \'What does that mean?\' you reckon',
		'p \"What does that mean?"',
		'n You log off for a while, to gather your bearings.',
		'n The next day, you groggily pick up your phone to check for any fluctuations in your MSV (MySpace Social value)',
		'n You are greeted with 80 pings, in several delectable varieties of',
		'n "Is this for real, dude?\'',
		'n \'Huh\' ',
		'n \'Way to go, wise guy.\' ',
		'n and the limited edition run of ',
		'n \'You were always a manipulative, unfeeling remora who preys on the courtesy of others, I don\'t hold grudges, but that\'s what I would call too far, dude.\'\"',
		'n On your feed, you find a single new post, a nauseating flurry of confessions, topped with a thumbnail of you, far from your finest moment.',
		'n It was about, no, you couldn\'t believe it yourself, but it was true, you did it. That was a dark period of your life and you thought managed to get off scot-free, but now everyone knows. Something so unutterable you hoped you\'d take it the grave with a sheepish smile, but now everyone knows. What if you family finds out, your little brother, the school?',
		'n But is this \'Bruce3434\' to blame? You couldn\'t have ran away forever.',
		{
			'Choice': {
				'evisceration': {
					'Text': 'Tell an adult',
					'Do': 'jump goodBoy'
				},
				'goldenGirls': {
					'Text': 'Hope it blows over and pretend like nothing has happened',
					'Do': 'jump goldenGirls'
				}
			}
		}
	],
	'goldenGirls': [
		'p "It\'ll just blow over and they will forget all about it. Though, I was really was hoping to build enough points with Mike to get invited to his bar mitzvah."',
		'n After several months had passed, the writers of this documentary have obtained access to a never-before-seen pulled episode of Zany Home Videos.',
		'host Welcome back to Zany Home Videos and we got a special entry this time, ladies and gentlemen, submitted by Timothy from the East Coast, called \'Boy has tea party with dumb-looking dolls.\'"',
		'show scene tea_party',
		'p "Beatrice, you have having way too many egg tarts, you do want Mr. Cuddles to acknowledge you as a fine woman don\'t you? Someone ought to put you on a diet!"',
		'p "Dorothy, I think it is impressive that you are taking your retirement plan into your own hands. We ought to stick together from those who look down on us."',
		'p "Would you like some more tea, Sophia?."',
		'n Crash! You tipped a plate onto the ground.',
		'p "Oh Sophia, you silly goose! Wa ha ha!"',
		'p "You guys are the best friends a guy can ask for"',
		'p "kk... heheheh... Ha ha ha ha."',
		'host Now I heard that\'s how the cookie crumbles, but this is ridiculous!"',
		'n The audience roars with laughter.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", -50);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", -50);
					return true;
				}
			}
		},
		'jump Tree'
	],
	'goodBoy': [
		'p "I will not let this get this better of me. Since my parents know what I have done, I have nothing to hide and they would be on my side."',
		'n You release a post apologising for your actions during \'the incident\' and that you wanted moved here to get a fresh start.',
		'n Afterwards, you decided to take a break from your account till emotions die down and you can find it in yourself to forgive yourself.',
		{
			"Function": {
				"Apply": function(){
					stat("social_credit_score", 50);
					return true;
				},
				"Reverse": function(){
					stat("social_credit_score", 50);
					return true;
				}
			}
		},
	],
});
