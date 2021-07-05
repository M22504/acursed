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
		name: '@Vaudeville_Margarine',
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
	'Simp1A': [
		'show character simp mald at left with bounceIn end-fadeOut',
		'simp \"@{{player.name}} I don\'t get it. If your a single male and nice to a female, your automatically a simp',
		'show character simp mald2 at left with headShake end-fadeOut',
		'simp \"however if you already have a girlfriend, but do the exact same thing, you\'re therefore exempt from the simp title',
		'show character simp mald3 at left with shakeY end-fadeOut',
		'simp \"Why do people keep labelling me a simp for being nice to people',
		'show character simp mald4 at left with wobble end-fadeOut',
		'simp \"Its general decency to be nice to people\"',
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
	]
});
