var comments;

var archivedcomments = [
    {"user":"$system","comment":"Elaruu was deleted on the 16th of february.","replies":[]},
    {"user":"$system","comment":"comments between December 24 and 16 February were not restored","replies":[]},
    {"user":"youDD1","comment":"/svcaanc = so very cool and absolutely not clickbait","replies":[
        {"user":"youDD1","comment":"@youDD1 best tag of all time"}
    ]},
    {"user":"youDD1","comment":"https://scratchstats.com/elaruu/ https://api.scratch.mit.edu/users/elaruu/","replies":[
        {"user":"youDD1","comment":"@youDD1 29th of November 2022"},
        {"user":"percent-15","comment":"@youDD1 29th of October u mean"},
        {"user":"youDD1","comment":"@percent-15 im an idiot :c"},
        {"user":"percent-15","comment":"@youDD1 No"},
        {"user":"youDD1","comment":"@percent-15 kind of"}
    ]},
    {"user":"percent-15","comment":"Ofc it goes inactive as soon as I leave -_-","replies":[
        {"user":"youDD1","comment":"@percent-15 Yeah I had to go for a bit aswell"},
        {"user":"percent-15","comment":"@youDD1 Oh :/"},
        {"user":"youDD1","comment":"@percent-15 yeppers-"}
    ]},
    {"user":"Skewb_ALT","comment":"ok im done i give up","replies":[
        {"user":"youDD1","comment":"@Skewb_ALT give up with what"},
        {"user":"Skewb_ALT","comment":"@youDD1 commenting"},
        {"user":"youDD1","comment":"@Skewb_ALT k"}
    ]},
    {"user":"lavendersnail","comment":"Help me decide what my phone’s Home Screen should look like in 2024: https://scratch.mit.edu/projects/943413735/","replies":[
        {"user":"SteichFam","comment":"@lavendersnail :]"},
        {"user":"SteichFam","comment":"@lavendersnail You could also try Grifftopia again"}
    ]},
    {"user":"youDD1","comment":"The two leaders of this chat are @percent-15 and @SteichFam fight me","replies":[
        {"user":"SteichFam","comment":"@youDD1 I cannot :D"},
        {"user":"youDD1","comment":"@SteichFam good"}
    ]},
    {"user":"percent-15","comment":"Bye gtg","replies":[
        {"user":"SteichFam","comment":"@percent-15 Same i was just checking in!"}
    ]},
    {"user":"SteichFam","comment":":////////////","replies":[
        {"user":"percent-15","comment":"@SteichFam You missed it"},
        {"user":"SteichFam","comment":"@percent-15 The 10K thing? Yeah"},
        {"user":"percent-15","comment":"@SteichFam Yes it’s been very active for the past 2 hours and 40 minutes"},
        {"user":"SteichFam","comment":"@percent-15 Oof :/ I MISS EVERYTHING"},
        {"user":"percent-15","comment":"@SteichFam I miss a lot to :/"},
        {"user":"SteichFam","comment":"@percent-15 lol"}
    ]},
    {"user":"youDD1","comment":"https://scratch.mit.edu/users/elaruu/#comments-XXXXXXXXX XXXXXth message on here /svcaanc","replies":[
        {"user":"youDD1","comment":"@youDD1 https://scratch.mit.edu/users/elaruu/#comments-303753628"}
    ]},
    {"user":"youDD1","comment":"let's say @elaruu passed 10k Messages on @griffpatch","replies":[
        {"user":"percent-15","comment":"@youDD1 What?"},
        {"user":"youDD1","comment":"@percent-15 Comment \"elaruu reached 10k Messages\" on griffpatch"}
    ]},
    {"user":"Xx-Gradient-xX","comment":"Griffpatch has 307719+ unread messages","replies":[
        {"user":"cosmic-peaqh","comment":"@Xx-Gradient-xX ✧ yep."},
        {"user":"youDD1","comment":"@Xx-Gradient-xX yeah that's normal"},
        {"user":"IDRANKMYACOUN","comment":"@Xx-Gradient-xX Comment \"you totally wont get a bsod when you click your messages if you have that much mail"}
    ]},
    {"user":"Skewb_ALT","comment":"guys we need to break out of here","replies":[]},
    {"user":"singasongtoday123","comment":"ohhh i seeee","replies":[]},
    {"user":"HummusMomE","comment":"nooo i missed 10k","replies":[
        {"user":"percent-15","comment":"@HummusMomE So close :("}
    ]},
    {"user":"singasongtoday123","comment":"lolll","replies":[]},
    {"user":"pnikolov-tcsns","comment":"WE DID IT","replies":[]},
    {"user":"cosmic-peaqh","comment":"✧ i'm just alternating between here and gwdfi-","replies":[
        {"user":"percent-15","comment":"@cosmic-peaqh I’m just staying here /gwdfiib"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ gwdfi is not bad :/"},
        {"user":"percent-15","comment":"@cosmic-peaqh “B” stands for boring"},
        {"user":"SteichFam","comment":"@percent-15 Oof I chat there—"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ oh."},
        {"user":"percent-15","comment":"@SteichFam How-"},
        {"user":"SteichFam","comment":"@percent-15 Because I did give up on Grifftopia probably forever"},
        {"user":"percent-15","comment":"@SteichFam You’ll never give up on elaruu, right?"},
        {"user":"SteichFam","comment":"@percent-15 Of course not! I just go there when this place is dead ;D"},
        {"user":"percent-15","comment":"@SteichFam So most of the time"},
        {"user":"SteichFam","comment":"@percent-15 Yeah..."}
    ]},
    {"user":"singasongtoday123","comment":"wait what happening","replies":[
        {"user":"IDRANKMYACOUN","comment":"@singasongtoday123 he reach 10k mail"},
        {"user":"youDD1","comment":"@singasongtoday123 https://api.jamied132.is-a.dev/users/elaruu/messages/count elaruu just passed 10k messages"},
        {"user":"singasongtoday123","comment":"@youDD1 HOW DID U GET THAT LINK"},
        {"user":"singasongtoday123","comment":"@IDRANKMYACOUN yeh i figured that out thanks"},
        {"user":"youDD1","comment":"@singasongtoday123 What? The api is absolutely legal to vist; that's the point of api. It's visible in places if you search (:"},
        {"user":"singasongtoday123","comment":"@youDD1 oh lolsorry"}
    ]},
    {"user":"Xx-Gradient-xX","comment":"how are you guys counting the elaruu comments??","replies":[
        {"user":"IDRANKMYACOUN","comment":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"youDD1","comment":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"percent-15","comment":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"}
    ]},
    {"user":"youDD1","comment":"10000th!","replies":[
        {"user":"percent-15","comment":"@youDD1 Hmm I dunno…"},
        {"user":"youDD1","comment":"@percent-15 NO YOU STOLE ITT"},
        {"user":"Xx-Gradient-xX","comment":"@youDD1 actually, no. 10,008th."},
        {"user":"percent-15","comment":"@youDD1 :)"},
        {"user":"IDRANKMYACOUN","comment":"@youDD1 2 messag"},
        {"user":"singasongtoday123","comment":"@IDRANKMYACOUN what"}
    ]},
    {"user":"percent-15","comment":"PROBABLY 10k MESSAGES!!! _10mil_ _10mil_ _10mil_","replies":[
        {"user":"youDD1","comment":"@percent-15 That's 10000th, just counted using unrefreshed tab exact count. CONGRATS! :') _10mil_"},
        {"user":"percent-15","comment":"@youDD1 Lol"},
        {"user":"btdim1","comment":"@percent-15 Wow! I missed it... :("},
        {"user":"btdim1","comment":"@percent-15 Wow! I missed it... :("},
        {"user":"percent-15","comment":"@btdim1 :("},
        {"user":"youDD1","comment":"@btdim1 poor u"},
        {"user":"btdim1","comment":"@youDD1 ok"}
    ]},
    {"user":"pnikolov-tcsns","comment":"SIX MORE","replies":[]},
    {"user":"cosmic-peaqh","comment":"✧ you guys aren't that bad </3","replies":[
        {"user":"percent-15","comment":"@cosmic-peaqh Ofc /obviraurw"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ what does that tone indicator mean XD"},
        {"user":"percent-15","comment":"@cosmic-peaqh Obviously I’m right and your wrong"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ oookay..."},
        {"user":"youDD1","comment":"@cosmic-peaqh thanks (:"}
    ]},
    {"user":"percent-15","comment":"Gee api takes far too long to update. We’ve probably already reached 10k without knowing","replies":[]},
    {"user":"youDD1","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count SO CLOSE","replies":[]},
    {"user":"pnikolov-tcsns","comment":"message","replies":[
        {"user":"IDRANKMYACOUN","comment":"@pnikolov-tcsns it's this guy"}
    ]},
    {"user":"cosmic-peaqh","comment":"✧ okay, so if people on gwdfi are called gwdfiers, and if people on gaehive are called gaehivians, what are you guys called- (oh, and can't forget the griffpatchers)","replies":[
        {"user":"percent-15","comment":"@cosmic-peaqh Were called elaruuians"},
        {"user":"huntali000","comment":"@cosmic-peaqh elaruuians"},
        {"user":"youDD1","comment":"@cosmic-peaqh elaruuians"},
        {"user":"percent-15","comment":"@cosmic-peaqh This is our official studio https://scratch.mit.edu/studios/34103170/"},
        {"user":"pnikolov-tcsns","comment":"@cosmic-peaqh elaruuians"},
        {"user":"Xx-Gradient-xX","comment":"@cosmic-peaqh I'm a griffpatcher, and for a single weekend I was a gwdfier, but I guess we'd be Elaruunes?"},
        {"user":"IDRANKMYACOUN","comment":"@cosmic-peaqh discοrd mods hating on this person for no reason (not me)"},
        {"user":"cosmic-peaqh","comment":"@IDRANKMYACOUN ✧ which person? /gq"},
        {"user":"IDRANKMYACOUN","comment":"@cosmic-peaqh any"}
    ]},
    {"user":"pnikolov-tcsns","comment":"Close","replies":[]},
    {"user":"percent-15","comment":"Estimated time ‘til 10k: 4 MINS!!!","replies":[]},
    {"user":"pnikolov-tcsns","comment":"So","replies":[]},
    {"user":"pnikolov-tcsns","comment":"PUUUT MESSAGES PEOPLE","replies":[]},
    {"user":"-yoimiyaa","comment":"imagine everyone ditches griffpatch for here, wouldnt mind that","replies":[
        {"user":"percent-15","comment":"@-yoimiyaa Yes"},
        {"user":"youDD1","comment":"@-yoimiyaa yes"}
    ]},
    {"user":"AndrewB1501","comment":"@krakow","replies":[]},
    {"user":"youDD1","comment":"50 more till 10k!!","replies":[]},
    {"user":"AndrewB1501","comment":"Krakow","replies":[]},
    {"user":"Xx-Gradient-xX","comment":"maybe i should get rid of it?","replies":[]},
    {"user":"Xx-Gradient-xX","comment":"my life is kinda mid","replies":[]},
    {"user":"Xx-Gradient-xX","comment":"meh","replies":[]},
    {"user":"VampirCat7","comment":"huh?","replies":[]},
    {"user":"IDRANKMYACOUN","comment":"people hating on this account probably looks like a discοrd mod","replies":[
        {"user":"-yoimiyaa","comment":"@IDRANKMYACOUN fr"},
        {"user":"youDD1","comment":"@IDRANKMYACOUN how did you manage to say that-"},
        {"user":"pnikolov-tcsns","comment":"@IDRANKMYACOUN So true though"},
        {"user":"IDRANKMYACOUN","comment":"@youDD1 Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"},
        {"user":"Xx-Gradient-xX","comment":"@IDRANKMYACOUN WSFFFVBNM? YOU GET MUTED FOR SAYING DAT... processing... lagging... 0-o"},
        {"user":"IDRANKMYACOUN","comment":"@Xx-Gradient-xX I have Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"}
    ]},
    {"user":"AndrewB1501","comment":"@eIaruu","replies":[]},
    {"user":"youDD1","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"user":"-yoimiyaa","comment":"elaruu","replies":[
        {"user":"AndrewB1501","comment":"@-yoimiyaa uurale"}
    ]},
    {"user":"cosmic-peaqh","comment":"✧ gwdfi >> whatever the hell this is. /dkm /mj","replies":[
        {"user":"cosmic-peaqh","comment":"@cosmic-peaqh ✧ (mj means major joke, dkm means don't kill me)"},
        {"user":"youDD1","comment":"@cosmic-peaqh Did you say \"/km\"? Sure!"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ i said /don't/ kill me."},
        {"user":"percent-15","comment":"@cosmic-peaqh Thanks for the explanation"},
        {"user":"AndrewB1501","comment":"@cosmic-peaqh *do \"/mj\""},
        {"user":"cosmic-peaqh","comment":"@AndrewB1501 ✧ huh?"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ you're welcome, i know some people aren't as educated on tone indicators as others."},
        {"user":"youDD1","comment":"@cosmic-peaqh yhyh dw was joking"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ alright XD"},
        {"user":"AndrewB1501","comment":"@cosmic-peaqh remove n't"},
        {"user":"percent-15","comment":"@cosmic-peaqh The only ones I know are /j /srs /sarc /p"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ oh."}
    ]},
    {"user":"percent-15","comment":"65 MORE MESSAGES UNTIL 10k!!!!!!","replies":[
        {"user":"youDD1","comment":"@percent-15 AYOOOO"},
        {"user":"pnikolov-tcsns","comment":"@percent-15 Yaaaaaaaay"},
        {"user":"percent-15","comment":"@youDD1 Wat"},
        {"user":"youDD1","comment":"@percent-15 nice/cool/amazing"}
    ]},
    {"user":"wizardmanmagic","comment":"w elaruu","replies":[]},
    {"user":"wizardmanmagic","comment":"top","replies":[]},
    {"user":"-yoimiyaa","comment":"yall hating on an acc thats not even active","replies":[
        {"user":"youDD1","comment":"@-yoimiyaa ikr why"},
        {"user":"pnikolov-tcsns","comment":"@-yoimiyaa That's a solid point"}
    ]},
    {"user":"Skewb_ALT","comment":"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","replies":[
        {"user":"youDD1","comment":"@Skewb_ALT scratchL (probs nobody will get the reference)"}
    ]},
    {"user":"vollrineVSP1_","comment":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru i","replies":[
        {"user":"huntali000","comment":"@vollrineVSP1_ what did elaruu do wrong?"},
        {"user":"vollrineVSP1_","comment":"@huntali000 I dunno"},
        {"user":"huntali000","comment":"@vollrineVSP1_ @JamieD132"},
        {"user":"vollrineVSP1_","comment":"@huntali000 what do they have to do with this"},
        {"user":"huntali000","comment":"@vollrineVSP1_ The one who started the buisness"},
        {"user":"vollrineVSP1_","comment":"@huntali000 ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}
    ]},
    {"user":"vollrineVSP1_","comment":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru E","replies":[
        {"user":"pnikolov-tcsns","comment":"@vollrineVSP1_ Why bro"},
        {"user":"pnikolov-tcsns","comment":"@vollrineVSP1_ Just why"},
        {"user":"youDD1","comment":"@vollrineVSP1_ bruh"},
        {"user":"Skewb_ALT","comment":"@pnikolov-tcsns let him do it"},
        {"user":"vollrineVSP1_","comment":"@pnikolov-tcsns I dunno"},
        {"user":"pnikolov-tcsns","comment":"@vollrineVSP1_ He’s a loser huh? Then who also is"},
        {"user":"pnikolov-tcsns","comment":"@vollrineVSP1_ GUESS"},
        {"user":"Skewb_ALT","comment":"@pnikolov-tcsns you lol (do not take this seriously)"},
        {"user":"pnikolov-tcsns","comment":"@Skewb_ALT I know"},
        {"user":"Skewb_ALT","comment":"@pnikolov-tcsns guys leave him alone"}
    ]},
    {"user":"-potatopudding","comment":"everyone h @tes you for no reason-","replies":[]},
    {"user":"MagnificentMi-Ann","comment":"why everyone hating on @elaruu","replies":[
        {"user":"youDD1","comment":"@MagnificentMi-Ann because they don't appreciate true greatness :("}
    ]},
    {"user":"pnikolov-tcsns","comment":"Hi","replies":[]},
    {"user":"cosmic-peaqh","comment":"✧ yeah, well- *retreats to gwdfi where you all should be right now* /nf /dkm /nbr /nsrs /hj","replies":[
        {"user":"Mitsukiislost","comment":"@cosmic-peaqh Ew no"},
        {"user":"cosmic-peaqh","comment":"@Mitsukiislost ✧ why, \"ew\" ? /gq"},
        {"user":"Mitsukiislost","comment":"@cosmic-peaqh Can’t ever go there without being called a ‘cringe griffpatcher’"},
        {"user":"percent-15","comment":"@cosmic-peaqh What does nf and dkm and nbr and nsrs mean"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ nf = not forcing, dkm = don't kill me, nbr = no but really, nsrs = not serious."},
        {"user":"-yoimiyaa","comment":"@cosmic-peaqh ew gross"},
        {"user":"youDD1","comment":"@Mitsukiislost relatable"},
        {"user":"cosmic-peaqh","comment":"@Mitsukiislost ✧ oh :/"},
        {"user":"cosmic-peaqh","comment":"@-yoimiyaa ✧ why are you saying that...? /gq"},
        {"user":"-yoimiyaa","comment":"@cosmic-peaqh becuase its crinj"},
        {"user":"percent-15","comment":"@cosmic-peaqh What does gq mean"},
        {"user":"cosmic-peaqh","comment":"@-yoimiyaa ✧ uhh...it's just a chat area, but okay."},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ genuine question :j"},
        {"user":"-yoimiyaa","comment":"@cosmic-peaqh that place is toxic and sensitive"},
        {"user":"percent-15","comment":"@cosmic-peaqh What does :j mean"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ that's just a smile emoticon."},
        {"user":"cosmic-peaqh","comment":"@-yoimiyaa ✧ hmm, not really sensitive. gaehive is more like that."},
        {"user":"-yoimiyaa","comment":"@cosmic-peaqh ive investigated that place for about a year now, i probably know more about it than you. BOTH gaehive and gwdfi are senitive and toxic"},
        {"user":"percent-15","comment":"@cosmic-peaqh Do you know any other / things"},
        {"user":"cosmic-peaqh","comment":"@-yoimiyaa ✧ uhh...okay..."},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ yeah, i do. they're called \"tone indicators\"."},
        {"user":"percent-15","comment":"@cosmic-peaqh I never knew their were so many"},
        {"user":"-yoimiyaa","comment":"@-yoimiyaa have a nice day"},
        {"user":"cosmic-peaqh","comment":"@percent-15 ✧ mhm, there's a lot."},
        {"user":"cosmic-peaqh","comment":"@-yoimiyaa ✧ you too <3"}
    ]},
    {"user":"vollrineVSP1_","comment":"elelelelelelelelelelel elaru is an LLLLL","replies":[
        {"user":"percent-15","comment":"@vollrineVSP1_ Wat no"}
    ]},
    {"user":"BIitzy--","comment":"why are yall here","replies":[]},
    {"user":"Lark--","comment":"what","replies":[]},
    {"user":"DRAGONCAT341","comment":"Why is everybody here","replies":[
        {"user":"cosmic-peaqh","comment":"@DRAGONCAT341 ✧ ikr."},
        {"user":"youDD1","comment":"@DRAGONCAT341 bc cool"},
        {"user":"percent-15","comment":"@DRAGONCAT341 Because elaruu"}
    ]},
    {"user":"cosmic-peaqh","comment":"✧ go to gwdfi.. NOW!!11!!","replies":[
        {"user":"youDD1","comment":"@cosmic-peaqh no thanks"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ it's more active than this."},
        {"user":"youDD1","comment":"@cosmic-peaqh so"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ ...it's easier to socialize."},
        {"user":"youDD1","comment":"@cosmic-peaqh a smaller community makes less toxic things happen (no offence - GWDFI is great too)"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ fair enough."},
        {"user":"youDD1","comment":"@cosmic-peaqh yh sorry"},
        {"user":"cosmic-peaqh","comment":"@youDD1 ✧ it's fine. do as you please :j"}
    ]},
    {"user":"youDD1","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"user":"Skewb_ALT","comment":"the new griffpatch","replies":[]},
    {"user":"KingRhoamKingRhoam","comment":"yoo hoo?","replies":[]},
    {"user":"Skewb_ALT","comment":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"user":"Windsong2","comment":"Go back to gwdfi","replies":[
        {"user":"youDD1","comment":"@Windsong2 no"}
    ]},
    {"user":"glass_foxes","comment":"why do yall want gwdfi over here?","replies":[
        {"user":"percent-15","comment":"@glass_foxes Because everyone's leaving :(("}
    ]},
    {"user":"-yoimiyaa","comment":"lol","replies":[]},
    {"user":"percent-15","comment":"WHERE IS EVERYONE?!?","replies":[
        {"user":"KingRhoamKingRhoam","comment":"@percent-15 IM HERE"},
        {"user":"Skewb_ALT","comment":"@percent-15 any way vote my pfp https://scratch.mit.edu/projects/943877826/"},
        {"user":"percent-15","comment":"@KingRhoamKingRhoam Yey"}
    ]},
    {"user":"percent-15","comment":"9857 yey","replies":[]},
    {"user":"percent-15","comment":"First in 2 mins ☠️☠️☠️","replies":[]},
    {"user":"Skewb_ALT","comment":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"user":"percent-15","comment":"WHERE IS EVERYONE?!?","replies":[
        {"user":"youDD1","comment":"@percent-15 Woah people are talking about elaruu on Gwdfi now as well, and yester day we got someone say it on sosc… yey"},
        {"user":"percent-15","comment":"@youDD1 sosc"},
        {"user":"youDD1","comment":"@percent-15 Scratch object show community"},
        {"user":"percent-15","comment":"@youDD1 https://scratch.mit.edu/studios/26515825/"}
    ]},
    {"user":"Annabeth369","comment":"*materializes* what is this mystical place","replies":[]},
    {"user":"Skewb_ALT","comment":"bruuuuuuuuuuuuuuuuuuuuuh","replies":[]},
    {"user":"evegau","comment":"I was teleported here from GWDFI. What is this place?","replies":[
        {"user":"percent-15","comment":"@evegau @elaruu; a chat room"},
        {"user":"percent-15","comment":"@evegau That’s rarely active :("},
        {"user":"evegau","comment":"@percent-15 Okay, I may drop in sometimes"}
    ]},
    {"user":"percent-15","comment":"Someone leaves, and 2 more people arrive… perfect!","replies":[]},
    {"user":"Skewb_ALT","comment":"whats going on were am i","replies":[
        {"user":"percent-15","comment":"@Skewb_ALT Elaruu"},	
        {"user":"Skewb_ALT","comment":"@percent-15 what the"},
        {"user":"Skewb_ALT","comment":"@percent-15 is going on"}
    ]},
    {"user":"youDD1","comment":"lets make the longest comment thread on elaruu","replies":[
        {"user":"percent-15","comment":"@youDD1 Ok…."}
    ]},
    {"user":"vollrineVSP1_","comment":"why are we here","replies":[
        {"user":"percent-15","comment":"@vollrineVSP1_ Because here is cool"},
        {"user":"evegau","comment":"@vollrineVSP1_ Good question."},
        {"user":"vollrineVSP1_","comment":"@evegau yea"},
        {"user":"youDD1","comment":"@vollrineVSP1_ because elaruu is slay"},
        {"user":"vollrineVSP1_","comment":"@youDD1 whos elaru"},
        {"user":"youDD1","comment":"@vollrineVSP1_ this profile"}
    ]},
    {"user":"youDD1","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count repost because buried by spam","replies":[]},
    {"user":"KingRhoamKingRhoam","comment":"don't","replies":[
        {"user":"percent-15","comment":"@KingRhoamKingRhoam Ok"}
    ]},
    {"user":"R_2_G","comment":"i'm bored :P","replies":[
        {"user":"percent-15","comment":"@R_2_G :/ we’ll get there without spamming"}
    ]},
    {"user":"percent-15","comment":"Surely this counts as spam","replies":[
        {"user":"R_2_G","comment":"@percent-15 yeh"},
        {"user":"R_2_G","comment":"@percent-15 okay time to leave the chat _emojifadingaway_"},
        {"user":"percent-15","comment":"@R_2_G :( bye!"},
        {"user":"youDD1","comment":"@percent-15 The numbers? Yes"},
        {"user":"percent-15","comment":"@youDD1 Yee"},
        {"user":"percent-15","comment":"@youDD1 Why is your pfp Pato anyway"},
        {"user":"youDD1","comment":"@percent-15 had nothing better in my downloads + it confuses people (I'm a secret account (: )"},
        {"user":"percent-15","comment":"@youDD1 lol I have 100s of pfps saved to my computer; all of pato’s are included"},
        {"user":"youDD1","comment":"@percent-15 could you make a project with them?"},
        {"user":"percent-15","comment":"@youDD1 Ok I’ll do it later"},
        {"user":"youDD1","comment":"@percent-15 ty also unfollow me pls"},
        {"user":"percent-15","comment":"@youDD1 Ok… why?"},
        {"user":"youDD1","comment":"@percent-15 reasons"}
    ]},
    {"user":"R_2_G","comment":"9793","replies":[]},
    {"user":"R_2_G","comment":"9792","replies":[]},
    {"user":"R_2_G","comment":"9791","replies":[]},
    {"user":"R_2_G","comment":"9790","replies":[]},
    {"user":"R_2_G","comment":"9789","replies":[]},
    {"user":"R_2_G","comment":"9788","replies":[]},
    {"user":"percent-15","comment":"#DONT SPAM","replies":[
        {"user":"ThatWasWrong","comment":"@percent-15 do you know"}
    ]},
    {"user":"R_2_G","comment":"9787","replies":[
        {"user":"percent-15","comment":"@R_2_G Approx 1 hour until 10k"}
    ]},
    {"user":"youDD1","comment":"if y'all are spamming I'm moving to griffpatch","replies":[
        {"user":"percent-15","comment":"@youDD1 Oop- I’ll stop"},
        {"user":"huntali000","comment":"@youDD1 same"},
        {"user":"youDD1","comment":"@percent-15 good"},
        {"user":"percent-15","comment":"@youDD1 :)"}
    ]},
    {"user":"huntali000","comment":"EALUR","replies":[
        {"user":"percent-15","comment":"@huntali000 @ealuru"}
    ]},
    {"user":"percent-15","comment":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #pickle :)","replies":[]},
    {"user":"percent-15","comment":"Ye we don’t die","replies":[]},
    {"user":"youDD1","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count also i hate new scratcher comment wait time","replies":[
        {"user":"percent-15","comment":"@youDD1 lol I know"}
    ]},
    {"user":"R_2_G","comment":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"user":"R_2_G","comment":"@R_2_G PLEASE DONT DIEEEEEEEEEEEEEEEEEE"}
    ]},
    {"user":"R_2_G","comment":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"user":"youDD1","comment":"@R_2_G Stop spam or I report"}
    ]},
    {"user":"percent-15","comment":"We can’t give up until 10k! But even then we shouldn’t give up","replies":[]},
    {"user":"KingRhoamKingRhoam","comment":"d","replies":[
        {"user":"R_2_G","comment":"@KingRhoamKingRhoam #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"user":"R_2_G","comment":"@KingRhoamKingRhoam CMON PASTE IT WITH ME"},
        {"user":"KingRhoamKingRhoam","comment":"@R_2_G I don't spam"}
    ]},
    {"user":"percent-15","comment":"Starting to slow down…","replies":[
        {"user":"R_2_G","comment":"@percent-15 #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"user":"percent-15","comment":"@R_2_G YESS!!!"},
        {"user":"R_2_G","comment":"@percent-15 PASTE IT WITH ME"}
    ]},
    {"user":"VXOLET_","comment":"hmm","replies":[]},
    {"user":"percent-15","comment":"F","replies":[]},
    {"user":"youDD1","comment":"f's in the chat for @jamied132","replies":[]},
    {"user":"youDD1","comment":"so ST didn't reopen @elaruu? what if someone hacked it?","replies":[
        {"user":"percent-15","comment":"@youDD1 Well we don’t know that for sure. All we know is it wasn’t @cheddargirl"},
        {"user":"youDD1","comment":"@percent-15 I'll write them an email later asking the devs if they reopened it"},
        {"user":"youDD1","comment":"@percent-15 *devs"},
        {"user":"percent-15","comment":"@youDD1 ‘K"},
        {"user":"youDD1","comment":"@percent-15 I can't believe I corrected my mistake with the same mistake i meant mods"},
        {"user":"percent-15","comment":"@youDD1 XD"}
    ]},
    {"user":"huntali000","comment":"@eiaruu","replies":[
        {"user":"percent-15","comment":"@huntali000 https://scratch.mit.edu/studios/34368349"}
    ]},
    {"user":"R_2_G","comment":"welcomechainsama","replies":[
        {"user":"R_2_G","comment":"@R_2_G Tumajarbisaun"},
        {"user":"R_2_G","comment":"@R_2_G Wifenlooof"},
        {"user":"R_2_G","comment":"@R_2_G Eselifterbraun"},
        {"user":"R_2_G","comment":"@R_2_G Anweculbetugtbaby"},
        {"user":"R_2_G","comment":"@R_2_G Aslonskysrblu"},
        {"user":"R_2_G","comment":"@R_2_G Yuaksoinocenow"},
        {"user":"R_2_G","comment":"@R_2_G Buchyulaidsosun"},
        {"user":"R_2_G","comment":"@R_2_G Wenomechainsama"},
        {"user":"R_2_G","comment":"@R_2_G Wenomechainsama (Sama)"},
        {"user":"R_2_G","comment":"@R_2_G Tumajarbisaun (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G Wifenlooof (Looof)"},
        {"user":"R_2_G","comment":"@R_2_G Eselifterbraun (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G Anweculbetugtbaby"},
        {"user":"R_2_G","comment":"@R_2_G Aslonskysrblu (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G Yuaksoinocenow"},
        {"user":"R_2_G","comment":"@R_2_G Buchyulaidsosun (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G Wenomechainsama"},
        {"user":"R_2_G","comment":"@R_2_G Wenomechainsama (Sama)"},
        {"user":"R_2_G","comment":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G (Looof)"},
        {"user":"R_2_G","comment":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G Sama (Sama)"},
        {"user":"R_2_G","comment":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","comment":"@R_2_G (Looof)"},
        {"user":"R_2_G","comment":"@R_2_G ye ye"}
    ]},
    {"user":"percent-15","comment":"2 minutes of inactivity ☠️ this is a sign that it’s collapsing","replies":[
        {"user":"btdim1","comment":"@percent-15 What do you mean? @elaruu has been inactive for 1 year and 1 month!"},
        {"user":"R_2_G","comment":"@percent-15 no look up there"},
        {"user":"percent-15","comment":"@btdim1 I meant no ones commented for 2 mins :/"}
    ]},
    {"user":"R_2_G","comment":"this is a good chatroom ngl","replies":[
        {"user":"percent-15","comment":"@R_2_G You finally get it"},
        {"user":"R_2_G","comment":"@R_2_G why do i only have 28 followers. WHAT AM I DOING WRONG _veryverydepressedemoji_"},
        {"user":"R_2_G","comment":"@R_2_G @followerspls"},
        {"user":"percent-15","comment":"@R_2_G *29"},
        {"user":"R_2_G","comment":"@percent-15 yey"}
    ]},
    {"user":"percent-15","comment":"289 ‘til 10k!! Expected to get there in 1 hour and 17 minutes","replies":[
        {"user":"youDD1","comment":"@percent-15 wait yours?"}
    ]},
    {"user":"huntali000","comment":"stay stay stay","replies":[
        {"user":"percent-15","comment":"@huntali000 Yes yes yes"}
    ]},
    {"user":"Quandaila","comment":"gg","replies":[
        {"user":"percent-15","comment":"@Quandaila :( bye"}
    ]},
    {"user":"VXOLET_","comment":"This is active","replies":[
        {"user":"percent-15","comment":"@VXOLET_ As is expected of such a great chat room"},
        {"user":"VXOLET_","comment":"@percent-15 Yep"}
    ]},
    {"user":"R_2_G","comment":"@helpme","replies":[]},
    {"user":"Quandaila","comment":"I'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm cool","replies":[]},
    {"user":"R_2_G","comment":"exit","replies":[
        {"user":"percent-15","comment":"@R_2_G Stay!!"},
        {"user":"R_2_G","comment":"@percent-15 @help"},
        {"user":"R_2_G","comment":"@percent-15 @please @help @me @get @out @of @here"},
        {"user":"percent-15","comment":"@R_2_G Why do u need help"},
        {"user":"percent-15","comment":"@R_2_G What’s wrong with this place??"},
        {"user":"R_2_G","comment":"@percent-15 @i @can't @leave"},
        {"user":"R_2_G","comment":"@R_2_G _e_"},
        {"user":"R_2_G","comment":"@R_2_G :((((((((((((((((((((((("},
        {"user":"percent-15","comment":"@R_2_G There’s no need to leave tho"},
        {"user":"R_2_G","comment":"@percent-15 yay"},
        {"user":"Skewb_ALT","comment":"@percent-15 whats going on"}
    ]},
    {"user":"huntali000","comment":"_money_","replies":[
        {"user":"R_2_G","comment":"@huntali000 _rob_"}
    ]},
    {"user":"$system","comment":"comments between December 16 and December 22 were not restored","replies":[]},
    {"user":"Jadafs","comment":"No, no no no NO!","replies":[
        {"user":"percent-15","comment":"@Jadafs Yes, yes yes yes YES!"},
        {"user":"Jadafs","comment":"@percent-15 This place is cursed, and must be DESTROYED!"},
        {"user":"percent-15","comment":"@Jadafs W-why"}
    ]},
    {"user":"Berry154","comment":"but st should really just permanately ban this, ik people like it here and stuff but whoever owns this account didn't allow it to be a chatroom, and it isnt allowed","replies":[
        {"user":"percent-15","comment":"@Berry154 There’s a good chance that their never gonna log in again so they shouldn’t care"},
        {"user":"percent-15","comment":"@Berry154 What the st should really do is just email them"}
    ]},
    {"user":"percent-15","comment":"@elaruu should get to 10k messages by the end of the day","replies":[]},
    {"user":"Voyager_III","comment":"_10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_","replies":[]},
    {"user":"percent-15","comment":"Top _B)_","replies":[]},
    {"user":"-CyberScratcher-","comment":"sure ig","replies":[]},
    {"user":"pato--","comment":"E","replies":[
        {"user":"percent-15","comment":"@pato-- Ě"}
    ]},
    {"user":"sonicthehedgehog859","comment":"@chat_here","replies":[]},
    {"user":"jik_coder","comment":"@Elbrus","replies":[]},
    {"user":"jik_coder","comment":"Elaruu Is back!","replies":[]},
    {"user":"-NintendoProGamer-","comment":"e l a r u u !","replies":[]},
    {"user":"Pipercall_warriors","comment":"Why is everyone spamming this person?","replies":[
        {"user":"-NintendoProGamer-","comment":"@Pipercall_warriors it's a chatroom"}
    ]},
    {"user":"Voyager_III","comment":"ELARUU IS BACK!!! :O","replies":[]},
    {"user":"unmissable","comment":"@griffpatch","replies":[]},
    {"user":"percent-15","comment":"We need to revive this","replies":[]},
    {"user":"percent-15","comment":"Happy @elaruu day everyone!! :)","replies":[
        {"user":"SteichFam","comment":"@percent-15 A good day!"}
    ]},
    {"user":"percent-15","comment":"Top","replies":[]},
    {"user":"unmissable","comment":"#stopgriffpatchcomments →→ @elaruu (2","replies":[]},
    {"user":"unmissable","comment":"#stopgriffpatchcomments →→ @elaruu (1","replies":[
        {"user":"SteichFam","comment":"@unmissable Yes"}
    ]},
    {"user":"-Officer_Kevin-","comment":"WHICH ACCOUNT IS CHEESE MAN ON","replies":[
        {"user":"-Officer_Kevin-","comment":"@-Officer_Kevin- Urh ig I donno if they are a cheese man or a cheese [other gender here]. So erm if your reading this tell me"},
        {"user":"SteichFam","comment":"@-Officer_Kevin- Jamie got network banned, they moved to YouTube, talk to precent 15 about that"},
        {"user":"huntali000","comment":"@SteichFam Wait what's cheese man's YT??"},
        {"user":"SteichFam","comment":"@huntali000 idk talk to precent"}
    ]},
    {"user":"unmissable","comment":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[
        {"user":"unmissable","comment":"@unmissable wow we've been spamming them"}
    ]},
    {"user":"percent-15","comment":"Is @elbrus back aswell?","replies":[
        {"user":"percent-15","comment":"@percent-15 Nope :("}
    ]},
    {"user":"-Cinnamon_Roll-","comment":"OMG YEY","replies":[]},
    {"user":"huntali000","comment":"I wish upon a star that this place will be closed again /j","replies":[
        {"user":"SteichFam","comment":"@huntali000 No"}
    ]},
    {"user":"huntali000","comment":"blink","replies":[]},
    {"user":"_Simulation_Theory_","comment":"ඞ","replies":[]},
    {"user":"_Simulation_Theory_","comment":"the end is nigh","replies":[
        {"user":"SteichFam","comment":"@_Simulation_Theory_ Yes and no!"},
        {"user":"huntali000","comment":"@_Simulation_Theory_ so hurry"}
    ]},
    {"user":"SteichFam","comment":"WE NEED TO REVIVE THIS PLACE!!~","replies":[
        {"user":"percent-15","comment":"@SteichFam Yess"}
    ]},
    {"user":"SteichFam","comment":"Top!!!!!","replies":[]},
    {"user":"$system","comment":"Comments were re-opened on the 15th/16th of December","replies":[]},
    {"user":"$system","comment":"This is where the comments were closed for the first time","replies":[]},
    {"user":"hi-there-_-","comment":"What the heck is going on?","replies":[
        {"user":"pato--","comment":"@hi-there-_- Good question"},
        {"user":"undefinedcow","comment":"@hi-there-_- this is kinda funny"},
        {"user":"Th0r12","comment":"@hi-there-_- Every chat is closinh"},
        {"user":"Quandaila","comment":"@hi-there-_- The comments on @griffpatch got turned off"},
        {"user":"Th0r12","comment":"@hi-there-_- Because we shipped people"},
        {"user":"my-account-haha","comment":"@hi-there-_- uh, us griffpatchers shipped each otheer COUGH COUUUUUUUUUUUUUUUGGGGGGGGGHGFC BHGFCV"}
    ]},
    {"user":"tjb3171","comment":"broooo griffs comments are down","replies":[
        {"user":"Th0r12","comment":"@tjb3171 And @grifatch_tutor and @netheri"}
    ]},
    {"user":"Th0r12","comment":"CALLING ALL GRIFFPATCHERS! WE NEED TO GO TO GWDFI TO CHAT!","replies":[
        {"user":"pato--","comment":"@Th0r12 Gimme the link please"},
        {"user":"Th0r12","comment":"@pato-- I don't know itlol"}
    ]},
    {"user":"Th0r12","comment":"@griifpatch_tutor down and @netheri","replies":[
        {"user":"pato--","comment":"@Th0r12 Griif?"},
        {"user":"hippopotamus_star","comment":"@Th0r12 netheri is down now"}
    ]},
    {"user":"Quandaila","comment":"We need to chat here before the comments get turned off here too","replies":[
        {"user":"Th0r12","comment":"@Quandaila Yes"}
    ]},
    {"user":"Th0r12","comment":"No! Everything is closing, I might go to gwdfi","replies":[]},
    {"user":"pato--","comment":"Did someone ship me while I was inactive? I wanna know :3","replies":[]},
    {"user":"Quandaila","comment":"Well at least we didn't get muted until tomorrow morning. (help)","replies":[]},
    {"user":"TotallyPiperMccloud","comment":"THEY SHUT EVERYTHING DOWN","replies":[]},
    {"user":"TotallyPiperMccloud","comment":"OH NO","replies":[]},
    {"user":"Th0r12","comment":"We are chatting on @netheri !!!!","replies":[
        {"user":"Neon_Parrot","comment":"@Th0r12 They shut down the comments"}
    ]},
    {"user":"THEFURYSNAP","comment":"i think grifftopia shippping shall now be iilegeal","replies":[
        {"user":"teddy-demon","comment":"@THEFURYSNAP yep O____O I never liked that trend anyway lol"},
        {"user":"THEFURYSNAP","comment":"@teddy-demon ye. --> @griffpatch_tutor"},
        {"user":"Quandaila","comment":"@teddy-demon yea"}
    ]},
    {"user":"little_millk","comment":"bro etghhh","replies":[]},
    {"user":"Th0r12","comment":"Comments on griffpatch were shut down!","replies":[
        {"user":"_Ast3r","comment":"@Th0r12 Because of shipping real user together."},
        {"user":"Th0r12","comment":"@_Ast3r Yeh, ik, I think we're going to griffpatch_tutor"},
        {"user":"_Ast3r","comment":"@Th0r12 alr"},
        {"user":"THEFURYSNAP","comment":"@Th0r12 @griffpatch_tutor"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"top ","replies":[]},
    {"user":"TheComputerCrasher","comment":"top ","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@TheComputerCrasher no :)"},
        {"user":"TheUltimateHoodie","comment":"@TheComputerCrasher The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 1"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"top ","replies":[]},
    {"user":"Th0r12","comment":"Top ","replies":[
        {"user":"TheUltimateHoodie","comment":"@Th0r12 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 2"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"top ","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"cya, and nom ","replies":[]},
    {"user":"Hope_In_The_Cross","comment":"I gotta go now, I declare this will be the top comment forever ","replies":[
        {"user":"TheUltimateHoodie","comment":"@Hope_In_The_Cross The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 3"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"portal: @deleted","replies":[]},
    {"user":"Hope_In_The_Cross","comment":"portal: @banned","replies":[
        {"user":"Hope_In_The_Cross","comment":"@Hope_In_The_Cross No one is banned..."},
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross it probably just got deleted"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"portal: @JamieD534","replies":[
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant lol"}
    ]},
    {"user":"Hope_In_The_Cross","comment":"portal: @JamieD132","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"at one point, elaruu will have more followers than griffpatch _B)_","replies":[
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant yes :)"},
        {"user":"ElEvatEd_ElEphant","comment":"@T9-CARV oh no your back. and it seems you've skipped from 21 to 26 lol"},
        {"user":"ElEvatEd_ElEphant","comment":"@T9-CARV well you clearly dont know how to count XD"}
    ]},
    {"user":"Hope_In_The_Cross","comment":"At one point, Elaruu will have more followers than me _B)_","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross yes :)"},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant lol"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"34g5sd32gfc66cf _B)_","replies":[
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant no :) (its telling me i'm spamming now lol)"},
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross lol"}
    ]},
    {"user":"Hope_In_The_Cross","comment":"0oiu9hyugyvfhbjuji;poihougihijop _B)_","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross no :)"}
    ]},
    {"user":"$system","comment":"a lot of comments by spam bots were not restored","replies":[]},
    {"user":"-NintendoProGamer-","comment":"ytyftjytfj","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"FIRST IN 4 HOURS!!!!!","replies":[]},
    {"user":"xxxxxxx-70","comment":"rare username with no numbers and few letters","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@xxxxxxx-70 I got 2 four-letter usernames with no numbers of symbols but the ST deleted them"},
        {"user":"xxxxxxx-70","comment":"@ElEvatEd_ElEphant Sad"}
    ]},
    {"user":"-Rodri","comment":"are we here cuz of spam bots orrr??","replies":[
        {"user":"Hope_In_The_Cross","comment":"@-Rodri or"},
        {"user":"hippopotamus_star","comment":"@-Rodri No this is just some place that @ElEvatEd_ElEphant wishes was like griffpatch's chat"},
        {"user":"-Rodri","comment":"@hippopotamus_star doesn't look like it's working, (i mean, kinda)"},
        {"user":"hippopotamus_star","comment":"@-Rodri it's not. just go to griffpatch's profile thats where everyone is at. nothing much happens here."}
    ]},
    {"user":"lilju12","comment":"first in 4 hours","replies":[]},
    {"user":"404_Gamer","comment":"Hey there. @griffpatch chat died so I went here.","replies":[
        {"user":"sweetskies383-","comment":"@404_Gamer Wdym?"},
        {"user":"404_Gamer","comment":"@sweetskies383- It's good now."}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"First in 10 again","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"First in 10","replies":[]},
    {"user":"SkippyKite","comment":"Helo","replies":[
        {"user":"SkippyKite","comment":"@SkippyKite Wait how did i get here?"},
        {"user":"ElEvatEd_ElEphant","comment":"@SkippyKite Idk how did you get here??"},
        {"user":"SkippyKite","comment":"@ElEvatEd_ElEphant Idk"}
    ]},
    {"user":"Netheri","comment":"Good morning, elaruuians!","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@Netheri NETHERIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!"},
        {"user":"Hope_In_The_Cross","comment":"@Netheri Your pfp!?!??!?!?!?!"},
        {"user":"Netheri","comment":"@Hope_In_The_Cross Yeah, me is changing pfp around a little..."},
        {"user":"Hope_In_The_Cross","comment":"@Netheri what about Christmas?!?!?!?!?"},
        {"user":"Netheri","comment":"@Hope_In_The_Cross Oh, yeah. I switched to the wrong pfp... LOL"},
        {"user":"Hope_In_The_Cross","comment":"@Netheri Oh xD"}
    ]},
    {"user":"theboreduser-_-","comment":"don’t reply","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@theboreduser-_- ok"}
    ]},
    {"user":"Berry154","comment":"ok im going to be honest, this isnt a preferred place for me to stay, i think that griffpatch_tutor is better","replies":[
        {"user":"clutcher1","comment":"@Berry154 griffpatch_tutor"},
        {"user":"clutcher1","comment":"@Berry154 @griffpatch_tutor"},
        {"user":"Berry154","comment":"@clutcher1 i know where his profile is, so please dont reply to me with it"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"i think its safe.... @griffpatch","replies":[]},
    {"user":"ThePersonWhoIsAmogus","comment":"https://scratch.mit.edu/classes/882182/ got the class so report it","replies":[]},
    {"user":"tutumao","comment":"what's so special about this","replies":[
        {"user":"tutumao","comment":"@tutumao Really don't want me to end this like how I ended the Kettle Kingdom huh"},
        {"user":"ElEvatEd_ElEphant","comment":"@tutumao you didnt end kettle kingdom, it just ended because I got banned"}
    ]},
    {"user":"Iliketoscratch111","comment":"i put the new 4g on the jeep","replies":[]},
    {"user":"Iliketoscratch111","comment":"i just realise no one is at griffpatch and they are wasting there time...","replies":[]},
    {"user":"DuckSupporter","comment":"@griffpatch_tutor is better unless its also getting spammed just go there","replies":[]},
    {"user":"ThePersonWhoIsAmogus","comment":"SONAFA","replies":[]},
    {"user":"DuckSupporter","comment":"go to @griffpatch-tutor","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@DuckSupporter 0_0 XD"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"6 pages in 1 minute?!?!","replies":[
        {"user":"Iliketoscratch111","comment":"@ElEvatEd_ElEphant yeah bc 100 accounts"},
        {"user":"Y-a-s-h-i-r-oN-3-N-E","comment":"@ElEvatEd_ElEphant what is going on"},
        {"user":"ElEvatEd_ElEphant","comment":"@Iliketoscratch111 ye :/"},
        {"user":"ElEvatEd_ElEphant","comment":"@Y-a-s-h-i-r-oN-3-N-E spam"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"does anyone know how long its been going for?","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"helo folks","replies":[]},
    {"user":"Hope_In_The_Cross","comment":"THE BOT IS BACK XDDDD","replies":[]},
    {"user":"virtualstudent12345","comment":"I have to be here because griffpatch is getting spammed","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@virtualstudent12345 yes"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"spread the word and liven this place","replies":[
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant Will do!!"},
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross :D thx"},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant np lol!"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant Ima be famous :D"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam ye"},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant ELARUUUUUUUUUUUUUUUUUUU?"},
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross yessssssssssss"},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant xD"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[]},
    {"user":"Clicking_Game","comment":"sjhdsjf","replies":[]},
    {"user":"colorjuice","comment":"Why @elaruu?","replies":[
        {"user":"SteichFam","comment":"@colorjuice I don’t know. Let’s go to @donut"},
        {"user":"VXOLET_Child","comment":"@SteichFam no stay in @elaruu"}
    ]},
    {"user":"$system","comment":"a lot of comments by spam bots were not restored","replies":[]},
    {"user":"$system","comment":"a few comments were not restored","replies":[]},
    {"user":"Hope_In_The_Cross","comment":"first in 5 min?","replies":[]},
    {"user":"pato--","comment":"first in 3 min","replies":[]},
    {"user":"HedwigsHat","comment":"phew","replies":[]},
    {"user":"Mitsukiislost","comment":"second comment in a hour","replies":[]},
    {"user":"_lazybear_-","comment":"first comment in a hour","replies":[
        {"user":"SteichFam","comment":"@_lazybear_- First in 2 min"}
    ]},
    {"user":"elaruuian","comment":"@mitchelldzamko is the first follower","replies":[]},
    {"user":"TheMindScratcher","comment":"May I clarify something — Elbrus and Elaruu are NOT in a war. Apparently, if we advertise chats in @Elaruu, we are stealing @ElEvatEd_ElEphant’s 2 months of hard work and dedication. So, I have agreed to advertise casually on non-chat’s if they allow advertising, perhaps ‘Advertise Here!’ projects. I am waiting for @SteichFam to agree to this, but @Elbrus and @Elaruu are not in a war.","replies":[
        {"user":"SteichFam","comment":"@TheMindScratcher TWO MONTHS?! No way. But I agree: *in magic sparkle signature stuff* ✨"},
        {"user":"SteichFam","comment":"@SteichFam *Laura Wishwalker"}
    ]},
    {"user":"SSSA-","comment":"I have decided to be an elaruuian","replies":[
        {"user":"CocoCat324","comment":"@SSSA- Hoi elaruuian"},
        {"user":"SteichFam","comment":"@SSSA- Kewl"}
    ]},
    {"user":"NewsRealm","comment":"Scratcher war (elaruu vs elbrus) https://scratch.mit.edu/projects/927085346/","replies":[]},
    {"user":"JustMoses12","comment":"First in 1 hour","replies":[]},
    {"user":"umqq","comment":"How's your day, elaruu?","replies":[]},
    {"user":"umqq","comment":"crayon rage","replies":[]},
    {"user":"THEFURYSNAP","comment":"bigSHOT bigSHOT bigSHOOOOT","replies":[]},
    {"user":"NewsRealm","comment":"i'm making news","replies":[
        {"user":"SteichFam","comment":"@NewsRealm Love your reports"}
    ]},
    {"user":"-NintendoProGamer-","comment":"i’m og elaruuian and you’re not haha","replies":[
        {"user":"Hope_In_The_Cross","comment":"@-NintendoProGamer- _B)_"}
    ]},
    {"user":"Th0r12","comment":"https://www.youtube.com/playlist?list=PLC9C7ECF854F62BF9 it's called elaruu!!!!!!","replies":[]},
    {"user":"squirrelygirl123","comment":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"user":"SteichFam","comment":"@squirrelygirl123 It’s a long story. People follow this person for a portal"}
    ]},
    {"user":"HedwigsHat","comment":"imagine if elaruu suddenly became active","replies":[
        {"user":"SteichFam","comment":"@HedwigsHat Lol @elbrus would be shocking if it bécame activer"}
    ]},
    {"user":"Bub2dgh6","comment":"follow me","replies":[]},
    {"user":"BLEB45","comment":"f4f please i followed you","replies":[]},
    {"user":"WorldOfCountries","comment":"(This is the real last comment ever here) why should i comment here? i wait an hour a a comment? this chat is dead and not active, so cya guys.","replies":[
        {"user":"SteichFam","comment":"@WorldOfCountries @griffpatch is slightly worse"},
        {"user":"ske-ater","comment":"@WorldOfCountries don't people sleep and eat?? im confused on your claim"},
        {"user":"TheMindScratcher","comment":"@ske-ater He’s saying that there’s 1 comment an hour here but there’s ~150 comments an hour on Griffpatch"}
    ]},
    {"user":"Jaegxr","comment":"@TheUltimateHoodie is dedicated","replies":[]},
    {"user":"-NintendoProGamer-","comment":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"user":"TheUltimateHoodie","comment":"@-NintendoProGamer- The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 40"}
    ]},
    {"user":"Voyager_III","comment":"*pant* I just got to *pant* the top... my space helmet is running out *pant* of air!","replies":[
        {"user":"TheUltimateHoodie","comment":"@Voyager_III The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 41"},
        {"user":"Voyager_III","comment":"@TheUltimateHoodie Please don't spam :("},
        {"user":"ElEvatEd_ElEphant","comment":"@Voyager_III There’s technically no rules about multiple ads"}
    ]},
    {"user":"WorldOfCountries","comment":"my last comment here is....... yes","replies":[]},
    {"user":"ske-ater","comment":"wait... can anyone hear me up here?","replies":[
        {"user":"TheUltimateHoodie","comment":"@ske-ater The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 42"}
    ]},
    {"user":"TheMindScratcher","comment":"[LAST COMMENT ON ELARUU] Top. See you guys. This place, well it CANNOT be fair. I’m leaving Elbrus in hope of a better chat, maybe better then @griffpatch.","replies":[
        {"user":"ske-ater","comment":"@TheMindScratcher cya"},
        {"user":"SteichFam","comment":"@TheMindScratcher Aww. Can I help?"}
    ]},
    {"user":"ske-ater","comment":"F-finally....","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"Yes the stars are pretty cool","replies":[
        {"user":"TheUltimateHoodie","comment":"@ElEvatEd_ElEphant The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 43"}
    ]},
    {"user":"ske-ater","comment":"Wow! Look at the solar system! Can't you believe it?","replies":[
        {"user":"ske-ater","comment":"@ske-ater I'm setting up shelter here underground. I'm exhausted from that hiking... *snore*"},
        {"user":"ske-ater","comment":"@ske-ater Good... Solar Morning?"},
        {"user":"ske-ater","comment":"@ske-ater I'm digging my own grave!!! I need to stop talking!"},
        {"user":"ElEvatEd_ElEphant","comment":"@ske-ater XD"},
        {"user":"ske-ater","comment":"@ske-ater Welp, I surrender"},
        {"user":"ElEvatEd_ElEphant","comment":"@ske-ater yeyyyyyyyyyyyyy"},
        {"user":"Tendedclub70","comment":"@ElEvatEd_ElEphant AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. HIT THAT STUPID LINKKKKKKKKKKKKKKKKKKKKKKKKKKUHGHGFDSHQEWDWSED https://scratch.mit.edu/projects/926652260 AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHJAI98HFUEWDYGF3BDUEhji @wQBnewIQJubye @d#wihebyrf#newjheybhvn#edybhewHBhdnfjewhyqbhdne"},
        {"user":"TheUltimateHoodie","comment":"@Tendedclub70 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 46"},
        {"user":"Tendedclub70","comment":"@TheUltimateHoodie bruh"}
    ]},
    {"user":"$system","comment":"Comments between november 8 and november 17 were not restored","replies":[]},
    {"user":"MaoZedongze","comment":"Trash chat, delete this mess already.","replies":[]},
    {"user":"News_By_Kamoebas","comment":"S","replies":[]},
    {"user":"News_By_Kamoebas","comment":"A","replies":[]},
    {"user":"News_By_Kamoebas","comment":"V","replies":[]},
    {"user":"News_By_Kamoebas","comment":"E","replies":[
        {"user":"News_By_Kamoebas","comment":"@News_By_Kamoebas ‎"}
    ]},
    {"user":"News_By_Kamoebas","comment":"T","replies":[
        {"user":"DuckSupporter","comment":"@News_By_Kamoebas i will now stay up till 2 am playing super mario maker 2, goodbye"}
    ]},
    {"user":"News_By_Kamoebas","comment":"H","replies":[]},
    {"user":"News_By_Kamoebas","comment":"E","replies":[]},
    {"user":"News_By_Kamoebas","comment":"M","replies":[]},
    {"user":"-NintendoProGamer-","comment":"k","replies":[]},
    {"user":"booogwooogz","comment":"dis is pretty gud","replies":[]},
    {"user":"virtualstudent12345","comment":"Elarrrrruuuuuuuuuuuuu no","replies":[
        {"user":"News_By_Kamoebas","comment":"@virtualstudent12345 frogy chair wiff no faec"}
    ]},
    {"user":"News_By_Kamoebas","comment":"quick question, why do people like this account too much? (i have a grudge on this account because a message about it broke my text chain)","replies":[
        {"user":"Hope_In_The_Cross","comment":"@News_By_Kamoebas Its the best chat place :)"},
        {"user":"btdim1","comment":"@News_By_Kamoebas I don't know ask @ElEvatEd_ElEphant."},
        {"user":"btdim1","comment":"@News_By_Kamoebas It's also active during nighttime (where I'm from)."},
        {"user":"MaoZedongze","comment":"@News_By_Kamoebas Because they are trying to make it like griffpatch keeps failing, its a wannabe, don't use it, use @griffpatch, way better and more active, others agree too"},
        {"user":"MaoZedongze","comment":"@btdim1 No it isn't, I got proof, last active 30 minutes ago per comment, stop lying."},
        {"user":"virtualstudent12345","comment":"@Hope_In_The_Cross Lies"},
        {"user":"News_By_Kamoebas","comment":"@MaoZedongze y e s indeed."},
        {"user":"Hope_In_The_Cross","comment":"@virtualstudent12345 NOOOOOOOOOO"}
    ]},
    {"user":"FollowingFollows","comment":"maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","replies":[]},
    {"user":"MaoZedongze","comment":"Griffpatch has fun projects. this is an empty profile with follows for some reason., just what? and why?","replies":[
        {"user":"Xx_Lily-Shadow_xX","comment":"@MaoZedongze then why are you here? just leave if you hate it child."},
        {"user":"ElEvatEd_ElEphant","comment":"@MaoZedongze leave and n e v e r return"},
        {"user":"MaoZedongze","comment":"@Xx_Lily-Shadow_xX I already told you, learn to read my child"},
        {"user":"btdim1","comment":"@MaoZedongze Because it's Griffpatch's secret Estonian alt :0"},
        {"user":"Xx_Lily-Shadow_xX","comment":"@MaoZedongze your avoiding the question"},
        {"user":"Tancred_Master","comment":"@ElEvatEd_ElEphant Nice, stay here forever in this sad pathetic boring chat, do not comment at griffpatch ever at all"},
        {"user":"ElEvatEd_ElEphant","comment":"@Tancred_Master ok"},
        {"user":"Hope_In_The_Cross","comment":"@MaoZedongze This is XXXXXXXXXXx better :)"}
    ]},
    {"user":"News_By_Kamoebas","comment":"T","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"*interrupts*","replies":[
        {"user":"News_By_Kamoebas","comment":"@ElEvatEd_ElEphant *Dies*"}
    ]},
    {"user":"News_By_Kamoebas","comment":"H","replies":[]},
    {"user":"News_By_Kamoebas","comment":"E","replies":[]},
    {"user":"News_By_Kamoebas","comment":"M","replies":[]},
    {"user":"-NintendoProGamer-","comment":"that mao guy is why your comments are being deleted (2 reports = delete)","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@-NintendoProGamer- yes I know that already but thx"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant np"},
        {"user":"ElEvatEd_ElEphant","comment":"@-NintendoProGamer- worlds fastest reply???"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant skill"},
        {"user":"ElEvatEd_ElEphant","comment":"@-NintendoProGamer- lol"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant yes"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant 11 second reply ☠️☠️☠️"},
        {"user":"ElEvatEd_ElEphant","comment":"@-NintendoProGamer- wow"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant Y"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant i would’ve been <2 seconds but i was commenting too quickly"},
        {"user":"ElEvatEd_ElEphant","comment":"@-NintendoProGamer- oh :/"},
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant yeah"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"report @MaoZedongze","replies":[
        {"user":"-NintendoProGamer-","comment":"@ElEvatEd_ElEphant already done"},
        {"user":"Xx_Lily-Shadow_xX","comment":"@ElEvatEd_ElEphant done that"},
        {"user":"btdim1","comment":"@ElEvatEd_ElEphant Why?"},
        {"user":"ElEvatEd_ElEphant","comment":"@btdim1 innapropriate comments. they are gone now"},
        {"user":"btdim1","comment":"@ElEvatEd_ElEphant Oh."}
    ]},
    {"user":"Jaegxr","comment":"comments = g o n e","replies":[
        {"user":"-NintendoProGamer-","comment":"@Jaegxr real"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"where are my comments going","replies":[
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant Same!! I think someone is reporting them -_-"},
        {"user":"ElEvatEd_ElEphant","comment":"@Hope_In_The_Cross yeah"}
    ]},
    {"user":"Hope_In_The_Cross","comment":"How did my comment get deleted? ...","replies":[
        {"user":"CousinTimmy","comment":"@Hope_In_The_Cross me too"},
        {"user":"Hope_In_The_Cross","comment":"@CousinTimmy Really? What did you say?"},
        {"user":"CousinTimmy","comment":"@Hope_In_The_Cross report those guys lol"},
        {"user":"Hope_In_The_Cross","comment":"@CousinTimmy I feel like someones reporting them because its happened more than once for no reason now..."},
        {"user":"CousinTimmy","comment":"@Hope_In_The_Cross yeah on griffpatch"},
        {"user":"Hope_In_The_Cross","comment":"@CousinTimmy Thats weird and yeah, i'm going to report them!"},
        {"user":"SteichFam","comment":"@Hope_In_The_Cross Boooo"},
        {"user":"Jaegxr","comment":"@SteichFam ty"},
        {"user":"Jaegxr","comment":"@SteichFam for confusing me"},
        {"user":"Hope_In_The_Cross","comment":"@SteichFam Fr lol"}
    ]},
    {"user":"Kayla_emo_sloth","comment":"@griffpatch","replies":[]},
    {"user":"Jaegxr","comment":"Guys Report @Doom-Guy-- and @MaoZedongze they are spreading lies and bullying ppl ect ect","replies":[]},
    {"user":"$system","comment":"Comments on November 6 (late nov 5 to early nov 7) were not restored","replies":[]},
    {"user":"elaruuian","comment":"ELARUU RESPONDED! https://scratch.mit.edu/projects/919219790/","replies":[]},
    {"user":"mariocraft987","comment":"WHO THE HELL IS @elaruu PLS TELL ME!","replies":[
        {"user":"elaruuian","comment":"@mariocraft987 New griffpatch"},
        {"user":"mariocraft987","comment":"@elaruuian cool the next griffpatch"},
        {"user":"elaruuu","comment":"@mariocraft987 Yes."}
    ]},
    {"user":"mariocraft987","comment":"who are you?","replies":[
        {"user":"elaruuu","comment":"@mariocraft987 Who are you?"},
        {"user":"mariocraft987","comment":"@elaruuu I AM my username, Why are you so famous"},
        {"user":"elaruuu","comment":"@mariocraft987 I am famous because a cheese wanted to make me famous. @ProArmadillo made me."}
    ]},
    {"user":"Bub2dgh6","comment":"Hi little kids obsessing over griffpatch ripoff so you back to @griffpatch and become griffpatchers again!","replies":[
        {"user":"btdim1","comment":"@Bub2dgh6 Go to @Chatroom instead."},
        {"user":"eIaruu-","comment":"@Bub2dgh6 no"},
        {"user":"elaruuu","comment":"@Bub2dgh6 Who are you?"},
        {"user":"elaruuian","comment":"@Bub2dgh6 no man"},
        {"user":"elaruuian","comment":"@btdim1 no"},
        {"user":"elaruuian","comment":"@Bub2dgh6 who even ls griffpatch"}
    ]},
    {"user":"AllTheFunStudios","comment":"may i ask the followers of this guy why they are following this guy","replies":[
        {"user":"Hope_In_The_Cross","comment":"@AllTheFunStudios Cause elaruu is awesome _B)_"},
        {"user":"mariocraft987","comment":"@Hope_In_The_Cross who is elaruu"},
        {"user":"Hope_In_The_Cross","comment":"@mariocraft987 This account lol"}
    ]},
    {"user":"mariocraft987","comment":"hello","replies":[]},
    {"user":"btdim1","comment":"There are many @elaruu copycats all of the sudden... very suspicious.","replies":[
        {"user":"Hope_In_The_Cross","comment":"@btdim1 lol"},
        {"user":"elaruuu","comment":"@btdim1 *fans"}
    ]},
    {"user":"_TopHat","comment":"hi","replies":[
        {"user":"mariocraft987","comment":"@_TopHat hello"}
    ]},
    {"user":"Bub2dgh6","comment":"Who is “elaruu”","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"Continue the remix chain https://scratch.mit.edu/projects/919210515/remixtree/","replies":[]},
    {"user":"Bub2dgh6","comment":"?","replies":[]},
    {"user":"elaruuian","comment":"@elaruuer","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"@eiaruuian @elaruuing @eiaruuing","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@ElEvatEd_ElEphant (name snipes up for grabs)"},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant xD"}
    ]},
    {"user":"elaruuian","comment":"ELARUUING","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@elaruuian @elaruuing"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"https://scratch.mit.edu/projects/919216265/ elaruu replied to ME aswell!","replies":[]},
    {"user":"elaruuian","comment":"@ELARUUs-BIGGEST-FAN","replies":[]},
    {"user":"Hope_In_The_Cross","comment":"So many elaruus lol","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"Hi @elaruu!","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@ElEvatEd_ElEphant Oh, hello there, @JamieD132! Your one of my favourite fans! If I could, I would give you a million dollars! _B)_"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Bruh lol"},
        {"user":"ElEvatEd_ElEphant","comment":"@ElEvatEd_ElEphant https://scratch.mit.edu/projects/919216265/ XD"},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher lol. I should have done it on my profile so I could delete it"}
    ]},
    {"user":"TheMindScratcher","comment":"https://scratch.mit.edu/projects/919213054/ ELARUU REPLIED!","replies":[]},
    {"user":"Elaruu1","comment":"lol","replies":[]},
    {"user":"elaruuian","comment":"Elaruu!","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"whoos back? m-mee! :)","replies":[
        {"user":"elaruuu","comment":"@ElEvatEd_ElEphant Hello."},
        {"user":"Hope_In_The_Cross","comment":"@ElEvatEd_ElEphant I just got back rn!"}
    ]},
    {"user":"-NintendoProGamer-","comment":"h","replies":[]},
    {"user":"TheComputerCrasher","comment":"It'd be crazy if this person randomly checked their Scratch account to find all of these messages lol","replies":[
        {"user":"-NintendoProGamer-","comment":"@TheComputerCrasher https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"elaruuu","comment":"@TheComputerCrasher Wow."}
    ]},
    {"user":"KingRhoamKingRhoam","comment":"If only Elaruu responds to messages","replies":[]},
    {"user":"i-am-a-person-123","comment":"very dead","replies":[]},
    {"user":"TheMindScratcher","comment":"Would you, @ElEvatEd_ElEphant, like to ally for The Great Events…?","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher i still hav no idea what the great events are :/"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Grifftopia will be dictated"},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher *googles definition of dictated* by who tho!!?"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Remember the army of 2 people who were about to mass report you?"},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher there was 3 people, and yeah"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Them."},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher Aaand how do they plan on getting in control of us?"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Controlling, Reporting, Bossing…"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant War will happen."},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher ohhh nooo that sounds bad... We should gather an army"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Yes, so far we have…"},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher am I in it?"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Well, do you want to?"},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher yes pls!"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant Okay!"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant If anyone asks, pretend we weren’t here."},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher ok..."}
    ]},
    {"user":"i-am-a-person-123","comment":"elaruu?","replies":[]},
    {"user":"NoEmmy","comment":"#Dead Chat","replies":[
        {"user":"NoEmmy","comment":"@NoEmmy * #DeadChat"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"*activeness*","replies":[]},
    {"user":"1op9yun","comment":"OH NO;;;;","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@1op9yun Ikr it's so dead"}
    ]},
    {"user":"1op9yun","comment":"Dead chat","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@1op9yun Yea :/"},
        {"user":"ElEvatEd_ElEphant","comment":"@1op9yun Have you used your daily ad? Cuz you could advertise it in @griffpatch"},
        {"user":"1op9yun","comment":"@ElEvatEd_ElEphant no?"},
        {"user":"ElEvatEd_ElEphant","comment":"@1op9yun Good :)"}
    ]},
    {"user":"HummusMomE","comment":"elaruu > griffpatch???","replies":[
        {"user":"doggosintown","comment":"@HummusMomE true"},
        {"user":"virtualstudent12345","comment":"@HummusMomE No"}
    ]},
    {"user":"doggosintown","comment":"Look at these random things I found: a ȧ ä ᶏ ɐ ɑ α ɒ ɒ̇ ɒ̈ ꭤ æ æ̇ æ̈ ꜵ ᴀ A 4 ꜭ","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@doggosintown Őķ"},
        {"user":"TheMindScratcher","comment":"@doggosintown Look at these random things I found:"},
        {"user":"doggosintown","comment":"@ElEvatEd_ElEphant ⓨⓐⓨ ⓢⓞⓜⓔⓞⓝⓔ ⓝⓞⓣⓘⓒⓔⓓ"},
        {"user":"doggosintown","comment":"@TheMindScratcher oh wow"},
        {"user":"1op9yun","comment":"@doggosintown 啊 吧从的额发给和就 i看了了；"},
        {"user":"doggosintown","comment":"@1op9yun Ah, from the forehead to and on I looked?? what?"},
        {"user":"1op9yun","comment":"@doggosintown I typed it........ -_-"},
        {"user":"doggosintown","comment":"@1op9yun randomly?"},
        {"user":"1op9yun","comment":"@doggosintown yup but in alphabet"},
        {"user":"doggosintown","comment":"@1op9yun nice"},
        {"user":"EeveeMaster--","comment":"@doggosintown wow"}
    ]},
    {"user":"doggosintown","comment":"qwertyujik","replies":[]},
    {"user":"Jigglypuffcupidcute","comment":"griffpatch better (NO OPINION BASHING)","replies":[
        {"user":"SteichFam","comment":"@Jigglypuffcupidcute I have no opinion #NeutralitiesRule"}
    ]},
    {"user":"Elm0-_-","comment":"How did this page suddenly blow up in popularity","replies":[
        {"user":"SteichFam","comment":"@Elm0-_- IDK"},
        {"user":"KingRhoamKingRhoam","comment":"@Elmo-_- Good questsion"},
        {"user":"elaruuian","comment":"@Elm0-_- some guy sending this guy's user"}
    ]},
    {"user":"milkberry","comment":"N-no....go back to griffpatch...stob...","replies":[
        {"user":"TheMindScratcher","comment":"@milkberry It's fine"},
        {"user":"ElEvatEd_ElEphant","comment":"@milkberry That is your daily Griffpatch ad, no more :)"},
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant At least we get that part of the deal"},
        {"user":"milkberry","comment":"@ElEvatEd_ElEphant Nope, griffpatches profile has the 'daily ad rule' but, @elaruu has no rules, look at the about me and wiwo, see?"},
        {"user":"ElEvatEd_ElEphant","comment":"@milkberry Yeah. I'm not sure if it's an actual rule tho..."}
    ]},
    {"user":"TheMindScratcher","comment":"Ħ","replies":[
        {"user":"SteichFam","comment":"@TheMindScratcher Hi :D"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"Ħelloooooo!","replies":[
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant UGH EVERYONE'S SO INACTIVE"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Yea :( I wish I was allowed to mention them on griffpatches profile more than once, but according to the rule that us elaruuians SOMEHOW agreed to, we can only mention them once each :( have u used your daily mention?"},
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant Just now :("},
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant I wasn't even part of that decision. Ima protest :("},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Ok :) hopefully it works, I just used mine too :/"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Yeah Ik! Apparently @ProArmadillo agreed to one small thing, and then @TheMindScratcher added a bunch of rules and claimed @ProArmadillo agreed to them aswell :("},
        {"user":"SteichFam","comment":"@ElEvatEd_ElEphant WHAT-- I SHOULD HAVE A SAY IN STUFF-- I am always forgotten and overlooked as a griffpatcher"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam YESS WE SHALL FIGHT BACK! WE SHALL PROTEST"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Protest on @TheMindScratcher..."},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Never mind, he closed comments, protest on @griffpatch"},
        {"user":"TheMindScratcher","comment":"@ElEvatEd_ElEphant I know what you’re up to."},
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher Ik, and idc"},
        {"user":"nngr-cno","comment":"@TheMindScratcher Yas TMS. I am on your side. My team of eight+ people and you will DOMINATE"},
        {"user":"TheMindScratcher","comment":"@nngr-cno YAY"},
        {"user":"nngr-cno","comment":"@TheMindScratcher YESSIRR"}
    ]},
    {"user":"SteichFam","comment":"Guys, there's a like 2 hr comment wait between these :cri:","replies":[]},
    {"user":"spongebobsquarpant22","comment":"Top","replies":[]},
    {"user":"SteichFam","comment":"Hello, griffpatchers and elaruuians! Laura Wishwalker (your friendly wizard and food supplier) is here with your twice-daily delivery of requested snacks! Today’s delivery includes Splish, Recess Minis, donuts, Zanthar cake, pie, prime sticks, golden oreos, and oreos. Please enjoy! If you would like to add something to the list, great. Tell me, and I will have your requested food option in tonight’s delivery. If you enjoy your food, please tip me (I take GED). Enjoy!","replies":[
        {"user":"Jigglypuffcupidcute","comment":"@SteichFam Griffpatch's VIP room has infinite of these"},
        {"user":"SteichFam","comment":"@Jigglypuffcupidcute Really? How do I get in?"},
        {"user":"Jigglypuffcupidcute","comment":"@SteichFam ask to join"},
        {"user":"SteichFam","comment":"@Jigglypuffcupidcute Ask who?"},
        {"user":"Jigglypuffcupidcute","comment":"@SteichFam Ask in the studio"},
        {"user":"SteichFam","comment":"@Jigglypuffcupidcute K, I found it. I am food deliverer for the chat rooms here"}
    ]},
    {"user":"SteichFam","comment":"We need to increase commenting on this.","replies":[
        {"user":"GoldenPizza3","comment":"@SteichFam california breeze"},
        {"user":"ElEvatEd_ElEphant","comment":"@SteichFam Ikr :((("}
    ]},
    {"user":"spongebobsquarpant22","comment":"Woohoo","replies":[]},
    {"user":"CousinTimmy","comment":"Comment above me is a fAiLuRe","replies":[
        {"user":"TheBluePortal","comment":"@CousinTimmy well well well"}
    ]},
    {"user":"CousinTimmy","comment":"1 hour","replies":[]},
    {"user":"CousinTimmy","comment":"first in 3 hrs because i am superior","replies":[]},
    {"user":"greatman1111","comment":"i noticed @elaruu has 123 followers","replies":[]},
    {"user":"Netheri","comment":"Good morning, people of earth.","replies":[
        {"user":"CousinTimmy","comment":"@Netheri I am him"},
        {"user":"ElEvatEd_ElEphant","comment":"@Netheri not me"},
        {"user":"grant-mikes-cn","comment":"@Netheri Hey, wsg netheri. notice that you are famous :P"},
        {"user":"Netheri","comment":"@grant-mikes-cn I'm not really that famous. I'm doing fine, just chilling here on scratch. What about you?"},
        {"user":"EmeraldGames4","comment":"@grant-mikes-cn Hello"},
        {"user":"EmeraldGames4","comment":"@grant-mikes-cn Oh wrong person to reply"},
        {"user":"EmeraldGames4","comment":"@Netheri Good morning"}
    ]},
    {"user":"CousinTimmy","comment":"I am the best","replies":[
        {"user":"Yousernaeme","comment":"@CousinTimmy 100% tru you are unbeatable"}
    ]},
    {"user":"SebastianGab123","comment":"@eluwu is better","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@SebastianGab123 @elaruwu also exists now"}
    ]},
    {"user":"-Officer_Kevin-","comment":"Spam bots: robots made of canned meat","replies":[]},
    {"user":"ElEvatEd_ElEphant","comment":"If only :(","replies":[
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant if only what?? D:"},
        {"user":"ElEvatEd_ElEphant","comment":"@alueoa activeness was present"},
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant ah i seee-"}
    ]},
    {"user":"ElEvatEd_ElEphant","comment":"hii!","replies":[
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant hellooo. :)"},
        {"user":"ElEvatEd_ElEphant","comment":"@alueoa Hiii! :)"},
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant How are you!!!!! :D"},
        {"user":"ElEvatEd_ElEphant","comment":"@alueoa Good :D"},
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant that's good :)"},
        {"user":"ElEvatEd_ElEphant","comment":"@alueoa :D what about u?"},
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant I'm doing pretty gooddd thanks for askinggg c:"},
        {"user":"ElEvatEd_ElEphant","comment":"@alueoa np :)"},
        {"user":"alueoa","comment":"@ElEvatEd_ElEphant awh"}
    ]},
    {"user":"Stuffytheslob9","comment":"i like eating my alphabet and reciting my pizza :3","replies":[]},
    {"user":"BlockyFin","comment":"Anyone else know about planetballs","replies":[]},
    {"user":"CocoCat324","comment":"Does anyone else dare challenge my spam abilities?","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@CocoCat324 yes >:)"},
        {"user":"CocoCat324","comment":"@ElEvatEd_ElEphant Hmph"},
        {"user":"CocoCat324","comment":"@ElEvatEd_ElEphant I will spam you later when you are active"}
    ]},
    {"user":"TheMindScratcher","comment":"@griffpatch has, like, 1 comment 5 minutes, I'm moving here for the time being.","replies":[
        {"user":"ElEvatEd_ElEphant","comment":"@TheMindScratcher yay! But this is worse again :("}
    ]}
    ];

































































/*
    function em(x){
        let ex = document.createElement(x);
        return ex;
    }
    function ap(x,y){
        x.appendChild(y);
    }
    var id = 0;
    comments.forEach((com)=>{
        id = id + 1;
        var a = em("li");
        a.className = "top-level-reply";
        var b = em("div");
        b.className = "comment";
        b.setAttribute("data-comment-id", id);
        b.setAttribute("id", "comments-" + id);
        var c = em("div");
        c.className = "actions-wrap";
        var d = em("a");
        d.setAttribute("href","/users/" + com.user);
        d.setAttribute("id","comment-user");
        d.setAttribute("data-comment-user",com.user);
        var e = em("img");
        e.setAttribute("src","/data/users/" + com.user + "/avatar.png");
        e.setAttribute("width","45");
        e.setAttribute("height","45");
        e.className = "avatar";
        var f = em("div");
        f.className = "info";
        var g = em("div");
        g.className = "name";
        var h = em("a");
        h.setAttribute("href","/users/" + com.user);
        h.innerHTML = com.user;
        var i = em("div");
        i.className = "content";
        i.innerHTML = com.comment;
        var j = em("div");
        var k = em("span");
        k.className = "time";
        k.setAttribute("title","exact date");
        k.innerHTML = "how long ago";
        var l = em("a");
        l.className = "reply";
        l.setAttribute("style","display: none;");
        l.setAttribute("href","#null");
        var m = em("span");
        m.className = "reply";
        m.setAttribute("title","reply");
        m.innerHTML = "reply";
        var n = em("div");
        n.setAttribute("data-content","reply-form");
        var o = em("ul");
        o.className = "replies";
        var rid = 0;
        com.replies.forEach((rep)=>{
            rid++;
            var p = em("li");
            p.className = (rid == com.replies.length ? rid > 3 ? com.replies.length == 4 ? "reply lastvisible last": "reply truncated last" : "reply last" :  rid > 3 ? rid == 4 ? "reply lastvisible" : "reply truncated" : "reply");
            var q = em("div");
            q.className = "comment"; 
            q.setAttribute("data-comment-id", id);
            var r = em("div");
            r.className = "actions-wrap";
            var s = em("a");
            s.setAttribute("href","/users/" + rep.user);
            s.setAttribute("id","comment-user");
            s.setAttribute("data-comment-user",rep.user);
            var t = em("img");
            t.setAttribute("src","/data/users/" + rep.user + "/avatar.png");
            t.setAttribute("width","45");
            t.setAttribute("height","45");
            t.className = "avatar";
            var u = em("div");
            u.className = "info";
            var v = em("div");
            v.className = "name";
            var w = em("a");
            w.setAttribute("href","/users/" + rep.user);
            w.innerHTML = rep.user;
            var x = em("div");
            x.className = "content";
            x.innerHTML = rep.comment;
            var y = em("div");
            var z = em("span");
            z.className = "time";
            z.setAttribute("title","exact date");
            z.innerHTML = "how long ago";
            var aa = em("a");
            aa.className = "reply";
            aa.setAttribute("style","display: none;");
            aa.setAttribute("href","#null");
            var ab = em("span");
            ab.className = "reply";
            ab.setAttribute("title","reply");
            ab.innerHTML = "reply";
            var ac = em("div");
            ac.setAttribute("data-content","reply-form");
            ap(o,p);
            ap(p,q);
            ap(q,[r,s,u]);
            ap(s,t);
            ap(u,[v,x,y,ac]);
            ap(v,w);
            ap(y,[z,aa]);
            
            
        });
        var ad = document.querySelector(".comments");
        console.log(o);
        ap(ad,a);
        ap(a,[b,o]);
        ap(b,[c,d,f]);
        ap(d,e);
        ap(f,[g,i,j,n]);
        ap(g,h);
        ap(j,[k,l]);
        ap(l,m);
    });
    */






fetch('https://api.jamied132.workers.dev/users/elaruu/comments').then(com=>com.json()).then(result=>{
        function load_comments(){
        let text = ``;
        let id = 0;
        comments.forEach((com)=>{
            id ++;
            text+= `
            <li class="top-level-reply">
            <div id="comments-`+id+`" class="comment" data-comment-id="`+id+`">
            <div class="actions-wrap"></div>
            <a href="/users/`+com.user+`" id="comment-user" data-comment-user="`+com.user+`"><img class="avatar" src="/data/users/`+com.user+`/avatar.png" width="45" height="45"></a>
            <div class="info">
                <div class="name">
                <a href="/users/`+com.user+`">`+com.user+`</a>
                </div>
                <div class="content">`+com.comment.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>')+`</div>
                <div>
                <span class="time" title="exact date">how long ago</span>
                <a class="reply" style="display: none;" href="#null">
                    <span class="reply" title="reply">reply</span>
                </a>
                </div>
                <div data-content="reply-form"></div>
            </div>
            </div>
            <ul class="replies" data-thread="347700843">
            `;
            rid=0;
            com.replies.forEach((rep)=>{
                rid++;
                id++;
                text+=`
                <li class="`+(rid == com.replies.length ? rid > 3 ? com.replies.length == 4 ? "reply lastvisible last": "reply truncated last" : "reply last" :  rid > 3 ? rid == 4 ? "reply lastvisible" : "reply truncated" : "reply")+`">
                <div id="comments-`+id+`" class="comment" data-comment-id="`+id+`">
                <div class="actions-wrap"></div>
                <a href="/users/`+rep.user+`" id="comment-user" data-comment-user="`+rep.user+`"><img class="avatar" src="/data/users/`+rep.user+`/avatar.png" width="45" height="45"></a>
                <div class="info">
                    <div class="name">
                    <a href="/users/`+rep.user+`">`+rep.user+`</a>
                    </div>
                    <div class="content">`+rep.comment.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>')+`</div>
                    <div>
                    <span class="time" title="exact date">how long ago</span>
                    <a class="reply" style="display: none;" href="#null">
                        <span class="reply" title="reply">reply</span>
                    </a>
                    </div>
                    <div data-content="reply-form"></div>
                </div>
                </div>
                </li>
                `;
                
            });
            text+= `</ul>`;
            if(rid>3 && rid == com.replies.length){
                text+=`<div class="more-replies"><span class="pulldown">See all `+rid+` replies<span class="arrow"> ▼</span></span></div>`;
            }
            text+= `</li>`;
        });
        text+=`<div class="button grey" style="position: relative; left: 47%;" data-control="load-more"><span>Load more</span></div>`
        document.querySelector(".comments").innerHTML = text;



        document.querySelectorAll(".more-replies").forEach((el)=>{
            el.addEventListener("click",()=>{
                
                el.parentElement.querySelectorAll(".reply").forEach((el)=>{
                    el.classList.remove("lastvisible");
                    el.classList.remove("truncated");
                });
                el.remove();
            });
        });
    }
    var comments= result.comments;
    console.log('success');
        comments.forEach(com=>{
        archivedcomments.unshift(com);
    });
    comments = archivedcomments;
    console.log(comments);
    setTimeout(load_comments,3000)

    
})






    
    const text = "@everyone follow @mike.marc now pls lmao";
const replacedText = text.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>');
console.log(replacedText); 
