Array.prototype.shuffle = function () {
	let m = this.length,
		i;
	while (m) {
		i = (Math.random() * m--) >>> 0;
		[this[m], this[i]] = [this[i], this[m]];
	};
	return this;
};

Array.prototype.sample = function () {
	return this[Math.floor(Math.random() * this.length)];
};
let flashcards = [];
const wwiicards = [{
	"question": "an aerial battle fought in World War II in 1940 between the German Luftwaffe (air force), which carried out extensive bombing in Britain, and the British Royal Air Force, which offered successful resistance.",
	"answers": ["Battle of Britain", "Korematsu v United States", "Appeasement", "Anti-Semitism"],
	"correct": 0
}, {
	"question": "those countries fighting against the Axis powers. i.e. Britain, France, USA, Canada, USSR etc.",
	"answers": ["Allied Nations", "V-J Day", "Office of War Information", "Siege"],
	"correct": 0
}, {
	"question": "Japanese suicide pilots who loaded their planes with explosives and crashed them into American ships.",
	"answers": ["Kamikaze", "United Nations", "Dictator", "Fascism"],
	"correct": 0
}, {
	"question": "military blockade",
	"answers": ["Siege", "Erwin Rommel", "Dwight D. Eisenhower", "Concentration Camps"],
	"correct": 0
}, {
	"question": "helped resolve labor disputes that might slow down war production.",
	"answers": ["Office of Price Administration", "Death Camps", "Dwight D. Eisenhower", "National War Labor Board"],
	"correct": 3
}, {
	"question": "Wiping out an entire group of people",
	"answers": ["United Nations", "Disarmament", "Genocide", "Tuskegee Airmen"],
	"correct": 2
}, {
	"question": "Famous American General who fought in North Africa and Europe.",
	"answers": ["George Patton", "Mobilization", "Death Camps", "D-Day"],
	"correct": 0
}, {
	"question": "American general, who commanded allied troops in the Pacific during World War II.",
	"answers": ["Douglas MacArthur", "Joseph Stalin", "Manhattan Project", "Fascism"],
	"correct": 0
}, {
	"question": "1939; Britain and France could buy goods from the United States if they paid in full and transported them.",
	"answers": ["WACs", "Erwin Rommel", "Cash and Carry", "Allied Nations"],
	"correct": 2
}, {
	"question": "general secretary of the Communist Part of the Soviet Union, he led from 1922 until his death in 1953 and established a communist totalitarian state.",
	"answers": ["Joseph Stalin", "Totalitarian", "Office of War Information", "Battle of the Bulge"],
	"correct": 0
}, {
	"question": "American-born children of Japanese immigrants; second generation Japanese Americans.",
	"answers": ["United Nations", "Island Hopping", "Nisei", "Allied Nations"],
	"correct": 2
}, {
	"question": "policy by which Great Britain and France agreed to Germany's annexation of the Sudetenland in agreement for not taking any additional Czech territory.",
	"answers": ["Blitzkrieg", "Fair Employment Practices Commission", "Winston Churchill", "Appeasement"],
	"correct": 3
}, {
	"question": "1938 conference at which European leaders attempted to appease Hitler by turning over the Sudetenland to him in exchange for promise that Germany would not expand Germany's territory any further.",
	"answers": ["Battle of Britain", "Kamikaze", "Munich Conference", "Concentration Camps"],
	"correct": 2
}, {
	"question": "Official name for the Allied invasion of Normandy in June of 1944.",
	"answers": ["WACs", "Operation Overlord", "D-Day", "Code Talker"],
	"correct": 1
}, {
	"question": "33rd president of the United States. He assumed the presidency at the death of FDR in 1945 and served until 1953. Under his leadership the United States saw the end of the Second World War with the dropping of the two atomic bombs on Japan and also the establishment of the Truman Doctrine for foreign policy, which seeks to limit the spread of Communism.",
	"answers": ["Harry S. Truman", "The War Production Board", "Fascism", "Island Hopping"],
	"correct": 0
}, {
	"question": "Prime Minister of Japan during World War II.",
	"answers": ["Hideki Tojo", "Dictator", "Appeasement", "American First Committee"],
	"correct": 0
}, {
	"question": "Royal Air Force. (Britain's air force)",
	"answers": ["Harry S. Truman", "Operation Overlord", "Royal Air Force (RAF)", "Winston Churchill"],
	"correct": 2
}, {
	"question": "March 1941; act allowed America to sell, lend or lease arms or other supplies to nations considered \"vital\" to the defense of the United States.",
	"answers": ["Tuskegee Airmen", "Fair Employment Practices Commission", "Internment Camps", "Lend-Lease Act"],
	"correct": 3
}, {
	"question": "Organization created by isolationists who argued that the United States should keep out of Europe's business.",
	"answers": ["Bracero Program", "American First Committee", "Battle of the Bulge", "Appeasement"],
	"correct": 1
}, {
	"question": "US military base on Hawaii that was bombed by Japan on December 7, 1941, bringing the United States into World War II.",
	"answers": ["Annex", "Pearl Harbor", "Code Talker", "The War Production Board"],
	"correct": 1
}, {
	"question": "giving up military weapons",
	"answers": ["Winston Churchill", "Benito Mussolini", "Battle of Britain", "Disarmament"],
	"correct": 3
}, {
	"question": "Detention centers where more than 100,000 Japanese Americans were relocated during World War II by order of the President.",
	"answers": ["V-J Day", "Internment Camps", "American First Committee", "Douglas MacArthur"],
	"correct": 1
}, {
	"question": "set limits on consumer prices and rent to prevent inflation.",
	"answers": ["Office of Price Administration", "Nazism", "Potsdam Declaration", "Genocide"],
	"correct": 0
}, {
	"question": "the American navy attacked islands held by the Japanese in the Pacific Ocean. The capture of each successive island from the Japanese brought the American navy closer to an invasion of Japan.",
	"answers": ["Maginot Line", "Island Hopping", "WAVES", "Office of Price Administration"],
	"correct": 1
}, {
	"question": "Ultimatum from the Potsdam Conference that was issued by the United States, Great Britain and China to Japan offering that country the choice between unconditional surrender and total annihilation.",
	"answers": ["United Nations", "Dwight D. Eisenhower", "Potsdam Declaration", "WACs"],
	"correct": 2
}, {
	"question": "established by the government to promote patriotism and help keep Americans united behind the war effort.",
	"answers": ["Office of War Information", "Fascism", "Korematsu v United States", "Erwin Rommel"],
	"correct": 0
}, {
	"question": "Originally designed to avoid American involvement in World War II by preventing loans to those countries taking part in the conflict; modified in 1939 to allow aid to the Allies",
	"answers": ["Holocaust", "Neutrality Acts", "Cash and Carry", "Internment Camps"],
	"correct": 1
}, {
	"question": "April 1942, American soldiers were forced to march 65 miles to prison camps by their Japanese captors. It is called the Death March because so many of the prisoners died en route.",
	"answers": ["Revenue Act of 1942", "Office of War Information", "Bataan Death March", "Bracero Program"],
	"correct": 2
}, {
	"question": "prison camps used under the rule of Hitler in Nazi Germany. Conditions were inhuman, and prisoners were generally starved or worked to death, or killed immediately.",
	"answers": ["Disarmament", "Manhattan Project", "Bracero Program", "Concentration Camps"],
	"correct": 3
}, {
	"question": "camps used under the rule of Hitler in Nazi Germany for the purpose of killing prisoners immediately.",
	"answers": ["Harry S. Truman", "Potsdam Declaration", "Battle of Britain", "Death Camps"],
	"correct": 3
}, {
	"question": "established legal basis in Nazi Germany for discrimination against Jews.",
	"answers": ["Korematsu v United States", "Nuremberg Laws", "George Patton", "Royal Air Force (RAF)"],
	"correct": 1
}, {
	"question": "Women's Army Corps",
	"answers": ["WACs", "Adolf Hitler", "Bracero Program", "Holocaust"],
	"correct": 0
}, {
	"question": "the 32nd president of the United States. He was president from 1933 until his death in 1945 during both the Great Depression and World War II. He is the only president to have been elected 4 times, a feat no longer permissible due to the 22nd Amendment to the Constitution.",
	"answers": ["Cash and Carry", "Franklin Delano Roosevelt", "Royal Air Force (RAF)", "Civil Defense"],
	"correct": 1
}, {
	"question": "the gathering of resources and preparation for war.",
	"answers": ["Bataan Death March", "Potsdam Declaration", "Anti-Semitism", "Mobilization"],
	"correct": 3
}, {
	"question": "the systematic extermination of millions of European Jews, as well as Roma, Slavs, intellectuals, homosexuals, and political dissidents, by the Nazis and their allies during World War II.",
	"answers": ["Allied Nations", "Blitzkrieg", "Holocaust", "Nuremberg Laws"],
	"correct": 2
}, {
	"question": "String of steel and concrete bunkers along the German border from Belgium to Switzerland set up by the British and French",
	"answers": ["George Patton", "Death Camps", "Maginot Line", "Manhattan Project"],
	"correct": 2
}, {
	"question": "policies, views, or actions that harm or discriminate against Jews",
	"answers": ["Erwin Rommel", "Siege", "Anti-Semitism", "Civil Defense"],
	"correct": 2
}, {
	"question": "Victory over Japan, September 2, 1945",
	"answers": ["V-J Day", "Dwight D. Eisenhower", "Nisei", "WACs"],
	"correct": 0
}, {
	"question": "Victory in Europe, May 8, 1945",
	"answers": ["Office of Price Administration", "Death Camps", "United Nations", "V-E Day"],
	"correct": 3
}, {
	"question": "Advertising campaign character who encouraged women to take factory jobs.",
	"answers": ["Royal Air Force (RAF)", "Rosie the Riveter", "Franklin Delano Roosevelt", "WAVES"],
	"correct": 1
}, {
	"question": "Leader of the Nazi Party and the Third Reich in Germany during World War II.",
	"answers": ["Island Hopping", "Erwin Rommel", "Lend-Lease Act", "Adolf Hitler"],
	"correct": 3
}, {
	"question": "Political leader who rules a country with absolute power, usually by force",
	"answers": ["Royal Air Force (RAF)", "Neville Chamberlain", "Dictator", "Korematsu v United States"],
	"correct": 2
}, {
	"question": "established to combat discrimination in industries that held government contracts.",
	"answers": ["Siege", "Fair Employment Practices Commission", "Axis Powers", "Magic"],
	"correct": 1
}, {
	"question": "Prime minister of Great Britain from 1940-1945 and again 1951-1955.",
	"answers": ["Winston Churchill", "Manhattan Project", "Douglas MacArthur", "Blitzkrieg"],
	"correct": 0
}, {
	"question": "head of the Italian Fascist party. Mussolini was known as El Duce and was leader of Italy, the first Fascist regime, during World War II.",
	"answers": ["V-E Day", "Benito Mussolini", "Fair Employment Practices Commission", "Franklin Delano Roosevelt"],
	"correct": 1
}, {
	"question": "the Leader; Benito Mussolini",
	"answers": ["IL Duce", "Bataan Death March", "Pearl Harbor", "Anti-Semitism"],
	"correct": 0
}, {
	"question": "German lightning warfare.",
	"answers": ["Blitzkrieg", "Concentration Camps", "Civil Defense", "Disarmament"],
	"correct": 0
}, {
	"question": "1939 agreement between Germany and the Soviet Union. The two nations agreed not to attack one another and to split the country of Poland between them.",
	"answers": ["Cash and Carry", "Anti-Semitism", "Korematsu v United States", "Soviet-German Non-Aggression Pact"],
	"correct": 3
}, {
	"question": "raised corporation taxes and required nearly all Americans to pay income taxes.",
	"answers": ["Revenue Act of 1942", "National War Labor Board", "Atlantic Charter", "V-J Day"],
	"correct": 0
}, {
	"question": "supervised the conversion of industries to war production. For example, automakers shifted from making cars to trucks and tanks.",
	"answers": ["Death Camps", "WACs", "Operation Overlord", "The War Production Board"],
	"correct": 3
}, {
	"question": "332 Fighter Group famous for shooting down over 200 enemy planes. African American pilots who trained at the Tuskegee flying school.",
	"answers": ["Disarmament", "Tuskegee Airmen", "Axis Powers", "United Nations"],
	"correct": 1
}, {
	"question": "Code name for the U.S. effort during World War II to produce the atomic bomb.",
	"answers": ["Blitzkrieg", "Fair Employment Practices Commission", "Atlantic Charter", "Manhattan Project"],
	"correct": 3
}, {
	"question": "the actions following the German offensive through the Ardennes forests in December 1944.",
	"answers": ["Mobilization", "Hideki Tojo", "Battle of the Bulge", "Nazism"],
	"correct": 2
}, {
	"question": "(Day of Days) June 6, 1944; Allied forces landed in Normandy, France to begin a massive offensive against the Germans in the occupied territory of Europe.",
	"answers": ["Nazism", "Tuskegee Airmen", "National War Labor Board", "D-Day"],
	"correct": 3
}, {
	"question": "Special code based on the Navajo language used to send messages during WWII. The Japanese never broke the code.",
	"answers": ["Korematsu v United States", "The War Production Board", "Code Talker", "Axis Powers"],
	"correct": 2
}, {
	"question": "any movement, ideology, or attitude that favors dictatorial government, centralized control of private enterprise, repression of all opposition, and extreme nationalism",
	"answers": ["Bataan Death March", "Fascism", "Siege", "Battle of the Bulge"],
	"correct": 1
}, {
	"question": "British-American declaration that stated the countries aims for the outcome of the war. Stated people of every nation should be free to choose their own form of government and live free of fear and want, disarmament, and a permanent system of general security.",
	"answers": ["Atlantic Charter", "Death Camps", "Holocaust", "Douglas MacArthur"],
	"correct": 0
}, {
	"question": "Prime Minister of Great Britain from -1940; famous for appeasing Hitler at the Munich Conference.",
	"answers": ["Revenue Act of 1942", "Neville Chamberlain", "Siege", "Nuremberg Laws"],
	"correct": 1
}, {
	"question": "Code name for U.S. code-breaking operations against the Japanese.",
	"answers": ["Rosie the Riveter", "Hideki Tojo", "Magic", "Revenue Act of 1942"],
	"correct": 2
}, {
	"question": "American General who began in North Africa and became the Commander of Allied forces in Europe.",
	"answers": ["Dwight D. Eisenhower", "Genocide", "Winston Churchill", "Office of War Information"],
	"correct": 0
}, {
	"question": "Women Appointed for Volunteer Emergency Service in the Navy",
	"answers": ["Office of Price Administration", "Manhattan Project", "WAVES", "American First Committee"],
	"correct": 2
}, {
	"question": "Taking items that are in short supply and distributing them according to a system. For instance, during World War II, gas, sugar, and butter were a few of the items rationed in the United States.",
	"answers": ["Disarmament", "Office of War Information", "Rationing", "Code Talker"],
	"correct": 2
}, {
	"question": "Process by which a government gains control over a territory not presently under their jurisdiction. It usually involves either conquest or the use of force. ( for example: Germany annexed the Rhineland, Austria, Sudetenland, Czechoslovakia and Poland.)",
	"answers": ["Office of Price Administration", "Atlantic Charter", "Lend-Lease Act", "Annex"],
	"correct": 3
}, {
	"question": "United States labor agents recruited thousands of farm and railroad workers from Mexico. The program stimulated emigration from Mexico.",
	"answers": ["Bracero Program", "Nuremberg Laws", "Genocide", "Totalitarian"],
	"correct": 0
}, {
	"question": "a single party and leader who suppress all opposition and control all aspects of people's lives",
	"answers": ["Dictator", "Totalitarian", "IL Duce", "Munich Conference"],
	"correct": 1
}, {
	"question": "The Desert Fox. Commander of the Axis forces in North Africa.",
	"answers": ["Manhattan Project", "Erwin Rommel", "Adolf Hitler", "Office of Price Administration"],
	"correct": 1
}, {
	"question": "Japan, Germany and Italy",
	"answers": ["Royal Air Force (RAF)", "Axis Powers", "Office of Price Administration", "The War Production Board"],
	"correct": 1
}, {
	"question": "1944 Supreme Court case where the Supreme Court upheld the order providing for the relocation of Japanese Americans.",
	"answers": ["Blitzkrieg", "Benito Mussolini", "IL Duce", "Korematsu v United States"],
	"correct": 3
}, {
	"question": "The doctrines of nationalism, racial purity, anti-Communism, and the all-powerful role of the State. The National Socialist German Workers Party, otherwise known as the Nazi Party.",
	"answers": ["Rosie the Riveter", "Blitzkrieg", "Nazism", "WAVES"],
	"correct": 2
}, {
	"question": "organization founded after World War II to promote international peace and cooperation.",
	"answers": ["United Nations", "Appeasement", "Code Talker", "Bataan Death March"],
	"correct": 0
}, {
	"question": "protective measures in case of attack. (For example, during WWII volunteers scanned the skies for enemy aircraft and coastal cities enforced blackouts)",
	"answers": ["Civil Defense", "IL Duce", "Pearl Harbor", "Battle of the Bulge"],
	"correct": 0
}];
for (card of wwiicards) flashcards.push(card);
for (let card of flashcards) {
	let correct = card.answers[card.correct];
	card.answers.shuffle();
	card.correct = card.answers.indexOf(correct);

};
flashcards.shuffle();
