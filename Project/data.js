let sloksData = [
    {
        "chapter": 2,
        "verse": 47,
        "text": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        "translation": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction."
    },
    {
        "chapter": 2,
        "verse": 48,
        "text": "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
        "translation": "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga."
    },
    {
        "chapter": 1,
        "verse": 30,
        "text": "निमित्तानि च पश्यामि विपरीतानि केशव।\nन च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे॥",
        "translation": "I see adverse omens, O Krishna, and do not foresee any good from killing my own kinsmen in battle."
    },
    {
        "chapter": 2,
        "verse": 47,
        "text": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        "translation": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction."
    },
    {
        "chapter": 3,
        "verse": 16,
        "text": "एवं प्रवर्तितं चक्रं नानुवर्तयतीह य:।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
        "translation": "Arjuna, one who does not follow the wheel of creation set in motion thus, who is devoid of faith and self-indulgent, such a person lives in vain."
    },
    {
        "chapter": 4,
        "verse": 7,
        "text": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        "translation": "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself."
    },
    {
        "chapter": 5,
        "verse": 29,
        "text": "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्।\nसुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥",
        "translation": "Knowing Me as the enjoyer of sacrifices and austerities, the great Lord of all the worlds, and the friend of all beings, he attains peace."
    },
    {
        "chapter": 6,
        "verse": 5,
        "text": "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मन:॥",
        "translation": "Let a person lift himself by himself; let him not degrade himself. For the Self alone is the friend of oneself, and the Self alone is the enemy of oneself."
    },
    {
        "chapter": 7,
        "verse": 7,
        "text": "मत्त: परतरं नान्यत् किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
        "translation": "O Arjuna, there is nothing beyond Me. Like clusters of gems strung on a thread, all this universe is threaded on Me."
    },
    {
        "chapter": 8,
        "verse": 7,
        "text": "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशय:॥",
        "translation": "Therefore, at all times remember Me and fight. With mind and intellect absorbed in Me, you will surely come to Me."
    },
    {
        "chapter": 9,
        "verse": 22,
        "text": "अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        "translation": "To those who are constantly devoted and worship Me with love, I give the understanding by which they can come to Me."
    },
    {
        "chapter": 10,
        "verse": 20,
        "text": "अहमात्मा गुडाकेश सर्वभूताशयस्थित:।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥",
        "translation": "O Arjuna, I am the Self, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings."
    },
    {
        "chapter": 11,
        "verse": 32,
        "text": "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्त:।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिता: प्रत्यनीकेषु योधा:॥",
        "translation": "I am Time, the great destroyer of the world, and I have come here to engage all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain."
    },
    {
        "chapter": 12,
        "verse": 8,
        "text": "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशय:॥",
        "translation": "Fix your mind on Me alone, engage your intellect in Me. Then you will live in Me alone hereafter; there is no doubt."
    },
    
    
];

// Function to add a new slok to sloksData
function addSlok(newSlok) {
    sloksData.push(newSlok);
}

// Function to get all sloks
function getAllSloks() {
    return sloksData;
}

// Export functions to make them accessible from other files
export { addSlok, getAllSloks };






