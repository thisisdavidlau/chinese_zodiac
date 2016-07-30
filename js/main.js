//OBJECT ALL 12 ANIMALS
var zodiac = [
	{
		img: "img/rat.png",
		animal: "Rat",
		personality: "They are instinctive, acute and alert in nature which makes them to be brilliant businessmen. They can always react properly before the worst circumstances take place. They are also sophisticated and popular in social interaction. They are sanguine and very adaptable, being popular with others.",
	},

	{
		img: "img/ox.png",
		animal: "Ox",
		personality: "Ranking second in Chinese zodiacal signs, the Ox is huge. People often use it to indicate something big in size or number. People with this sign bear persistent, simple, honest, and straightforward characteristics. They are talent leaders with strong faith, and strong devotion to work. They are contemplative before taking actions, not easily affected by the surroundings but just follow their concept and ability. Being conservative with a lack of wit in speaking, they usually look silent and sometimes stubborn in their old ways.",
	},

	{
		img: "img/tiger.png",
		animal: "Tiger",
		personality: "In most cases, they are powerful, independent, confident and brave. They have strong sense of errantry, being frank and easy to win others' trust. In their middle age, their fate may be uneven, but after hardships, they will enjoy a bright prospect. While they are also likely to be dogmatic, and like showing off when accomplishing something.",
	},

	{
		img: "img/rabbit.png",
		animal: "Rabbit",
		personality: "People with Rabbit sign usually impress others with an image of tenderness, grace and sensitive. They are romantic in relationship, having a high demand in life quality. They avoid arguing with others, and have a capability of converting an enemy into a friend. They are homebody and hospitable, and like house fitting-up. They can work with speed and efficiency, do not insist and get angry easily. But they also like hesitating, which makes them lose many chances.",
	},

	{
		img: "img/dragon.png",
		animal: "Dragon",
		personality: "They are usually a group of people who are lively, intellectual and excitable. They can clearly tell right from wrong. They are upright and frank. However, they are also a bit arrogant and impatient. Female Dragons tend to be overly confident. They hate hypocrisy, gossip and slander. They are not afraid of difficulties but hate to be used or controlled by others.",
	},

	{
		img: "img/snake.png",
		animal: "Snake",
		personality: "Usually, people regard snake as a cunning and sly animal, which likes hanging out in darkness. In fact, this animal is also a symbol of wisdom and wit. Therefore, people in this sign are calm, sensitive and humorous, and most of them are gifted in literature and art, such as Goethe and Picasso. Suspicion is their weakness, which makes them hesitant and a bit paranoid.",
	},

	{
		img: "img/horse.png",
		animal: "Horse",
		personality: "They always impress upon people with dynamic, zealous and generous image. Although endowed with many shinning points, they have to face the weaknesses in their characteristics.",
	},

	{
		img: "img/sheep.png",
		animal: "Sheep",
		personality: "People born in the Year of Sheep are tender, polite, filial, clever, and kind-hearted. They have special sensitivity to art and beauty and a special fondness for quiet living. They are wise, gentle and compassionate and can cope with business cautiously and circumspectly. In their daily life, they try to be economical. They are willing to take good care of others, but they should avoid pessimism and hesitation.",
	},

	{
		img: "img/monkey.png",
		animal: "Monkey",
		personality: "The general image of people in this zodiac sign is of always being smart, clever and intelligent, especially in their career and wealth. They are lively, flexible, quick-witted and versatile. In addition, their gentleness and honesty bring them an everlasting love life. Although they were born with enviable skills, they still have several shortcomings, such as an impetuous temper and a tendency to look down upon others.",
	},

	{
		img: "img/rooster.png",
		animal: "Rooster",
		personality: "People born in the Year of Rooster according to Chinese zodiac have many excellent characteristics, such as being honest, bright, communicative and ambitious. Most of them are born pretty or handsome, and prefer to dress up. In daily life, they seldom rely on others. However, they might be enthusiastic about something quickly, but soon be impassive. Thus, they need to have enough faiths and patience to insist on one thing.",
	},

	{
		img: "img/dog.png",
		animal: "Dog",
		personality: "People born in the Year of the Dog are usually independent, sincere, loyal and decisive according to Chinese zodiac analysis. They are not afraid of difficulties in daily life. These shining characteristics make them have harmonious relationship with people around.",
	},

	{
		img: "img/pig.png",
		animal: "Pig",
		personality: "People with this zodiac sign are considerate, responsible, independent and optimistic. They always show generousness and mercy to endure other people’s mistakes, which help them gain harmonious interpersonal relationship. However, sometimes they would behave lazy and lack actions. In addition, pure hearts would let them be cheated easily in daily life.",
	}
]


//WHEN BUTTON IS CLICKED, DO THIS
function getInfo() {

//STARTING YEAR BENCHMARK
var start = 1901
//BIRTHYEAR INPUT TURNED INTO A VALUE
var birthyear = document.getElementById('year').value

	//EQUATION FOR EVERY 12 YEAR INPUT
	x = (start - birthyear) % 12

	//RAT
	if (x == 1 || x == -11) {
		value = zodiac[0].animal;
	}
	//OX
	if (x == 0) {
		value = zodiac[1].animal;
	}
	//TIGER
	if (x == 11 || x == -1) {
		value = zodiac[2].animal;
	}
	//RABBIT
	if (x == 10 || x == -2) {
		value = zodiac[3].animal;
	}
	//DRAGON
	if (x == 9 || x == -3) {
		value = zodiac[4].animal;
	}
	//SNAKE
	if (x == 8 || x == -4) {
		value = zodiac[5].animal;
	}
	//SHEEP
	if (x == 7 || x == -5) {
		value = zodiac[6].animal;
	}
	//HORSE
	if (x == 6 || x == -6) {
		value = zodiac[7].animal;
	}
	//MONKEY
	if (x == 5 || x == -7) {
		value = zodiac[8].animal;
	}
	//ROOSTER
	if (x == 4 || x == -8) {
		value = zodiac[9].animal;
	}
	//DOG
	if (x == 3 || x == -9) {
		value = zodiac[10].animal;
	}
	//PIG
	if (x == 2 || x == -10) {
		value = zodiac[11].animal;
	}  


//FOR LOOP TO TARGET ZODIAC-OBJECT ARRAY
for (i = 0; i<zodiac.length; i++)
	if (value == zodiac[i].animal) {
		document.getElementById('title').innerHTML = "You were born in the year of the "  + "<br>" + "<span>" + zodiac[i].animal + "!</span>"
		document.getElementById('img').src = zodiac[i].img
		document.getElementById('description').innerHTML = zodiac[i].personality
		document.getElementById('description').className += " desc";

	}else if (birthyear == '') {//DO NOTHING IF BUTTON CLICKED WHEN TEXTBOX IS BLANK
		return false
	}
			
}

//WHEN ENTER KEY IS PRESSED, RUN BUTTON ONCLICK (NOT FUNCTIONAL YET)
function keyUp() {
	if (event.keycode == 13) {
		document.getElementById("button").click();
	}
}







