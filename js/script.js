
/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Intro':{
		title: 'Placeholder Title',
		subtitle: '',
		body:'Please use Menti to allow students to vote for their options of choice.'
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

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'main_bedroom' : 'gamer_bedroom.jpg',
	'simp' : 'simp_background.jpg',
	'antivax' : "antivax_background.jpg"
});


// Define the Characters
monogatari.characters ({
	'n': {
		name: 'The Narrator',
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
		name: '@__sad.and.lonely__',
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
		name: '@i_hv_3_kids_in_my_bsmnt',
		color: '#9933ff',
		directory: 'vaxxer',
		sprites: {
			normal: "vaxxer.png"
		}
	},
	'av' : {
		name: '@evelynski',
		color: '#006699',
		directory: 'antivaxxer',
		sprites: {
			normal: "antivaxxer.png"
		}
	},
	'nipah' : {
		name: '???',
		color: '#ffffff',
	},
	'br' : {
		name: 'Bruce',
		color: '#0e0e0e',
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
					return input.trim ().length > 0;
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

		{
			'Choice': {
				'Dialog': 'n What do you want to do?',
				'Vidya': {
					'Text': 'Play Video Games',
					'Do': 'jump Vidya'
				},
				'Twitter': {
					'Text': 'Browse Twitter',
					'Do': 'jump Twit'
				},
				'Video': {
					'Text': 'Stream the Tube',
					'Do': 'jump Video'
				},
				'CruiseControl': {
					'Text': 'test',
					'Do': 'jump CruiseControl',
				}
			}
		}
	],

	'Vidya': [
		'n Wow! You really are a degenerate huh?',
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
		'n You boot up your computer and open Steam.',
		'end'
	],
	'Video': [
		"n You decide to idly browse some videos. You often enjoy the DIY-aesthetic embodied by channels of small time content-creators and independent journalists.",
		"n You take pride in stumbling upon oddities that would never see the light of day on mainstream media outlets. You'd even call yourself a connoisseur in esoteric media.",
		"n You find a strange looking video entitled 'ESOPHAGATION.AVI'",
		"n You pull the blinders.",
		'show video esophagation fullscreen',
		"n What a hack.",
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
		"jump Start"
	],

	'Twit': [
		'n You open Twitter on your phone and begin mindlessly scrolling',
		'next',
		'show image twitter1.png at bottom with fadeIn',
		'n You scroll for a bit before encountering a post which catches your eye',
		'show background simp with fadeIn',
		'p Oh, look at this guy.',
		'show character simp normal at left with slideInLeft end-fadeOut',
		'simp \"Just donated $300 dollars to @pokimane on her stream just now and she didn\'t read out my Twitch username. Honestly baffled and saddened.\"',
		'p Wow, seriously?',
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
	'' : [

	],

	'Simp1A': [
		'show character simp mald at left with bounceIn end-fadeOut',
		"simp \"@{{player.name}} If exercising basic courtesy to a female makes you a simp, then yeah, I'm a simp\"",
		'show character simp mald2 at left with headShake end-fadeOut',
		'simp \"But of course if you already have a girlfriend, you\'re therefore exempt from the simp title\"',
		'show character simp mald3 at left with shakeY end-fadeOut\"',
		'simp \"Why do people keep labelling me a simp for being nice to people\"',
		'show character simp mald4 at left with wobble end-fadeOut',
		'simp \"Its general decency to stand for what one deserves. I do not wish to pick a fight, but it seems you are ' +
		'mistaken on the nuances of this conundrum. In fact, I don\'t know where this aggression is coming from, i\'d like to implore you ' +
		'to understand my position. Similar to how doctors and pharma in general generate money for the goods and services they provide, there\'s the implicit ' +
		'expectation that the streamer should give back to their fans who landed them that far ahead by giving them their due gratitude. It\'s this exploitation ' +
		'of viewers is what\'s ruining the community. I miss the good old days when streamers stood up to their fans.' +
		'I really just want everyone to do want everyone to get along.\"',
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
					'Text': '\"Imagine being such a miserably troglodyte, wasting away spending your time oggling women who make a living flaunting their beings on the internet, who leech of individuals like you who shamelessly leech off those around you to fund your unhealthy addictions. Sad!\"',
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
		'simp \"@{{player.name}} im literally sitting here on the verge of tears',
		'show character simp sad2 at left with bounceIn end-fadeOut',
		'simp \"slaving away in this dead end job saving up for the end of the month splash ',
		'show character simp sad3 at left with shakeX end-fadeOut',
		'simp \"maybe i shouldve done that overtime, if i could get her tha moeny earlier i might have been able to convince her in the dono message\"',
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
					'Text': '\"Chin up, pals before gals.\"',
					'Do': 'jump Simp2D'
				}
			}
		}
	],
	'Simp1C': [
		'hide character simp with slideOutLeft',
		'n What, did you expect your casual misogyny to be deemed socially acceptable as you provided a man with a false sense of comfort?',
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
		'n How condenscending of you.',
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
		'n You should\'ve ...',
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
		'show character simp kalm at left with slideInLeft',
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
		'n You continue scrolling Twitter, inadequatedly absorbing the near endless stream of information being present to you.',
		'n An online discourse piques your interest.',
		'show background antivax with fadeIn',
		'p Ouh, what\'s this?',
		'show character av normal at left with slideInLeft end-fadeOut',
		'av I don\'t know why the government keeps telling us to get the dangerous COVID-19 #vaccine. I won\'t risk my life or my children\'s life for them to inject microchips into us. They think they can fabricate a disease and fool us? If my children fall sick, I will heal them with essential oils instead.',
		'show character v normal at right with slideInRight end-fadeOut',
		'v Not only are you letting yourself and your children potentially die, as an undeducated clown you are also endangering the rest of mankind. People like you should shut their trap and learn how to read a book before sharing your inane opinions to the rest of the world',
		'p Wow, how shockingly relevant.',
		'n You decide to chip in your opinion.',
		{
			'Choice': {
				'Dialog': 'n What do you want to say?',
				'Simp1A': {
					'Text': '"@i_hv_3_kids_in_my_bsmnt I agree fully! @evelynski Get utterly destroyed by facts and logic, they don\'t care about your feelings."',
					'Do': 'jump AV1A'
				},
				'Simp1B': {
					'Text': '"@i_hv_3_kids_in_my_bsmnt although your opinion may be correct, I feel like your tone of speech and general demeanour was wholly inappropriate.  @evelynski please seek a proper education."',
					'Do': 'jump AV1B'
				},
				'Simp1C': {
					'Text': '\"Chin up, pals before gals.\"',
					'Do': 'jump Simp2D'
				}
			}
		}
	],
	'AV1A': [
		'n I feel like the attached images of Ben Shapiro were very unnecessary.',
		'av @{{player.name}} @i_hv_3_kids_in_my_bsmnt Look at you government shills, promoting these falsehoods. So disrespectful too!',
		'av This only solidifies that the #vaccine is turning our people into mindless zombies that the government can control to make more of them, just like Alex Jones said!'
	],
	'CruiseControl': [
		'n With the recent devestation caused by the Los Alamos Tsunami crisis, you browse the twitter feeds of the celebrities to gauge whether they are sorry enough for the victims.',
		'n You find that Tom Cruise vowed to shave his head to show solidarity.',
		"p \"I've always liked the Mission Impossible 1, 2, 3, 4, 5 and 7, though they are really starting to milk the franchise.\" ",
		"n Spersed within his tweets of prayers and salisbury steaks, were strange landscapes supposedly from his pilgrimage to the Ethiopian alps. He preaches about the power Scientology grants to its followers.",
		"n You feel a chill crawling down your back. You pull the blinders.",
		"p \"This is Scientology? Scientology will make me be in control?\" you mutter to yourself.",
		"n An itch crawls up your throat, with the insatiable urge to tear it off.",
		"n But then a bright irradiance enveloped the room, and you hear a soft voice incessantly apologising.",
		"nipah \"I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry.\"",
		"nipah \"It's my fault.\"",
		"p \"When I accidentally stepped on that stray's tail?\" ",
		"nipah \"It's my fault.\"",
		"p \"When I left my toilet seat up and Mom got really mad?\" ",
		"nipah \"It's my fault.\"",
		"p When Kennedy was shot despite being covered for by the well-trained well-armed American's finest Kennedy Motorcade?",
		"nipah \"That was the work of CIA\"",
		"nipah \"You wouldn't be here, huddled in this crawl space toiling away in front your screens. You could be a part of something greater than yourself. Come on now, young disciple. \"",
		{
			'Choice': {
				'Dialog': 'n Will you accept the responsiblity bestowed upon your existance, and become indoctrinated with one of them?',
				'Simp1B': {
					'Text': '',
					'Do': 'jump evisceration'
				},
				'Simp1C': {
					'Text': '"Do not let yourself get consumed by radicalisation attempts through online interactions."',
					'Do': 'jump Simp2D'
				}
			}
		}
	],
	'evisceration': [
		'nipah \"Well done. You must take the first step on your rite of passage.\"',
		'p \"I will show my commitment\"',
		'nipah \"You know what you must do, don\'t you?\"'
		'end'
	],
	'goodEnd': [
		'p \"Big giant magical orb, I will not let myself be suaded by your words. If you are the salvation I seek then be it so that I refute your offerings for the salvation I seek is not of forgiveness but atonement, where I am not bound by the sins I shlep but rather chased the objects of my torment to a brisk walk."',
		'nipah \"Very well, but you must prepare for the consequences. 20 more \'Mission Impossible\'s featuring Sally Struthers from Full House with the lead role.\"',
		'p \"I thought she was dead.\"',
		'nipah \"She is, the living dead.\"',
		'jump start',
		'end'
	],
	'cromartie': [
		'n You check your MySpace',
		'n As a wolf of Myspace investment banking, where you would do anything to keep yourself at the top of your game of building your social capital, you often peruse the feeds of your peers to determine the ideal time to piggyback on their boosts in online popularity.',
		'n They say you can only have 150 real friends but you have proven that the power of \'friendship\' you wield can fell a small nation'
		'n You are no stranger to the concept of bidding your likes, follows and shares low and winning big.',
		'p \"Wendy is having her appendix pulled out? Totally uncool, looks like someone\'s stock is plummeting; Unfollow.\"',
		'p \"Extrapolating from his recent musings on racecar beds and action figures, his recent move here and his dental samples after his yearly checkup, I can triangulate the places his parents have been to in the past 8 days and learnt that besides his father having a crippling addiction to castella cakes, he is going to have his 26th birthday at the Cheeser\'s at Madison avenue from 2pm to 4pm on a saturday because his mother\'s was called in by Wendy to cover for her shift because she was trying to get back at her for leaving early and making Tamatha do all the work. But really if Carlos hadn\'t been so sympathetic towards Abby then he would have cleared it up with Tamatha for her, but maybe Tamatha was just jumping on any chance to prove to Carlos that she had her own deal of troubles because she just doesn\'t understand that the group dynamics of her profession because really she has been volatile since the day she picked up work.',
		'p " \'Congrats Noel, remember to lay off the cream puffs on your special day!\' I posted as I tagged him, believeing that it would be an effective way to boost my \'conscientious friend\' factor I meticulously cultivate as part of my persona."',
		'n Ding!',
		'n You hear a familiar jingle.',
		'p \"Clarissa must be thanking me for the character skin I donated earlier during her sick day. I bet she is only being nice to me to make Richard jealous, but should I give her a laid back \'no problemo\' or an unassuming \'No problem\'?\"',
		'n You find that it is instead an anonymous account with the handle, \'Bruce3434\'. \'Who\'s bruce\' You ask yourself.',
		'p \"Who\'s bruce?"',
		'br \"Today, you."',
		'n \"You quiver in your worn christmas jammies. \'What does it mean\' you reckon"',
		'p \"What does that mean?"',
		'n \"You log off for a while, to gather your bearings."',
		'n \"The next day, you groggily pick up your phone to check for any fluctuations in your MSV (MySpace Social value)"',
		'n \"You are greeted with 80 pings, in several delectable varieties of',
		'n "Is this for real, dude?\'',
		'n \'Huh\' ',
		'n \'Way to go, wise guy.\' ',
		'n and the limited edition run of ',
		'n \'You were always a manipulative, unfeeling remora who preys on the courtesy of others, I don\'t hold grudges, but that\'s what I would call too far, dude.\'\"',
		'n On your feed, you find a single new post, a nauseating flurry of words, topped with a thumbnail of you, far from your finest moment.',
		'n It was about, no, you couldn\'t believe it yourself, but it was true, you did it. That was a dark period of your life and you thought managed to get off scot-free, but now everyone knows. Something so unutterable you hoped you\'d take it the grave with a sheepish smile, but now everyone knows. What if you family finds out, your little brother, the school?',
		'n But you can\'t blame Bruce, can you? For you never thought that you should be forgived for what you had done. '

	],
	'dolls': [
		'p "I\'ll just blow over and they will forget all about it. I really was hoping to build enough points with Mike to get invited to his bar mitzvah."'
		'n But it did not just blow over. Several months passed and for the audience we have secured the rights to a pulled episode of Funny Home Videos',
		'n ',
	]
});
