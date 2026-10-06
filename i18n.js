// ॐ Yadav Group & Personal Tuition: language switcher (English / ગુજરાતી / हिंदी)
//
// How it works:
// - The pages are written in English. Every piece of text is looked up in the
//   TRANSLATIONS table below and swapped for Gujarati or Hindi.
// - The chosen language is remembered, so every page opens in it.
// - Form values are always sent in English, so the admin panel stays in English.
// - Text that appears later (for example "Sending…" or a success message) is
//   translated automatically as well.
//
// To fix or improve a translation, edit its line below:
//   "English text": ["Gujarati", "Hindi"],

(function () {
    const LANGS = ["en", "gu", "hi"];
    const COLUMN = { gu: 0, hi: 1 };
    const STORAGE_KEY = "oyt_language";

    const TRANSLATIONS = {
    "Yadav": ["યાદવ", "यादव"],
    "Group & Personal Tuition": ["ગ્રુપ & પર્સનલ ટ્યુશન", "ग्रुप & पर्सनल ट्यूशन"],
    "Home": ["હોમ", "होम"],
    "About": ["અમારા વિશે", "हमारे बारे में"],
    "Courses": ["કોર્સ", "कोर्स"],
    "Batches & Pricing": ["બેચ અને ફી", "बैच और फीस"],
    "Home Tuition": ["હોમ ટ્યુશન", "होम ट्यूशन"],
    "Contact": ["સંપર્ક", "संपर्क"],
    "Call now": ["હમણાં ફોન કરો", "अभी कॉल करें"],
    "Menu": ["મેનુ", "मेनू"],
    "Close": ["બંધ કરો", "बंद करें"],
    "Offline in Gandhinagar / Online anywhere": ["ગાંધીનગરમાં ઓફલાઇન / ગમે ત્યાંથી ઓનલાઇન", "गांधीनगर में ऑफलाइन / कहीं से भी ऑनलाइन"],
    "Std. 1 to 10 all subjects, and Std. 11, 12 Chemistry for Boards, NIOS, JEE, NEET and GUJCET. English and Gujarati medium.": ["ધો. 1 થી 10 બધા વિષયો, અને ધો. 11, 12 કેમિસ્ટ્રી – બોર્ડ, NIOS, JEE, NEET અને GUJCET માટે. અંગ્રેજી અને ગુજરાતી માધ્યમ.", "कक्षा 1 से 10 सभी विषय, और कक्षा 11, 12 केमिस्ट्री – बोर्ड, NIOS, JEE, NEET और GUJCET के लिए। अंग्रेज़ी और गुजराती माध्यम।"],
    "Call 63533 04069": ["63533 04069 પર ફોન કરો", "63533 04069 पर कॉल करें"],
    "Book a demo class": ["ડેમો ક્લાસ બુક કરો", "डेमो क्लास बुक करें"],
    "OUR TEACHERS": ["અમારા શિક્ષકો", "हमारे शिक्षक"],
    "Experienced teachers, personal attention": ["અનુભવી શિક્ષકો, વ્યક્તિગત ધ્યાન", "अनुभवी शिक्षक, व्यक्तिगत ध्यान"],
    "Heena Yadav": ["હીના યાદવ", "हीना यादव"],
    "20 years of teaching experience": ["20 વર્ષનો શિક્ષણ અનુભવ", "20 वर्षों का शिक्षण अनुभव"],
    "Std. 1 to 10, all subjects": ["ધો. 1 થી 10, બધા વિષયો", "कक्षा 1 से 10, सभी विषय"],
    "Strong foundations in every subject, with regular practice, revision and exam preparation.": ["નિયમિત પ્રેક્ટિસ, પુનરાવર્તન અને પરીક્ષાની તૈયારી સાથે દરેક વિષયમાં મજબૂત પાયો.", "नियमित अभ्यास, दोहराई और परीक्षा की तैयारी के साथ हर विषय में मज़बूत नींव।"],
    "Std. 1–10": ["ધો. 1–10", "कक्षा 1–10"],
    "All subjects": ["બધા વિષયો", "सभी विषय"],
    "English & Gujarati medium": ["અંગ્રેજી અને ગુજરાતી માધ્યમ", "अंग्रेज़ी और गुजराती माध्यम"],
    "Pradyuman Yadav": ["પ્રદ્યુમન યાદવ", "प्रद्युमन यादव"],
    "30 years of teaching experience": ["30 વર્ષનો શિક્ષણ અનુભવ", "30 वर्षों का शिक्षण अनुभव"],
    "Std. 11, 12 Chemistry": ["ધો. 11, 12 કેમિસ્ટ્રી", "कक्षा 11, 12 केमिस्ट्री"],
    "Chemistry for board exams and entrance exams, from concepts to problem practice.": ["બોર્ડ અને પ્રવેશ પરીક્ષાઓ માટે કેમિસ્ટ્રી – કન્સેપ્ટથી લઈને દાખલાઓની પ્રેક્ટિસ સુધી.", "बोर्ड और प्रवेश परीक्षाओं के लिए केमिस्ट्री – कॉन्सेप्ट से लेकर प्रश्नों के अभ्यास तक।"],
    "Boards": ["બોર્ડ", "बोर्ड"],
    "OUR APPROACH": ["અમારી પદ્ધતિ", "हमारा तरीका"],
    "Coaching That Focuses On The Student": ["વિદ્યાર્થી પર ધ્યાન આપતું કોચિંગ", "छात्र पर केंद्रित कोचिंग"],
    "Understanding Before Memorising": ["ગોખતા પહેલાં સમજણ", "रटने से पहले समझ"],
    "Our coaching approach focuses on helping students understand concepts, strengthen fundamentals and develop confidence in their studies.": ["અમારું કોચિંગ વિદ્યાર્થીઓને કન્સેપ્ટ સમજવામાં, પાયો મજબૂત કરવામાં અને અભ્યાસમાં આત્મવિશ્વાસ વધારવામાં મદદ કરે છે.", "हमारी कोचिंग छात्रों को कॉन्सेप्ट समझने, बुनियाद मज़बूत करने और पढ़ाई में आत्मविश्वास बढ़ाने में मदद करती है।"],
    "Small & Focused Learning Environment": ["નાનું અને કેન્દ્રિત શીખવાનું વાતાવરણ", "छोटा और केंद्रित सीखने का माहौल"],
    "Small group batches allow students to receive focused attention and interact with the teacher during their learning sessions.": ["નાની બેચમાં દરેક વિદ્યાર્થી પર ધ્યાન અપાય છે અને ક્લાસ દરમિયાન શિક્ષક સાથે સીધી વાતચીત થઈ શકે છે.", "छोटे बैच में हर छात्र पर ध्यान दिया जाता है और क्लास के दौरान शिक्षक से सीधी बातचीत हो सकती है।"],
    "Academic & Competitive Preparation": ["શૈક્ષણિક અને સ્પર્ધાત્મક તૈયારી", "शैक्षणिक और प्रतियोगी तैयारी"],
    "Along with school academics, Science students can prepare for JEE, NEET and GUJCET according to their preparation level.": ["શાળાના અભ્યાસની સાથે સાયન્સના વિદ્યાર્થીઓ પોતાના સ્તર મુજબ JEE, NEET અને GUJCET ની તૈયારી કરી શકે છે.", "स्कूल की पढ़ाई के साथ साइंस के छात्र अपने स्तर के अनुसार JEE, NEET और GUJCET की तैयारी कर सकते हैं।"],
    "SCHOOL EDUCATION": ["શાળા શિક્ષણ", "स्कूल शिक्षा"],
    "Standard 1–10 Coaching": ["ધોરણ 1–10 કોચિંગ", "कक्षा 1–10 कोचिंग"],
    "Standard 1–5": ["ધોરણ 1–5", "कक्षा 1–5"],
    "Foundation-focused academic coaching designed to build strong basic concepts.": ["મજબૂત પાયાના કન્સેપ્ટ બનાવવા માટેનું ફાઉન્ડેશન કોચિંગ.", "मज़बूत बुनियादी कॉन्सेप्ट बनाने के लिए फाउंडेशन कोचिंग।"],
    "Standard 6–10": ["ધોરણ 6–10", "कक्षा 6–10"],
    "Subject-focused coaching with attention to concepts, practice, revision and examinations.": ["કન્સેપ્ટ, પ્રેક્ટિસ, પુનરાવર્તન અને પરીક્ષા પર ધ્યાન આપતું વિષયવાર કોચિંગ.", "कॉन्सेप्ट, अभ्यास, दोहराई और परीक्षा पर ध्यान देने वाली विषयवार कोचिंग।"],
    "View School Courses": ["શાળાના કોર્સ જુઓ", "स्कूल कोर्स देखें"],
    "SCIENCE STREAM": ["સાયન્સ પ્રવાહ", "साइंस स्ट्रीम"],
    "11–12 Science Coaching": ["ધો. 11–12 સાયન્સ કોચિંગ", "कक्षा 11–12 साइंस कोचिंग"],
    "Students in Standard 11–12 Science can choose academic coaching along with dedicated preparation for competitive entrance examinations.": ["ધોરણ 11–12 સાયન્સના વિદ્યાર્થીઓ શૈક્ષણિક કોચિંગ સાથે સ્પર્ધાત્મક પ્રવેશ પરીક્ષાની ખાસ તૈયારી પસંદ કરી શકે છે.", "कक्षा 11–12 साइंस के छात्र शैक्षणिक कोचिंग के साथ प्रतियोगी प्रवेश परीक्षाओं की विशेष तैयारी चुन सकते हैं।"],
    "Group A": ["ગ્રુપ A", "ग्रुप A"],
    "Science coaching with focus on Mathematics, Physics, Chemistry and relevant preparation.": ["ગણિત, ફિઝિક્સ, કેમિસ્ટ્રી અને સંબંધિત તૈયારી પર ધ્યાન આપતું સાયન્સ કોચિંગ.", "गणित, फिज़िक्स, केमिस्ट्री और संबंधित तैयारी पर केंद्रित साइंस कोचिंग।"],
    "Group B": ["ગ્રુપ B", "ग्रुप B"],
    "Science coaching with focus on Biology, Physics, Chemistry and relevant preparation.": ["બાયોલોજી, ફિઝિક્સ, કેમિસ્ટ્રી અને સંબંધિત તૈયારી પર ધ્યાન આપતું સાયન્સ કોચિંગ.", "बायोलॉजी, फिज़िक्स, केमिस्ट्री और संबंधित तैयारी पर केंद्रित साइंस कोचिंग।"],
    "Explore 11–12 Science": ["ધો. 11–12 સાયન્સ વિશે જાણો", "कक्षा 11–12 साइंस के बारे में जानें"],
    "COMPETITIVE PREPARATION": ["સ્પર્ધાત્મક તૈયારી", "प्रतियोगी तैयारी"],
    "Preparation for JEE with structured academic and competitive practice.": ["વ્યવસ્થિત શૈક્ષણિક અને સ્પર્ધાત્મક પ્રેક્ટિસ સાથે JEE ની તૈયારી.", "व्यवस्थित शैक्षणिक और प्रतियोगी अभ्यास के साथ JEE की तैयारी।"],
    "Main · Advanced": ["મેઇન · એડવાન્સ્ડ", "मेन · एडवांस्ड"],
    "Focused preparation for medical entrance examination requirements.": ["મેડિકલ પ્રવેશ પરીક્ષા માટે કેન્દ્રિત તૈયારી.", "मेडिकल प्रवेश परीक्षा के लिए केंद्रित तैयारी।"],
    "Foundation · Advanced": ["ફાઉન્ડેશન · એડવાન્સ્ડ", "फाउंडेशन · एडवांस्ड"],
    "Dedicated preparation for Gujarat Common Entrance Test.": ["ગુજરાત કોમન એન્ટ્રન્સ ટેસ્ટ (GUJCET) માટે ખાસ તૈયારી.", "गुजरात कॉमन एंट्रेंस टेस्ट (GUJCET) के लिए विशेष तैयारी।"],
    "Preparation · Advanced Practice": ["તૈયારી · એડવાન્સ્ડ પ્રેક્ટિસ", "तैयारी · एडवांस्ड अभ्यास"],
    "FLEXIBLE LEARNING": ["અનુકૂળ શિક્ષણ", "लचीली पढ़ाई"],
    "Choose The Right Learning Format": ["યોગ્ય શીખવાની રીત પસંદ કરો", "सही पढ़ाई का तरीका चुनें"],
    "Group Batch": ["ગ્રુપ બેચ", "ग्रुप बैच"],
    "Focused group learning with limited students.": ["મર્યાદિત વિદ્યાર્થીઓ સાથે કેન્દ્રિત ગ્રુપ શિક્ષણ.", "सीमित छात्रों के साथ केंद्रित ग्रुप पढ़ाई।"],
    "Personal Batch": ["પર્સનલ બેચ", "पर्सनल बैच"],
    "Personal learning options for individual students.": ["દરેક વિદ્યાર્થી માટે વ્યક્તિગત શિક્ષણના વિકલ્પો.", "हर छात्र के लिए व्यक्तिगत पढ़ाई के विकल्प।"],
    "Learning support provided at the student's home.": ["વિદ્યાર્થીના ઘરે શિક્ષણ.", "छात्र के घर पर पढ़ाई।"],
    "English & Gujarati": ["અંગ્રેજી અને ગુજરાતી", "अंग्रेज़ी और गुजराती"],
    "Teaching in English and Gujarati medium.": ["અંગ્રેજી અને ગુજરાતી માધ્યમમાં શિક્ષણ.", "अंग्रेज़ी और गुजराती माध्यम में पढ़ाई।"],
    "Find The Right Coaching For Your Child": ["તમારા બાળક માટે યોગ્ય કોચિંગ શોધો", "अपने बच्चे के लिए सही कोचिंग चुनें"],
    "Explore our courses or book a demo class to understand the learning approach at": ["અમારા કોર્સ જુઓ અથવા ડેમો ક્લાસ બુક કરીને શીખવવાની પદ્ધતિ જાણો –", "हमारे कोर्स देखें या डेमो क्लास बुक करके पढ़ाने का तरीका जानें –"],
    "Yadav Group & Personal Tuition.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન.", "यादव ग्रुप & पर्सनल ट्यूशन।"],
    "Book Demo Class": ["ડેમો ક્લાસ બુક કરો", "डेमो क्लास बुक करें"],
    "Contact us": ["સંપર્ક કરો", "संपर्क करें"],
    "Yadav Group & Personal Tuition": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન", "यादव ग्रुप & पर्सनल ट्यूशन"],
    "Std. 1 to 10 all subjects and Std. 11, 12 Chemistry.": ["ધો. 1 થી 10 બધા વિષયો અને ધો. 11, 12 કેમિસ્ટ્રી.", "कक्षा 1 से 10 सभी विषय और कक्षा 11, 12 केमिस्ट्री।"],
    "English & Gujarati medium.": ["અંગ્રેજી અને ગુજરાતી માધ્યમ.", "अंग्रेज़ी और गुजराती माध्यम।"],
    "Offline in Gandhinagar, online anywhere.": ["ગાંધીનગરમાં ઓફલાઇન, ગમે ત્યાંથી ઓનલાઇન.", "गांधीनगर में ऑफलाइन, कहीं से भी ऑनलाइन।"],
    "Quick links": ["ઝડપી લિંક્સ", "त्वरित लिंक"],
    "Book a lecture": ["લેક્ચર બુક કરો", "लेक्चर बुक करें"],
    "Phone:": ["ફોન:", "फ़ोन:"],
    "Chat with us": ["અમારી સાથે ચેટ કરો", "हमसे चैट करें"],
    "Gandhinagar, Gujarat": ["ગાંધીનગર, ગુજરાત", "गांधीनगर, गुजरात"],
    "Yadav Group & Personal Tuition. All rights reserved.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન. સર્વાધિકાર સુરક્ષિત.", "यादव ग्रुप & पर्सनल ट्यूशन। सर्वाधिकार सुरक्षित।"],
    "WhatsApp us": ["WhatsApp કરો", "WhatsApp करें"],
    "Building strong concepts, disciplined learning habits and confidence for academic success.": ["શૈક્ષણિક સફળતા માટે મજબૂત કન્સેપ્ટ, શિસ્તબદ્ધ અભ્યાસની ટેવ અને આત્મવિશ્વાસ.", "शैक्षणिक सफलता के लिए मज़बूत कॉन्सेप्ट, अनुशासित पढ़ाई की आदत और आत्मविश्वास।"],
    "Who We Are": ["અમે કોણ છીએ", "हम कौन हैं"],
    "Yadav Group & Personal Tuition is a coaching centre focused on providing structured academic guidance to students from Standard 1 to Standard 12, along with preparation for competitive examinations.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન એક કોચિંગ સેન્ટર છે, જે ધોરણ 1 થી 12 ના વિદ્યાર્થીઓને વ્યવસ્થિત શૈક્ષણિક માર્ગદર્શન અને સ્પર્ધાત્મક પરીક્ષાઓની તૈયારી આપે છે.", "यादव ग्रुप & पर्सनल ट्यूशन एक कोचिंग सेंटर है, जो कक्षा 1 से 12 के छात्रों को व्यवस्थित शैक्षणिक मार्गदर्शन और प्रतियोगी परीक्षाओं की तैयारी देता है।"],
    "Our approach focuses on helping students understand concepts clearly, practise regularly and receive guidance according to their learning requirements.": ["અમારો હેતુ છે કે વિદ્યાર્થીઓ કન્સેપ્ટ સ્પષ્ટ રીતે સમજે, નિયમિત પ્રેક્ટિસ કરે અને પોતાની જરૂરિયાત મુજબ માર્ગદર્શન મેળવે.", "हमारा उद्देश्य है कि छात्र कॉन्सेप्ट साफ़ समझें, नियमित अभ्यास करें और अपनी ज़रूरत के अनुसार मार्गदर्शन पाएँ।"],
    "Our Teaching Approach": ["અમારી શિક્ષણ પદ્ધતિ", "हमारी पढ़ाने की पद्धति"],
    "We believe that effective learning requires more than simply completing a syllabus.": ["અમે માનીએ છીએ કે સારું શિક્ષણ ફક્ત અભ્યાસક્રમ પૂરો કરવાથી વધુ છે.", "हम मानते हैं कि अच्छी पढ़ाई सिर्फ़ सिलेबस पूरा करने से कहीं ज़्यादा है।"],
    "Concept Clarity": ["કન્સેપ્ટની સ્પષ્ટતા", "कॉन्सेप्ट की स्पष्टता"],
    "Students are encouraged to understand the concepts behind a topic instead of relying only on memorisation.": ["વિદ્યાર્થીઓને ફક્ત ગોખવાને બદલે દરેક વિષય પાછળનો કન્સેપ્ટ સમજવા પ્રોત્સાહિત કરવામાં આવે છે.", "छात्रों को सिर्फ़ रटने के बजाय हर विषय के पीछे का कॉन्सेप्ट समझने के लिए प्रोत्साहित किया जाता है।"],
    "Regular Practice": ["નિયમિત પ્રેક્ટિસ", "नियमित अभ्यास"],
    "Consistent practice helps students strengthen their understanding and improve their academic performance.": ["સતત પ્રેક્ટિસથી સમજણ મજબૂત થાય છે અને પરિણામ સુધરે છે.", "लगातार अभ्यास से समझ मज़बूत होती है और परिणाम बेहतर होते हैं।"],
    "Personal Attention": ["વ્યક્તિગત ધ્યાન", "व्यक्तिगत ध्यान"],
    "Smaller learning formats allow students to receive focused academic guidance.": ["નાની બેચમાં દરેક વિદ્યાર્થીને કેન્દ્રિત માર્ગદર્શન મળે છે.", "छोटे बैच में हर छात्र को केंद्रित मार्गदर्शन मिलता है।"],
    "Progress Guidance": ["પ્રગતિ માર્ગદર્શન", "प्रगति मार्गदर्शन"],
    "Student learning progress can be reviewed to identify areas where additional support may be required.": ["વિદ્યાર્થીની પ્રગતિ તપાસીને જ્યાં વધુ મદદની જરૂર હોય તે ભાગ ઓળખવામાં આવે છે.", "छात्र की प्रगति देखकर उन हिस्सों की पहचान की जाती है जहाँ अतिरिक्त मदद चाहिए।"],
    "Academic Preparation": ["શૈક્ષણિક તૈયારી", "शैक्षणिक तैयारी"],
    "Foundation-level academic support for school students.": ["શાળાના વિદ્યાર્થીઓ માટે પાયાના સ્તરનું શૈક્ષણિક માર્ગદર્શન.", "स्कूली छात्रों के लिए बुनियादी स्तर का शैक्षणिक सहयोग।"],
    "Structured school-level coaching with focus on strong concepts and regular practice.": ["મજબૂત કન્સેપ્ટ અને નિયમિત પ્રેક્ટિસ પર ધ્યાન આપતું વ્યવસ્થિત શાળા-સ્તરનું કોચિંગ.", "मज़बूत कॉन्सेप्ट और नियमित अभ्यास पर केंद्रित व्यवस्थित स्कूल-स्तरीय कोचिंग।"],
    "11–12 Science": ["ધો. 11–12 સાયન્સ", "कक्षा 11–12 साइंस"],
    "Science coaching for students following Group A and Group B pathways.": ["ગ્રુપ A અને ગ્રુપ B ના વિદ્યાર્થીઓ માટે સાયન્સ કોચિંગ.", "ग्रुप A और ग्रुप B के छात्रों के लिए साइंस कोचिंग।"],
    "Competitive Preparation": ["સ્પર્ધાત્મક તૈયારી", "प्रतियोगी तैयारी"],
    "Preparation support for JEE, NEET and GUJCET at different learning levels.": ["અલગ-અલગ સ્તરે JEE, NEET અને GUJCET ની તૈયારી.", "अलग-अलग स्तर पर JEE, NEET और GUJCET की तैयारी।"],
    "Learning Mediums": ["શિક્ષણનાં માધ્યમ", "पढ़ाई के माध्यम"],
    "Learning support is available through multiple languages according to the student's requirements.": ["વિદ્યાર્થીની જરૂરિયાત મુજબ અલગ-અલગ ભાષામાં શિક્ષણ ઉપલબ્ધ છે.", "छात्र की ज़रूरत के अनुसार अलग-अलग भाषाओं में पढ़ाई उपलब्ध है।"],
    "English Medium": ["અંગ્રેજી માધ્યમ", "अंग्रेज़ी माध्यम"],
    "Hindi Medium": ["હિન્દી માધ્યમ", "हिंदी माध्यम"],
    "Gujarati Medium": ["ગુજરાતી માધ્યમ", "गुजराती माध्यम"],
    "Flexible Learning Formats": ["અનુકૂળ શિક્ષણ વિકલ્પો", "लचीले पढ़ाई के विकल्प"],
    "Small-group learning with a maximum of 5 students.": ["વધુમાં વધુ 5 વિદ્યાર્થીઓ સાથે નાની બેચમાં શિક્ષણ.", "अधिकतम 5 छात्रों के साथ छोटे बैच में पढ़ाई।"],
    "Personalised learning with focused academic attention.": ["કેન્દ્રિત ધ્યાન સાથે વ્યક્તિગત શિક્ષણ.", "केंद्रित ध्यान के साथ व्यक्तिगत पढ़ाई।"],
    "Dedicated academic support in the student's home environment.": ["વિદ્યાર્થીના ઘરના વાતાવરણમાં ખાસ શૈક્ષણિક મદદ.", "छात्र के घर के माहौल में विशेष शैक्षणिक सहयोग।"],
    "Start Your Learning Journey": ["તમારી શીખવાની સફર શરૂ કરો", "अपनी पढ़ाई की यात्रा शुरू करें"],
    "Explore our courses or contact": ["અમારા કોર્સ જુઓ અથવા સંપર્ક કરો –", "हमारे कोर्स देखें या संपर्क करें –"],
    "Yadav Group & Personal Tuition to understand which learning format may be suitable for the student.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન, અને જાણો કે વિદ્યાર્થી માટે કઈ રીત યોગ્ય રહેશે.", "यादव ग्रुप & पर्सनल ट्यूशन, और जानें कि छात्र के लिए कौन-सा तरीका सही रहेगा।"],
    "Explore Courses": ["કોર્સ જુઓ", "कोर्स देखें"],
    "Book a Demo": ["ડેમો બુક કરો", "डेमो बुक करें"],
    "YADAV GROUP & PERSONAL TUITION": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન", "यादव ग्रुप & पर्सनल ट्यूशन"],
    "Our Courses": ["અમારા કોર્સ", "हमारे कोर्स"],
    "Academic coaching and competitive examination preparation": ["શૈક્ષણિક કોચિંગ અને સ્પર્ધાત્મક પરીક્ષાની તૈયારી", "शैक्षणिक कोचिंग और प्रतियोगी परीक्षाओं की तैयारी"],
    "SCHOOL COACHING": ["શાળા કોચિંગ", "स्कूल कोचिंग"],
    "Standard 1–10": ["ધોરણ 1–10", "कक्षा 1–10"],
    "Academic coaching for school students with support for GSEB, CBSE and ICSE boards.": ["GSEB, CBSE અને ICSE બોર્ડના શાળાના વિદ્યાર્થીઓ માટે કોચિંગ.", "GSEB, CBSE और ICSE बोर्ड के स्कूली छात्रों के लिए कोचिंग।"],
    "FOUNDATION": ["ફાઉન્ડેશન", "फाउंडेशन"],
    "Build strong fundamentals and develop a consistent learning habit from the early academic years.": ["શરૂઆતનાં વર્ષોથી જ મજબૂત પાયો અને નિયમિત અભ્યાસની ટેવ બનાવો.", "शुरुआती वर्षों से ही मज़बूत बुनियाद और नियमित पढ़ाई की आदत बनाएँ।"],
    "SCHOOL ACADEMICS": ["શાળા અભ્યાસ", "स्कूली पढ़ाई"],
    "Concept-focused coaching, regular practice and academic examination preparation.": ["કન્સેપ્ટ આધારિત કોચિંગ, નિયમિત પ્રેક્ટિસ અને પરીક્ષાની તૈયારી.", "कॉन्सेप्ट आधारित कोचिंग, नियमित अभ्यास और परीक्षा की तैयारी।"],
    "HIGHER SECONDARY": ["ઉચ્ચતર માધ્યમિક", "उच्चतर माध्यमिक"],
    "Standard 11–12 Science": ["ધોરણ 11–12 સાયન્સ", "कक्षा 11–12 साइंस"],
    "Structured coaching for Science students with academic support and preparation for competitive entrance examinations.": ["સાયન્સના વિદ્યાર્થીઓ માટે શૈક્ષણિક મદદ અને સ્પર્ધાત્મક પ્રવેશ પરીક્ષાની તૈયારી સાથે વ્યવસ્થિત કોચિંગ.", "साइंस के छात्रों के लिए शैक्षणिक सहयोग और प्रतियोगी प्रवेश परीक्षाओं की तैयारी के साथ व्यवस्थित कोचिंग।"],
    "SCIENCE GROUP A": ["સાયન્સ ગ્રુપ A", "साइंस ग्रुप A"],
    "Academic support and subject-focused preparation for students pursuing the Group A Science pathway.": ["સાયન્સ ગ્રુપ A ના વિદ્યાર્થીઓ માટે શૈક્ષણિક મદદ અને વિષયવાર તૈયારી.", "साइंस ग्रुप A के छात्रों के लिए शैक्षणिक सहयोग और विषयवार तैयारी।"],
    "SCIENCE GROUP B": ["સાયન્સ ગ્રુપ B", "साइंस ग्रुप B"],
    "Academic support and subject-focused preparation for students pursuing the Group B Science pathway.": ["સાયન્સ ગ્રુપ B ના વિદ્યાર્થીઓ માટે શૈક્ષણિક મદદ અને વિષયવાર તૈયારી.", "साइंस ग्रुप B के छात्रों के लिए शैक्षणिक सहयोग और विषयवार तैयारी।"],
    "ENTRANCE EXAM PREPARATION": ["પ્રવેશ પરીક્ષાની તૈયારી", "प्रवेश परीक्षा की तैयारी"],
    "Students can select competitive examination preparation according to their academic goals and preparation level.": ["વિદ્યાર્થીઓ પોતાના લક્ષ્ય અને તૈયારીના સ્તર મુજબ સ્પર્ધાત્મક પરીક્ષાની તૈયારી પસંદ કરી શકે છે.", "छात्र अपने लक्ष्य और तैयारी के स्तर के अनुसार प्रतियोगी परीक्षा की तैयारी चुन सकते हैं।"],
    "ENGINEERING": ["એન્જિનિયરિંગ", "इंजीनियरिंग"],
    "Preparation for engineering entrance examinations.": ["એન્જિનિયરિંગ પ્રવેશ પરીક્ષાઓની તૈયારી.", "इंजीनियरिंग प्रवेश परीक्षाओं की तैयारी।"],
    "Main": ["મેઇન", "मेन"],
    "Advanced": ["એડવાન્સ્ડ", "एडवांस्ड"],
    "MEDICAL": ["મેડિકલ", "मेडिकल"],
    "Preparation focused on medical entrance examination requirements.": ["મેડિકલ પ્રવેશ પરીક્ષા માટે કેન્દ્રિત તૈયારી.", "मेडिकल प्रवेश परीक्षा के लिए केंद्रित तैयारी।"],
    "Foundation": ["ફાઉન્ડેશન", "फाउंडेशन"],
    "GUJARAT ENTRANCE": ["ગુજરાત પ્રવેશ પરીક્ષા", "गुजरात प्रवेश परीक्षा"],
    "Structured preparation for Gujarat Common Entrance Test.": ["ગુજરાત કોમન એન્ટ્રન્સ ટેસ્ટ માટે વ્યવસ્થિત તૈયારી.", "गुजरात कॉमन एंट्रेंस टेस्ट के लिए व्यवस्थित तैयारी।"],
    "Preparation": ["તૈયારી", "तैयारी"],
    "Advanced Practice": ["એડવાન્સ્ડ પ્રેક્ટિસ", "एडवांस्ड अभ्यास"],
    "LANGUAGE SUPPORT": ["ભાષા સપોર્ટ", "भाषा सहायता"],
    "Choose Your Preferred Medium": ["તમારું માધ્યમ પસંદ કરો", "अपना माध्यम चुनें"],
    "English medium learning support.": ["અંગ્રેજી માધ્યમમાં શિક્ષણ.", "अंग्रेज़ी माध्यम में पढ़ाई।"],
    "Hindi medium learning support.": ["હિન્દી માધ્યમમાં શિક્ષણ.", "हिंदी माध्यम में पढ़ाई।"],
    "Gujarati medium learning support.": ["ગુજરાતી માધ્યમમાં શિક્ષણ.", "गुजराती माध्यम में पढ़ाई।"],
    "Not Sure Which Course Is Right?": ["કયો કોર્સ યોગ્ય છે તે નક્કી નથી?", "तय नहीं कर पा रहे कि कौन-सा कोर्स सही है?"],
    "Book a demo class and discuss the right learning option.": ["ડેમો ક્લાસ બુક કરો અને યોગ્ય વિકલ્પ વિશે વાત કરો.", "डेमो क्लास बुक करें और सही विकल्प पर बात करें।"],
    "Contact Us": ["સંપર્ક કરો", "संपर्क करें"],
    "Choose a learning format that matches the student's academic needs, learning style and level of personal attention.": ["વિદ્યાર્થીની જરૂરિયાત, શીખવાની રીત અને જોઈતા વ્યક્તિગત ધ્યાન મુજબ બેચ પસંદ કરો.", "छात्र की ज़रूरत, सीखने के तरीके और चाहिए व्यक्तिगत ध्यान के अनुसार बैच चुनें।"],
    "Our Learning Formats": ["અમારી બેચના પ્રકાર", "हमारे बैच के प्रकार"],
    "Yadav Group & Personal Tuition provides different batch formats so students can learn in a focused and comfortable environment.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશનમાં અલગ-અલગ પ્રકારની બેચ છે, જેથી વિદ્યાર્થીઓ કેન્દ્રિત અને આરામદાયક વાતાવરણમાં શીખી શકે.", "यादव ग्रुप & पर्सनल ट्यूशन में अलग-अलग तरह के बैच हैं, ताकि छात्र केंद्रित और आरामदायक माहौल में पढ़ सकें।"],
    "Maximum 5 Students": ["વધુમાં વધુ 5 વિદ્યાર્થીઓ", "अधिकतम 5 छात्र"],
    "A small-group learning environment designed to provide classroom interaction while still allowing individual attention to students.": ["નાની બેચ, જેમાં ક્લાસરૂમ જેવી ચર્ચા સાથે દરેક વિદ્યાર્થી પર વ્યક્તિગત ધ્યાન પણ અપાય છે.", "छोटा बैच, जिसमें क्लासरूम जैसी चर्चा के साथ हर छात्र पर व्यक्तिगत ध्यान भी दिया जाता है।"],
    "Maximum 5 students": ["વધુમાં વધુ 5 વિદ્યાર્થીઓ", "अधिकतम 5 छात्र"],
    "Interactive learning": ["ચર્ચા સાથે શિક્ષણ", "संवादात्मक पढ़ाई"],
    "Regular academic guidance": ["નિયમિત માર્ગદર્શન", "नियमित मार्गदर्शन"],
    "Doubt solving": ["શંકાઓનું સમાધાન", "डाउट सॉल्विंग"],
    "Progress monitoring": ["પ્રગતિ પર નજર", "प्रगति पर नज़र"],
    "Fees": ["ફી", "फीस"],
    "Call": ["ફી જાણવા ફોન કરો:", "फीस जानने के लिए कॉल करें:"],
    "for current fees.": ["", ""],
    "Enquire Now": ["હમણાં પૂછપરછ કરો", "अभी पूछताछ करें"],
    "Personal Batch 1": ["પર્સનલ બેચ 1", "पर्सनल बैच 1"],
    "Individual Learning": ["વ્યક્તિગત શિક્ષણ", "व्यक्तिगत पढ़ाई"],
    "A personalised learning format for students who require more focused academic attention and customised guidance.": ["જે વિદ્યાર્થીઓને વધુ ધ્યાન અને ખાસ માર્ગદર્શન જોઈએ તેમના માટે વ્યક્તિગત બેચ.", "जिन छात्रों को ज़्यादा ध्यान और विशेष मार्गदर्शन चाहिए, उनके लिए व्यक्तिगत बैच।"],
    "Individual attention": ["વ્યક્તિગત ધ્યાન", "व्यक्तिगत ध्यान"],
    "Personalised teaching": ["વ્યક્તિગત શિક્ષણ", "व्यक्तिगत पढ़ाई"],
    "Flexible academic support": ["અનુકૂળ શૈક્ષણિક મદદ", "लचीला शैक्षणिक सहयोग"],
    "Personal Batch 2": ["પર્સનલ બેચ 2", "पर्सनल बैच 2"],
    "A personalised format designed for students looking for dedicated academic guidance and structured support.": ["ખાસ માર્ગદર્શન અને વ્યવસ્થિત મદદ ઇચ્છતા વિદ્યાર્થીઓ માટે વ્યક્તિગત બેચ.", "विशेष मार्गदर्शन और व्यवस्थित सहयोग चाहने वाले छात्रों के लिए व्यक्तिगत बैच।"],
    "Personal attention": ["વ્યક્તિગત ધ્યાન", "व्यक्तिगत ध्यान"],
    "Focused teaching": ["કેન્દ્રિત શિક્ષણ", "केंद्रित पढ़ाई"],
    "Regular doubt solving": ["નિયમિત શંકા સમાધાન", "नियमित डाउट सॉल्विंग"],
    "Academic guidance": ["શૈક્ષણિક માર્ગદર્શન", "शैक्षणिक मार्गदर्शन"],
    "Performance tracking": ["પરિણામ પર નજર", "प्रदर्शन पर नज़र"],
    "Learning at Home": ["ઘરે શિક્ષણ", "घर पर पढ़ाई"],
    "Home tuition provides students with dedicated academic support in their own home environment.": ["હોમ ટ્યુશનમાં વિદ્યાર્થીને પોતાના ઘરે જ ખાસ શૈક્ષણિક મદદ મળે છે.", "होम ट्यूशन में छात्र को अपने घर पर ही विशेष शैक्षणिक सहयोग मिलता है।"],
    "One-to-one attention": ["એક-એક પર ધ્યાન", "एक-एक पर ध्यान"],
    "Convenient learning environment": ["અનુકૂળ વાતાવરણ", "सुविधाजनक माहौल"],
    "Academic progress guidance": ["પ્રગતિ માર્ગદર્શન", "प्रगति मार्गदर्शन"],
    "Learn More": ["વધુ જાણો", "और जानें"],
    "What Students Receive": ["વિદ્યાર્થીઓને શું મળે છે", "छात्रों को क्या मिलता है"],
    "Concept-Based Learning": ["કન્સેપ્ટ આધારિત શિક્ષણ", "कॉन्सेप्ट आधारित पढ़ाई"],
    "Focus on understanding concepts instead of only memorising answers.": ["ફક્ત જવાબો ગોખવાને બદલે કન્સેપ્ટ સમજવા પર ભાર.", "सिर्फ़ उत्तर रटने के बजाय कॉन्सेप्ट समझने पर ज़ोर।"],
    "Doubt Solving": ["શંકાઓનું સમાધાન", "डाउट सॉल्विंग"],
    "Students can clarify their academic doubts during their learning process.": ["અભ્યાસ દરમિયાન વિદ્યાર્થીઓ પોતાની શંકાઓ દૂર કરી શકે છે.", "पढ़ाई के दौरान छात्र अपने डाउट दूर कर सकते हैं।"],
    "Regular Guidance": ["નિયમિત માર્ગદર્શન", "नियमित मार्गदर्शन"],
    "Students receive guidance according to their academic requirements and learning progress.": ["વિદ્યાર્થીઓને તેમની જરૂરિયાત અને પ્રગતિ મુજબ માર્ગદર્શન મળે છે.", "छात्रों को उनकी ज़रूरत और प्रगति के अनुसार मार्गदर्शन मिलता है।"],
    "Progress Monitoring": ["પ્રગતિ પર નજર", "प्रगति पर नज़र"],
    "Student performance can be reviewed to identify areas that need additional attention.": ["વિદ્યાર્થીના પરિણામ તપાસીને જ્યાં વધુ ધ્યાનની જરૂર હોય તે ભાગ ઓળખવામાં આવે છે.", "छात्र के प्रदर्शन को देखकर उन हिस्सों की पहचान की जाती है जिन पर ज़्यादा ध्यान चाहिए।"],
    "Not Sure Which Batch Is Right?": ["કઈ બેચ યોગ્ય છે તે નક્કી નથી?", "तय नहीं कर पा रहे कि कौन-सा बैच सही है?"],
    "Yadav Group & Personal Tuition and discuss the student's learning requirements before choosing a batch.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન, અને બેચ પસંદ કરતાં પહેલાં વિદ્યાર્થીની જરૂરિયાતો વિશે વાત કરો.", "यादव ग्रुप & पर्सनल ट्यूशन, और बैच चुनने से पहले छात्र की ज़रूरतों पर बात करें।"],
    "Personalised academic support designed around the student's learning requirements.": ["વિદ્યાર્થીની જરૂરિયાત મુજબ તૈયાર કરેલી વ્યક્તિગત શૈક્ષણિક મદદ.", "छात्र की ज़रूरत के अनुसार तैयार व्यक्तिगत शैक्षणिक सहयोग।"],
    "Personalised Learning at Home": ["ઘરે વ્યક્તિગત શિક્ષણ", "घर पर व्यक्तिगत पढ़ाई"],
    "Our home tuition option is designed for students who prefer dedicated academic support in their home environment.": ["અમારું હોમ ટ્યુશન એવા વિદ્યાર્થીઓ માટે છે જેઓ પોતાના ઘરે ખાસ શૈક્ષણિક મદદ ઇચ્છે છે.", "हमारा होम ट्यूशन उन छात्रों के लिए है जो अपने घर पर विशेष शैक्षणिक सहयोग चाहते हैं।"],
    "The learning approach can be adjusted according to the student's standard, subjects, academic requirements and learning goals.": ["વિદ્યાર્થીના ધોરણ, વિષયો, જરૂરિયાત અને લક્ષ્ય મુજબ શીખવવાની રીત બદલી શકાય છે.", "छात्र की कक्षा, विषय, ज़रूरत और लक्ष्य के अनुसार पढ़ाने का तरीका बदला जा सकता है।"],
    "Home Tuition Features": ["હોમ ટ્યુશનની વિશેષતાઓ", "होम ट्यूशन की विशेषताएँ"],
    "Dedicated teaching focused on the individual student's learning requirements.": ["દરેક વિદ્યાર્થીની જરૂરિયાત પર કેન્દ્રિત ખાસ શિક્ષણ.", "हर छात्र की ज़रूरत पर केंद्रित विशेष पढ़ाई।"],
    "Flexible Learning": ["અનુકૂળ શિક્ષણ", "लचीली पढ़ाई"],
    "Learning can be planned around the student's academic needs and suitable schedule.": ["વિદ્યાર્થીની જરૂરિયાત અને અનુકૂળ સમય મુજબ અભ્યાસનું આયોજન કરી શકાય છે.", "छात्र की ज़रूरत और सुविधाजनक समय के अनुसार पढ़ाई की योजना बनाई जा सकती है।"],
    "Students can focus on difficult concepts and clarify their academic doubts.": ["વિદ્યાર્થીઓ અઘરા કન્સેપ્ટ પર ધ્યાન આપી શકે છે અને શંકાઓ દૂર કરી શકે છે.", "छात्र कठिन कॉन्सेप्ट पर ध्यान दे सकते हैं और अपने डाउट दूर कर सकते हैं।"],
    "Academic progress can be monitored to identify areas requiring additional attention.": ["પ્રગતિ પર નજર રાખીને જ્યાં વધુ ધ્યાનની જરૂર હોય તે ભાગ ઓળખવામાં આવે છે.", "प्रगति पर नज़र रखकर उन हिस्सों की पहचान की जाती है जिन पर ज़्यादा ध्यान चाहिए।"],
    "Who Can Choose Home Tuition?": ["હોમ ટ્યુશન કોણ પસંદ કરી શકે?", "होम ट्यूशन कौन चुन सकता है?"],
    "School Students": ["શાળાના વિદ્યાર્થીઓ", "स्कूली छात्र"],
    "Students from Standard 1 to Standard 10 who require personalised academic support.": ["ધોરણ 1 થી 10 ના વિદ્યાર્થીઓ, જેમને વ્યક્તિગત મદદની જરૂર હોય.", "कक्षा 1 से 10 के छात्र, जिन्हें व्यक्तिगत सहयोग चाहिए।"],
    "Science Students": ["સાયન્સના વિદ્યાર્થીઓ", "साइंस के छात्र"],
    "Standard 11 and 12 Science students who need focused support in their subjects.": ["ધોરણ 11 અને 12 સાયન્સના વિદ્યાર્થીઓ, જેમને વિષયોમાં ખાસ મદદ જોઈએ.", "कक्षा 11 और 12 साइंस के छात्र, जिन्हें विषयों में विशेष मदद चाहिए।"],
    "Subject Support": ["વિષય મદદ", "विषय सहायता"],
    "Students who need additional help with specific subjects or difficult topics.": ["કોઈ ચોક્કસ વિષય કે અઘરા પ્રકરણમાં વધુ મદદ જોઈતા વિદ્યાર્થીઓ.", "किसी खास विषय या कठिन अध्याय में अतिरिक्त मदद चाहने वाले छात्र।"],
    "Exam Preparation": ["પરીક્ષાની તૈયારી", "परीक्षा की तैयारी"],
    "Students looking for additional academic guidance during important examination preparation.": ["મહત્વની પરીક્ષાઓની તૈયારી દરમિયાન વધુ માર્ગદર્શન ઇચ્છતા વિદ્યાર્થીઓ.", "महत्वपूर्ण परीक्षाओं की तैयारी के दौरान अतिरिक्त मार्गदर्शन चाहने वाले छात्र।"],
    "Home Tuition Enquiry": ["હોમ ટ્યુશન પૂછપરછ", "होम ट्यूशन पूछताछ"],
    "Tell us about the student's requirements.": ["વિદ્યાર્થીની જરૂરિયાતો વિશે જણાવો.", "छात्र की ज़रूरतों के बारे में बताएँ।"],
    "Student Name": ["વિદ્યાર્થીનું નામ", "छात्र का नाम"],
    "Enter student name": ["વિદ્યાર્થીનું નામ લખો", "छात्र का नाम लिखें"],
    "Parent / Guardian Name": ["માતા-પિતા / વાલીનું નામ", "माता-पिता / अभिभावक का नाम"],
    "Enter parent / guardian name": ["માતા-પિતા / વાલીનું નામ લખો", "माता-पिता / अभिभावक का नाम लिखें"],
    "Mobile Number": ["મોબાઇલ નંબર", "मोबाइल नंबर"],
    "Enter mobile number": ["મોબાઇલ નંબર લખો", "मोबाइल नंबर लिखें"],
    "Standard / Class": ["ધોરણ", "कक्षा"],
    "Select Standard": ["ધોરણ પસંદ કરો", "कक्षा चुनें"],
    "Standard 1": ["ધોરણ 1", "कक्षा 1"],
    "Standard 2": ["ધોરણ 2", "कक्षा 2"],
    "Standard 3": ["ધોરણ 3", "कक्षा 3"],
    "Standard 4": ["ધોરણ 4", "कक्षा 4"],
    "Standard 5": ["ધોરણ 5", "कक्षा 5"],
    "Standard 6": ["ધોરણ 6", "कक्षा 6"],
    "Standard 7": ["ધોરણ 7", "कक्षा 7"],
    "Standard 8": ["ધોરણ 8", "कक्षा 8"],
    "Standard 9": ["ધોરણ 9", "कक्षा 9"],
    "Standard 10": ["ધોરણ 10", "कक्षा 10"],
    "Standard 11 - Science": ["ધોરણ 11 - સાયન્સ", "कक्षा 11 - साइंस"],
    "Standard 12 - Science": ["ધોરણ 12 - સાયન્સ", "कक्षा 12 - साइंस"],
    "Subject": ["વિષય", "विषय"],
    "Enter subject": ["વિષય લખો", "विषय लिखें"],
    "Preferred Medium": ["પસંદગીનું માધ્યમ", "पसंदीदा माध्यम"],
    "Select Medium": ["માધ્યમ પસંદ કરો", "माध्यम चुनें"],
    "English": ["અંગ્રેજી", "अंग्रेज़ी"],
    "Hindi": ["હિન્દી", "हिंदी"],
    "Gujarati": ["ગુજરાતી", "गुजराती"],
    "Preferred Days": ["અનુકૂળ દિવસો", "पसंदीदा दिन"],
    "Example: Monday, Wednesday, Friday": ["ઉદાહરણ: સોમવાર, બુધવાર, શુક્રવાર", "उदाहरण: सोमवार, बुधवार, शुक्रवार"],
    "Preferred Time": ["અનુકૂળ સમય", "पसंदीदा समय"],
    "Area / Address": ["વિસ્તાર / સરનામું", "क्षेत्र / पता"],
    "Enter area or address": ["વિસ્તાર અથવા સરનામું લખો", "क्षेत्र या पता लिखें"],
    "Additional Requirements": ["વધારાની જરૂરિયાતો", "अतिरिक्त ज़रूरतें"],
    "Tell us about the student's requirements...": ["વિદ્યાર્થીની જરૂરિયાતો વિશે જણાવો...", "छात्र की ज़रूरतों के बारे में बताएँ..."],
    "Send enquiry on WhatsApp": ["WhatsApp પર પૂછપરછ મોકલો", "WhatsApp पर पूछताछ भेजें"],
    "Want to Know More?": ["વધુ જાણવું છે?", "और जानना चाहते हैं?"],
    "Yadav Group & Personal Tuition to discuss home tuition requirements and availability.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન, અને હોમ ટ્યુશનની જરૂરિયાત તથા ઉપલબ્ધતા વિશે વાત કરો.", "यादव ग्रुप & पर्सनल ट्यूशन, और होम ट्यूशन की ज़रूरत व उपलब्धता पर बात करें।"],
    "Have questions about courses, batches, fees or admissions? Get in touch with us.": ["કોર્સ, બેચ, ફી કે પ્રવેશ વિશે પ્રશ્ન છે? અમારો સંપર્ક કરો.", "कोर्स, बैच, फीस या प्रवेश के बारे में सवाल हैं? हमसे संपर्क करें।"],
    "Get In Touch": ["સંપર્કમાં રહો", "संपर्क करें"],
    "📞 Phone & WhatsApp": ["📞 ફોન અને WhatsApp", "📞 फ़ोन और WhatsApp"],
    "Call or": ["પ્રવેશ, ફી અને બેચના સમય માટે ફોન કરો અથવા", "प्रवेश, फीस और बैच के समय के लिए कॉल करें या"],
    "message on WhatsApp": ["WhatsApp પર મેસેજ કરો", "WhatsApp पर मैसेज करें"],
    "for admissions, fees and batch timings.": [".", "।"],
    "📍 Where we teach": ["📍 અમે ક્યાં ભણાવીએ છીએ", "📍 हम कहाँ पढ़ाते हैं"],
    "Offline:": ["ઓફલાઇન:", "ऑफलाइन:"],
    "Online:": ["ઓનલાઇન:", "ऑनलाइन:"],
    "students anywhere": ["ગમે ત્યાંના વિદ્યાર્થીઓ", "कहीं के भी छात्र"],
    "Home tuition is also available.": ["હોમ ટ્યુશન પણ ઉપલબ્ધ છે.", "होम ट्यूशन भी उपलब्ध है।"],
    "👩‍🏫 Std. 1 to 10": ["👩‍🏫 ધો. 1 થી 10", "👩‍🏫 कक्षा 1 से 10"],
    ", 20 years of experience": [", 20 વર્ષનો અનુભવ", ", 20 वर्षों का अनुभव"],
    "All subjects, English & Gujarati medium.": ["બધા વિષયો, અંગ્રેજી અને ગુજરાતી માધ્યમ.", "सभी विषय, अंग्रेज़ी और गुजराती माध्यम।"],
    "⚗️ Std. 11, 12 Chemistry": ["⚗️ ધો. 11, 12 કેમિસ્ટ્રી", "⚗️ कक्षा 11, 12 केमिस्ट्री"],
    ", 30 years of experience": [", 30 વર્ષનો અનુભવ", ", 30 वर्षों का अनुभव"],
    "Boards, NIOS, JEE, NEET and GUJCET.": ["બોર્ડ, NIOS, JEE, NEET અને GUJCET.", "बोर्ड, NIOS, JEE, NEET और GUJCET।"],
    "📷 Instagram": ["📷 Instagram", "📷 Instagram"],
    "Updates, batch announcements and posts.": ["અપડેટ્સ, નવી બેચની જાહેરાતો અને પોસ્ટ.", "अपडेट, नए बैच की घोषणाएँ और पोस्ट।"],
    "🕐 Timings": ["🕐 સમય", "🕐 समय"],
    "Monday to Saturday": ["સોમવાર થી શનિવાર", "सोमवार से शनिवार"],
    "Call to confirm current batch timings.": ["હાલના બેચના સમય માટે ફોન કરો.", "मौजूदा बैच के समय के लिए कॉल करें।"],
    "Send an Enquiry": ["પૂછપરછ મોકલો", "पूछताछ भेजें"],
    "Fill in the form and tell us how we can help.": ["ફોર્મ ભરો અને જણાવો કે અમે કેવી રીતે મદદ કરી શકીએ.", "फ़ॉर्म भरें और बताएँ कि हम कैसे मदद कर सकते हैं।"],
    "Name": ["નામ", "नाम"],
    "Enter your name": ["તમારું નામ લખો", "अपना नाम लिखें"],
    "Email Address": ["ઈમેલ", "ईमेल"],
    "Enter email address": ["ઈમેલ લખો", "ईमेल लिखें"],
    "Enquiry Type": ["પૂછપરછનો પ્રકાર", "पूछताछ का प्रकार"],
    "Select Enquiry Type": ["પૂછપરછનો પ્રકાર પસંદ કરો", "पूछताछ का प्रकार चुनें"],
    "Course Enquiry": ["કોર્સ વિશે", "कोर्स के बारे में"],
    "Batch Enquiry": ["બેચ વિશે", "बैच के बारे में"],
    "Fees Enquiry": ["ફી વિશે", "फीस के बारे में"],
    "Demo Class": ["ડેમો ક્લાસ", "डेमो क्लास"],
    "Lecture Booking": ["લેક્ચર બુકિંગ", "लेक्चर बुकिंग"],
    "Other": ["અન્ય", "अन्य"],
    "Message": ["સંદેશ", "संदेश"],
    "Write your enquiry...": ["તમારો પ્રશ્ન લખો...", "अपना सवाल लिखें..."],
    "Explore": ["જાણો –", "जानें –"],
    "Learn more about our courses and learning formats.": ["અમારા કોર્સ અને બેચ વિશે વધુ જાણો.", "हमारे कोर्स और बैच के बारे में और जानें।"],
    "View Courses": ["કોર્સ જુઓ", "कोर्स देखें"],
    "View Batches": ["બેચ જુઓ", "बैच देखें"],
    "Book a Demo Class": ["ડેમો ક્લાસ બુક કરો", "डेमो क्लास बुक करें"],
    "Submit your details and let": ["તમારી વિગતો મોકલો, જેથી", "अपनी जानकारी भेजें, ताकि"],
    "Yadav Group & Personal Tuition understand your learning requirements.": ["યાદવ ગ્રુપ & પર્સનલ ટ્યુશન તમારી જરૂરિયાતો સમજી શકે.", "यादव ग्रुप & पर्सनल ट्यूशन आपकी ज़रूरतें समझ सके।"],
    "Demo Class Request": ["ડેમો ક્લાસ માટે વિનંતી", "डेमो क्लास अनुरोध"],
    "Please provide the student's details below.": ["નીચે વિદ્યાર્થીની વિગતો ભરો.", "नीचे छात्र की जानकारी भरें।"],
    "Board": ["બોર્ડ", "बोर्ड"],
    "Select Board": ["બોર્ડ પસંદ કરો", "बोर्ड चुनें"],
    "Not Applicable": ["લાગુ પડતું નથી", "लागू नहीं"],
    "Course / Preparation": ["કોર્સ / તૈયારી", "कोर्स / तैयारी"],
    "Select Course": ["કોર્સ પસંદ કરો", "कोर्स चुनें"],
    "School Coaching": ["શાળા કોચિંગ", "स्कूल कोचिंग"],
    "11–12 Science - Group A": ["ધો. 11–12 સાયન્સ - ગ્રુપ A", "कक्षा 11–12 साइंस - ग्रुप A"],
    "11–12 Science - Group B": ["ધો. 11–12 સાયન્સ - ગ્રુપ B", "कक्षा 11–12 साइंस - ग्रुप B"],
    "Preferred Learning Format": ["પસંદગીની બેચ", "पसंदीदा बैच"],
    "Select Learning Format": ["બેચ પસંદ કરો", "बैच चुनें"],
    "Tell us about the student's learning requirements...": ["વિદ્યાર્થીની જરૂરિયાતો વિશે જણાવો...", "छात्र की ज़रूरतों के बारे में बताएँ..."],
    "Send demo request on WhatsApp": ["WhatsApp પર ડેમો વિનંતી મોકલો", "WhatsApp पर डेमो अनुरोध भेजें"],
    "Need More Information?": ["વધુ માહિતી જોઈએ છે?", "और जानकारी चाहिए?"],
    "If you have questions about courses, batches or fees, contact": ["કોર્સ, બેચ કે ફી વિશે પ્રશ્ન હોય તો સંપર્ક કરો –", "कोर्स, बैच या फीस के बारे में सवाल हों तो संपर्क करें –"],
    "Request a lecture according to the student's academic requirements and preferred schedule.": ["વિદ્યાર્થીની જરૂરિયાત અને અનુકૂળ સમય મુજબ લેક્ચર માટે વિનંતી કરો.", "छात्र की ज़रूरत और सुविधाजनक समय के अनुसार लेक्चर का अनुरोध करें।"],
    "Book a Lecture": ["લેક્ચર બુક કરો", "लेक्चर बुक करें"],
    "Fill in the details below to submit a lecture request.": ["લેક્ચર માટે વિનંતી કરવા નીચેની વિગતો ભરો.", "लेक्चर का अनुरोध करने के लिए नीचे जानकारी भरें।"],
    "Select Subject": ["વિષય પસંદ કરો", "विषय चुनें"],
    "Mathematics": ["ગણિત", "गणित"],
    "Science": ["વિજ્ઞાન", "विज्ञान"],
    "Physics": ["ફિઝિક્સ", "फिज़िक्स"],
    "Chemistry": ["કેમિસ્ટ્રી", "केमिस्ट्री"],
    "Biology": ["બાયોલોજી", "बायोलॉजी"],
    "Computer Science": ["કમ્પ્યુટર સાયન્સ", "कंप्यूटर साइंस"],
    "Topic / Chapter": ["ટોપિક / પ્રકરણ", "टॉपिक / अध्याय"],
    "Enter topic or chapter": ["ટોપિક અથવા પ્રકરણ લખો", "टॉपिक या अध्याय लिखें"],
    "Preferred Date": ["અનુકૂળ તારીખ", "पसंदीदा तारीख"],
    "Learning Format": ["બેચનો પ્રકાર", "बैच का प्रकार"],
    "Select Format": ["પ્રકાર પસંદ કરો", "प्रकार चुनें"],
    "Enter any additional requirements...": ["બીજી કોઈ જરૂરિયાત હોય તો લખો...", "कोई और ज़रूरत हो तो लिखें..."],
    "Send lecture request on WhatsApp": ["WhatsApp પર લેક્ચર વિનંતી મોકલો", "WhatsApp पर लेक्चर अनुरोध भेजें"],
    "How Lecture Booking Will Work": ["લેક્ચર બુકિંગ કેવી રીતે થશે", "लेक्चर बुकिंग कैसे होगी"],
    "1. Submit Request": ["1. વિનંતી મોકલો", "1. अनुरोध भेजें"],
    "Provide the student's academic and lecture requirements through the booking form.": ["બુકિંગ ફોર્મમાં વિદ્યાર્થી અને લેક્ચરની વિગતો ભરો.", "बुकिंग फ़ॉर्म में छात्र और लेक्चर की जानकारी भरें।"],
    "2. Request Review": ["2. વિનંતીની તપાસ", "2. अनुरोध की जाँच"],
    "The academy can review the requested subject, topic, date and preferred time.": ["અમે વિષય, ટોપિક, તારીખ અને સમય તપાસીએ છીએ.", "हम विषय, टॉपिक, तारीख और समय की जाँच करते हैं।"],
    "3. Confirmation": ["3. પુષ્ટિ", "3. पुष्टि"],
    "The requested lecture can be confirmed according to availability.": ["ઉપલબ્ધતા મુજબ લેક્ચરની પુષ્ટિ કરવામાં આવે છે.", "उपलब्धता के अनुसार लेक्चर की पुष्टि की जाती है।"],
    "Looking for Regular Coaching?": ["નિયમિત કોચિંગ જોઈએ છે?", "नियमित कोचिंग चाहिए?"],
    "Explore our courses and learning formats for regular academic preparation.": ["નિયમિત તૈયારી માટે અમારા કોર્સ અને બેચ જુઓ.", "नियमित तैयारी के लिए हमारे कोर्स और बैच देखें।"],
    "Send demo request": ["ડેમો વિનંતી મોકલો", "डेमो अनुरोध भेजें"],
    "Send enquiry": ["પૂછપરછ મોકલો", "पूछताछ भेजें"],
    "Send lecture request": ["લેક્ચર વિનંતી મોકલો", "लेक्चर अनुरोध भेजें"],
    "Sending…": ["મોકલી રહ્યા છીએ…", "भेज रहे हैं…"],
    "Send on WhatsApp": ["WhatsApp પર મોકલો", "WhatsApp पर भेजें"],
    "We couldn't send your request right now. Please send it on WhatsApp or call 63533 04069.": ["હાલમાં તમારી વિનંતી મોકલી શકાઈ નથી. કૃપા કરીને WhatsApp પર મોકલો અથવા 63533 04069 પર ફોન કરો.", "अभी आपका अनुरोध नहीं भेजा जा सका। कृपया WhatsApp पर भेजें या 63533 04069 पर कॉल करें।"],
    "WhatsApp is opening with your details. Press send there to reach us. You can also call 63533 04069.": ["તમારી વિગતો સાથે WhatsApp ખુલી રહ્યું છે. ત્યાં Send દબાવો. તમે 63533 04069 પર ફોન પણ કરી શકો છો.", "आपकी जानकारी के साथ WhatsApp खुल रहा है। वहाँ Send दबाएँ। आप 63533 04069 पर कॉल भी कर सकते हैं।"],
    "Please check the form and try again.": ["કૃપા કરીને ફોર્મ તપાસીને ફરી પ્રયાસ કરો.", "कृपया फ़ॉर्म जाँचकर फिर से कोशिश करें।"],
    "Thank you! Your enquiry has been received. We will call you soon.": ["આભાર! તમારી પૂછપરછ મળી ગઈ છે. અમે ટૂંક સમયમાં ફોન કરીશું.", "धन्यवाद! आपकी पूछताछ मिल गई है। हम जल्द ही कॉल करेंगे।"],
    "Thank you! Your demo class request has been received. We will call you to fix a time.": ["આભાર! તમારી ડેમો ક્લાસની વિનંતી મળી ગઈ છે. સમય નક્કી કરવા અમે ફોન કરીશું.", "धन्यवाद! आपका डेमो क्लास अनुरोध मिल गया है। समय तय करने के लिए हम कॉल करेंगे।"],
    "Thank you! Your lecture request has been received. We will call you to confirm it.": ["આભાર! તમારી લેક્ચરની વિનંતી મળી ગઈ છે. પુષ્ટિ કરવા અમે ફોન કરીશું.", "धन्यवाद! आपका लेक्चर अनुरोध मिल गया है। पुष्टि के लिए हम कॉल करेंगे।"],
    "Thank you! Your home tuition request has been received. We will call you soon.": ["આભાર! તમારી હોમ ટ્યુશનની વિનંતી મળી ગઈ છે. અમે ટૂંક સમયમાં ફોન કરીશું.", "धन्यवाद! आपका होम ट्यूशन अनुरोध मिल गया है। हम जल्द ही कॉल करेंगे।"],
    "Enter a valid 10-digit Indian mobile number.": ["કૃપા કરીને સાચો 10 અંકનો મોબાઇલ નંબર લખો.", "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।"],
    "Enter a valid email address.": ["કૃપા કરીને સાચો ઈમેલ લખો.", "कृपया सही ईमेल लिखें।"],
    "Lecture date cannot be in the past.": ["લેક્ચરની તારીખ ભૂતકાળની ન હોઈ શકે.", "लेक्चर की तारीख बीते समय की नहीं हो सकती।"],
    "Too many requests. Please wait a few minutes or call us on 63533 04069.": ["ઘણી વિનંતીઓ આવી છે. થોડી મિનિટ રાહ જુઓ અથવા 63533 04069 પર ફોન કરો.", "बहुत सारे अनुरोध आए हैं। कुछ मिनट रुकें या 63533 04069 पर कॉल करें।"],
    "Something went wrong on our side. Please call 63533 04069.": ["અમારી બાજુ કંઈક ખોટું થયું. કૃપા કરીને 63533 04069 પર ફોન કરો.", "हमारी तरफ़ कुछ गड़बड़ हुई। कृपया 63533 04069 पर कॉल करें।"]
    };

    const SKIP = "script, style, noscript, .language-select, .om";
    const originals = new WeakMap();     // text node -> English text
    const placeholders = new WeakMap();  // input -> English placeholder
    let current = "en";
    let observer = null;

    const normalise = (s) => s.replace(/\s+/g, " ").trim();

    function translate(english, lang) {
        if (lang === "en") return english;
        const row = TRANSLATIONS[normalise(english)];
        return row ? row[COLUMN[lang]] : english;
    }

    // Keep the original spacing around the words so the layout doesn't shift
    function withSpacing(original, text) {
        const lead = original.match(/^\s*/)[0];
        const trail = original.match(/\s*$/)[0];
        return lead + text + trail;
    }

    function rememberTextNode(node) {
        if (originals.has(node)) return;
        const text = node.nodeValue;
        if (!text.trim() || !(normalise(text) in TRANSLATIONS)) return;
        if (node.parentElement && node.parentElement.closest(SKIP)) return;
        originals.set(node, text);
    }

    function collect(root) {
        // Make every <option> submit its English text, whatever language is shown
        root.querySelectorAll("option").forEach((option) => {
            if (!option.closest(".language-select") && !option.hasAttribute("value")) {
                option.value = option.textContent.trim();
            }
        });

        root.querySelectorAll("[placeholder]").forEach((el) => {
            if (!placeholders.has(el)) placeholders.set(el, el.getAttribute("placeholder"));
        });

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) rememberTextNode(walker.currentNode);
    }

    function applyTo(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!originals.has(node)) continue;
            const english = originals.get(node);
            const text = withSpacing(english, translate(english, current));
            if (node.nodeValue !== text) node.nodeValue = text;
        }
        root.querySelectorAll("[placeholder]").forEach((el) => {
            if (placeholders.has(el)) el.setAttribute("placeholder", translate(placeholders.get(el), current));
        });
    }

    function setLanguage(lang) {
        if (!LANGS.includes(lang)) lang = "en";
        current = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

        document.documentElement.lang = lang;
        document.querySelectorAll(".language-select").forEach((select) => { select.value = lang; });

        if (lang === "hi") loadHindiFont();

        applyTo(document.body);
        ignoreOwnChanges();
    }

    // The browser reports our own text changes back to us a moment later; drop them
    function ignoreOwnChanges() {
        if (observer) observer.takeRecords();
    }

    // Hindi needs a Devanagari font; load it only when Hindi is chosen
    function loadHindiFont() {
        if (document.getElementById("font-hindi")) return;
        const link = document.createElement("link");
        link.id = "font-hindi";
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@500;600;700&display=swap";
        document.head.appendChild(link);
    }

    function setUpSelectors() {
        const desktop = document.querySelector(".language-select");
        if (!desktop) return;

        // English / ગુજરાતી / हिंदी, in the order they appear
        Array.from(desktop.options).forEach((option, i) => { option.value = LANGS[i] || "en"; });

        // A copy inside the menu, because the header has no room on phones
        const navbar = document.querySelector(".navbar");
        if (navbar && !navbar.querySelector(".language-select")) {
            const wrap = document.createElement("div");
            wrap.className = "nav-language";
            const mobile = desktop.cloneNode(true);
            mobile.setAttribute("aria-label", "Language / ભાષા / भाषा");
            wrap.appendChild(mobile);
            navbar.appendChild(wrap);
        }

        document.querySelectorAll(".language-select").forEach((select) => {
            select.addEventListener("change", () => setLanguage(select.value));
        });
    }

    // Translate text that other scripts add or change after the page loads
    function watch() {
        observer = new MutationObserver((mutations) => {
            const touched = new Set();
            for (const m of mutations) {
                if (m.type === "characterData") {
                    const node = m.target;
                    // the script changed this text: remember the new English
                    if (normalise(node.nodeValue) in TRANSLATIONS) originals.set(node, node.nodeValue);
                    else originals.delete(node);
                    if (node.parentElement) touched.add(node.parentElement);
                } else {
                    m.addedNodes.forEach((n) => {
                        if (n.nodeType === Node.TEXT_NODE) {
                            originals.delete(n);
                            rememberTextNode(n);
                            if (n.parentElement) touched.add(n.parentElement);
                        } else if (n.nodeType === Node.ELEMENT_NODE) {
                            collect(n);
                            touched.add(n);
                        }
                    });
                }
            }
            if (current === "en" || !touched.size) return;
            touched.forEach((el) => applyTo(el));
            ignoreOwnChanges();
        });
        observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    }

    function start() {
        setUpSelectors();
        collect(document.body);
        let saved = "en";
        try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
        setLanguage(saved);
        watch();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
})();
