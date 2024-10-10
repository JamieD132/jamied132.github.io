var comments;

var archivedcomments = [
    {"username":"$system","content":"Elaruu was deleted on the 16th of february.","replies":[]},
    {"username":"$system","content":"comments between December 24 and 16 February were not restored","replies":[]},
    {"username":"youDD1","content":"/svcaanc = so very cool and absolutely not clickbait","replies":[
        {"username":"youDD1","content":"@youDD1 best tag of all time"}
    ]},
    {"username":"youDD1","content":"https://scratchstats.com/elaruu/ https://api.scratch.mit.edu/users/elaruu/","replies":[
        {"username":"youDD1","content":"@youDD1 29th of November 2022"},
        {"username":"percent-15","content":"@youDD1 29th of October u mean"},
        {"username":"youDD1","content":"@percent-15 im an idiot :c"},
        {"username":"percent-15","content":"@youDD1 No"},
        {"username":"youDD1","content":"@percent-15 kind of"}
    ]},
    {"username":"percent-15","content":"Ofc it goes inactive as soon as I leave -_-","replies":[
        {"username":"youDD1","content":"@percent-15 Yeah I had to go for a bit aswell"},
        {"username":"percent-15","content":"@youDD1 Oh :/"},
        {"username":"youDD1","content":"@percent-15 yeppers-"}
    ]},
    {"username":"Skewb_ALT","content":"ok im done i give up","replies":[
        {"username":"youDD1","content":"@Skewb_ALT give up with what"},
        {"username":"Skewb_ALT","content":"@youDD1 commenting"},
        {"username":"youDD1","content":"@Skewb_ALT k"}
    ]},
    {"username":"lavendersnail","content":"Help me decide what my phone’s Home Screen should look like in 2024: https://scratch.mit.edu/projects/943413735/","replies":[
        {"username":"SteichFam","content":"@lavendersnail :]"},
        {"username":"SteichFam","content":"@lavendersnail You could also try Grifftopia again"}
    ]},
    {"username":"youDD1","content":"The two leaders of this chat are @percent-15 and @SteichFam fight me","replies":[
        {"username":"SteichFam","content":"@youDD1 I cannot :D"},
        {"username":"youDD1","content":"@SteichFam good"}
    ]},
    {"username":"percent-15","content":"Bye gtg","replies":[
        {"username":"SteichFam","content":"@percent-15 Same i was just checking in!"}
    ]},
    {"username":"SteichFam","content":":////////////","replies":[
        {"username":"percent-15","content":"@SteichFam You missed it"},
        {"username":"SteichFam","content":"@percent-15 The 10K thing? Yeah"},
        {"username":"percent-15","content":"@SteichFam Yes it’s been very active for the past 2 hours and 40 minutes"},
        {"username":"SteichFam","content":"@percent-15 Oof :/ I MISS EVERYTHING"},
        {"username":"percent-15","content":"@SteichFam I miss a lot to :/"},
        {"username":"SteichFam","content":"@percent-15 lol"}
    ]},
    {"username":"youDD1","content":"https://scratch.mit.edu/users/elaruu/#comments-XXXXXXXXX XXXXXth message on here /svcaanc","replies":[
        {"username":"youDD1","content":"@youDD1 https://scratch.mit.edu/users/elaruu/#comments-303753628"}
    ]},
    {"username":"youDD1","content":"let's say @elaruu passed 10k Messages on @griffpatch","replies":[
        {"username":"percent-15","content":"@youDD1 What?"},
        {"username":"youDD1","content":"@percent-15 Comment \"elaruu reached 10k Messages\" on griffpatch"}
    ]},
    {"username":"Xx-Gradient-xX","content":"Griffpatch has 307719+ unread messages","replies":[
        {"username":"cosmic-peaqh","content":"@Xx-Gradient-xX ✧ yep."},
        {"username":"youDD1","content":"@Xx-Gradient-xX yeah that's normal"},
        {"username":"IDRANKMYACOUN","content":"@Xx-Gradient-xX Comment \"you totally wont get a bsod when you click your messages if you have that much mail"}
    ]},
    {"username":"Skewb_ALT","content":"guys we need to break out of here","replies":[]},
    {"username":"singasongtoday123","content":"ohhh i seeee","replies":[]},
    {"username":"HummusMomE","content":"nooo i missed 10k","replies":[
        {"username":"percent-15","content":"@HummusMomE So close :("}
    ]},
    {"username":"singasongtoday123","content":"lolll","replies":[]},
    {"username":"pnikolov-tcsns","content":"WE DID IT","replies":[]},
    {"username":"cosmic-peaqh","content":"✧ i'm just alternating between here and gwdfi-","replies":[
        {"username":"percent-15","content":"@cosmic-peaqh I’m just staying here /gwdfiib"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ gwdfi is not bad :/"},
        {"username":"percent-15","content":"@cosmic-peaqh “B” stands for boring"},
        {"username":"SteichFam","content":"@percent-15 Oof I chat there—"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ oh."},
        {"username":"percent-15","content":"@SteichFam How-"},
        {"username":"SteichFam","content":"@percent-15 Because I did give up on Grifftopia probably forever"},
        {"username":"percent-15","content":"@SteichFam You’ll never give up on elaruu, right?"},
        {"username":"SteichFam","content":"@percent-15 Of course not! I just go there when this place is dead ;D"},
        {"username":"percent-15","content":"@SteichFam So most of the time"},
        {"username":"SteichFam","content":"@percent-15 Yeah..."}
    ]},
    {"username":"singasongtoday123","content":"wait what happening","replies":[
        {"username":"IDRANKMYACOUN","content":"@singasongtoday123 he reach 10k mail"},
        {"username":"youDD1","content":"@singasongtoday123 https://api.jamied132.is-a.dev/users/elaruu/messages/count elaruu just passed 10k messages"},
        {"username":"singasongtoday123","content":"@youDD1 HOW DID U GET THAT LINK"},
        {"username":"singasongtoday123","content":"@IDRANKMYACOUN yeh i figured that out thanks"},
        {"username":"youDD1","content":"@singasongtoday123 What? The api is absolutely legal to vist; that's the point of api. It's visible in places if you search (:"},
        {"username":"singasongtoday123","content":"@youDD1 oh lolsorry"}
    ]},
    {"username":"Xx-Gradient-xX","content":"how are you guys counting the elaruu comments??","replies":[
        {"username":"IDRANKMYACOUN","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"username":"youDD1","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"username":"percent-15","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"}
    ]},
    {"username":"youDD1","content":"10000th!","replies":[
        {"username":"percent-15","content":"@youDD1 Hmm I dunno…"},
        {"username":"youDD1","content":"@percent-15 NO YOU STOLE ITT"},
        {"username":"Xx-Gradient-xX","content":"@youDD1 actually, no. 10,008th."},
        {"username":"percent-15","content":"@youDD1 :)"},
        {"username":"IDRANKMYACOUN","content":"@youDD1 2 messag"},
        {"username":"singasongtoday123","content":"@IDRANKMYACOUN what"}
    ]},
    {"username":"percent-15","content":"PROBABLY 10k MESSAGES!!! _10mil_ _10mil_ _10mil_","replies":[
        {"username":"youDD1","content":"@percent-15 That's 10000th, just counted using unrefreshed tab exact count. CONGRATS! :') _10mil_"},
        {"username":"percent-15","content":"@youDD1 Lol"},
        {"username":"btdim1","content":"@percent-15 Wow! I missed it... :("},
        {"username":"btdim1","content":"@percent-15 Wow! I missed it... :("},
        {"username":"percent-15","content":"@btdim1 :("},
        {"username":"youDD1","content":"@btdim1 poor u"},
        {"username":"btdim1","content":"@youDD1 ok"}
    ]},
    {"username":"pnikolov-tcsns","content":"SIX MORE","replies":[]},
    {"username":"cosmic-peaqh","content":"✧ you guys aren't that bad </3","replies":[
        {"username":"percent-15","content":"@cosmic-peaqh Ofc /obviraurw"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ what does that tone indicator mean XD"},
        {"username":"percent-15","content":"@cosmic-peaqh Obviously I’m right and your wrong"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ oookay..."},
        {"username":"youDD1","content":"@cosmic-peaqh thanks (:"}
    ]},
    {"username":"percent-15","content":"Gee api takes far too long to update. We’ve probably already reached 10k without knowing","replies":[]},
    {"username":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count SO CLOSE","replies":[]},
    {"username":"pnikolov-tcsns","content":"message","replies":[
        {"username":"IDRANKMYACOUN","content":"@pnikolov-tcsns it's this guy"}
    ]},
    {"username":"cosmic-peaqh","content":"✧ okay, so if people on gwdfi are called gwdfiers, and if people on gaehive are called gaehivians, what are you guys called- (oh, and can't forget the griffpatchers)","replies":[
        {"username":"percent-15","content":"@cosmic-peaqh Were called elaruuians"},
        {"username":"huntali000","content":"@cosmic-peaqh elaruuians"},
        {"username":"youDD1","content":"@cosmic-peaqh elaruuians"},
        {"username":"percent-15","content":"@cosmic-peaqh This is our official studio https://scratch.mit.edu/studios/34103170/"},
        {"username":"pnikolov-tcsns","content":"@cosmic-peaqh elaruuians"},
        {"username":"Xx-Gradient-xX","content":"@cosmic-peaqh I'm a griffpatcher, and for a single weekend I was a gwdfier, but I guess we'd be Elaruunes?"},
        {"username":"IDRANKMYACOUN","content":"@cosmic-peaqh discοrd mods hating on this person for no reason (not me)"},
        {"username":"cosmic-peaqh","content":"@IDRANKMYACOUN ✧ which person? /gq"},
        {"username":"IDRANKMYACOUN","content":"@cosmic-peaqh any"}
    ]},
    {"username":"pnikolov-tcsns","content":"Close","replies":[]},
    {"username":"percent-15","content":"Estimated time ‘til 10k: 4 MINS!!!","replies":[]},
    {"username":"pnikolov-tcsns","content":"So","replies":[]},
    {"username":"pnikolov-tcsns","content":"PUUUT MESSAGES PEOPLE","replies":[]},
    {"username":"-yoimiyaa","content":"imagine everyone ditches griffpatch for here, wouldnt mind that","replies":[
        {"username":"percent-15","content":"@-yoimiyaa Yes"},
        {"username":"youDD1","content":"@-yoimiyaa yes"}
    ]},
    {"username":"AndrewB1501","content":"@krakow","replies":[]},
    {"username":"youDD1","content":"50 more till 10k!!","replies":[]},
    {"username":"AndrewB1501","content":"Krakow","replies":[]},
    {"username":"Xx-Gradient-xX","content":"maybe i should get rid of it?","replies":[]},
    {"username":"Xx-Gradient-xX","content":"my life is kinda mid","replies":[]},
    {"username":"Xx-Gradient-xX","content":"meh","replies":[]},
    {"username":"VampirCat7","content":"huh?","replies":[]},
    {"username":"IDRANKMYACOUN","content":"people hating on this account probably looks like a discοrd mod","replies":[
        {"username":"-yoimiyaa","content":"@IDRANKMYACOUN fr"},
        {"username":"youDD1","content":"@IDRANKMYACOUN how did you manage to say that-"},
        {"username":"pnikolov-tcsns","content":"@IDRANKMYACOUN So true though"},
        {"username":"IDRANKMYACOUN","content":"@youDD1 Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"},
        {"username":"Xx-Gradient-xX","content":"@IDRANKMYACOUN WSFFFVBNM? YOU GET MUTED FOR SAYING DAT... processing... lagging... 0-o"},
        {"username":"IDRANKMYACOUN","content":"@Xx-Gradient-xX I have Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"}
    ]},
    {"username":"AndrewB1501","content":"@eIaruu","replies":[]},
    {"username":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"username":"-yoimiyaa","content":"elaruu","replies":[
        {"username":"AndrewB1501","content":"@-yoimiyaa uurale"}
    ]},
    {"username":"cosmic-peaqh","content":"✧ gwdfi >> whatever the hell this is. /dkm /mj","replies":[
        {"username":"cosmic-peaqh","content":"@cosmic-peaqh ✧ (mj means major joke, dkm means don't kill me)"},
        {"username":"youDD1","content":"@cosmic-peaqh Did you say \"/km\"? Sure!"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ i said /don't/ kill me."},
        {"username":"percent-15","content":"@cosmic-peaqh Thanks for the explanation"},
        {"username":"AndrewB1501","content":"@cosmic-peaqh *do \"/mj\""},
        {"username":"cosmic-peaqh","content":"@AndrewB1501 ✧ huh?"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ you're welcome, i know some people aren't as educated on tone indicators as others."},
        {"username":"youDD1","content":"@cosmic-peaqh yhyh dw was joking"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ alright XD"},
        {"username":"AndrewB1501","content":"@cosmic-peaqh remove n't"},
        {"username":"percent-15","content":"@cosmic-peaqh The only ones I know are /j /srs /sarc /p"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ oh."}
    ]},
    {"username":"percent-15","content":"65 MORE MESSAGES UNTIL 10k!!!!!!","replies":[
        {"username":"youDD1","content":"@percent-15 AYOOOO"},
        {"username":"pnikolov-tcsns","content":"@percent-15 Yaaaaaaaay"},
        {"username":"percent-15","content":"@youDD1 Wat"},
        {"username":"youDD1","content":"@percent-15 nice/cool/amazing"}
    ]},
    {"username":"wizardmanmagic","content":"w elaruu","replies":[]},
    {"username":"wizardmanmagic","content":"top","replies":[]},
    {"username":"-yoimiyaa","content":"yall hating on an acc thats not even active","replies":[
        {"username":"youDD1","content":"@-yoimiyaa ikr why"},
        {"username":"pnikolov-tcsns","content":"@-yoimiyaa That's a solid point"}
    ]},
    {"username":"Skewb_ALT","content":"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","replies":[
        {"username":"youDD1","content":"@Skewb_ALT scratchL (probs nobody will get the reference)"}
    ]},
    {"username":"vollrineVSP1_","content":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru i","replies":[
        {"username":"huntali000","content":"@vollrineVSP1_ what did elaruu do wrong?"},
        {"username":"vollrineVSP1_","content":"@huntali000 I dunno"},
        {"username":"huntali000","content":"@vollrineVSP1_ @JamieD132"},
        {"username":"vollrineVSP1_","content":"@huntali000 what do they have to do with this"},
        {"username":"huntali000","content":"@vollrineVSP1_ The one who started the buisness"},
        {"username":"vollrineVSP1_","content":"@huntali000 ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}
    ]},
    {"username":"vollrineVSP1_","content":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru E","replies":[
        {"username":"pnikolov-tcsns","content":"@vollrineVSP1_ Why bro"},
        {"username":"pnikolov-tcsns","content":"@vollrineVSP1_ Just why"},
        {"username":"youDD1","content":"@vollrineVSP1_ bruh"},
        {"username":"Skewb_ALT","content":"@pnikolov-tcsns let him do it"},
        {"username":"vollrineVSP1_","content":"@pnikolov-tcsns I dunno"},
        {"username":"pnikolov-tcsns","content":"@vollrineVSP1_ He’s a loser huh? Then who also is"},
        {"username":"pnikolov-tcsns","content":"@vollrineVSP1_ GUESS"},
        {"username":"Skewb_ALT","content":"@pnikolov-tcsns you lol (do not take this seriously)"},
        {"username":"pnikolov-tcsns","content":"@Skewb_ALT I know"},
        {"username":"Skewb_ALT","content":"@pnikolov-tcsns guys leave him alone"}
    ]},
    {"username":"-potatopudding","content":"everyone h @tes you for no reason-","replies":[]},
    {"username":"MagnificentMi-Ann","content":"why everyone hating on @elaruu","replies":[
        {"username":"youDD1","content":"@MagnificentMi-Ann because they don't appreciate true greatness :("}
    ]},
    {"username":"pnikolov-tcsns","content":"Hi","replies":[]},
    {"username":"cosmic-peaqh","content":"✧ yeah, well- *retreats to gwdfi where you all should be right now* /nf /dkm /nbr /nsrs /hj","replies":[
        {"username":"Mitsukiislost","content":"@cosmic-peaqh Ew no"},
        {"username":"cosmic-peaqh","content":"@Mitsukiislost ✧ why, \"ew\" ? /gq"},
        {"username":"Mitsukiislost","content":"@cosmic-peaqh Can’t ever go there without being called a ‘cringe griffpatcher’"},
        {"username":"percent-15","content":"@cosmic-peaqh What does nf and dkm and nbr and nsrs mean"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ nf = not forcing, dkm = don't kill me, nbr = no but really, nsrs = not serious."},
        {"username":"-yoimiyaa","content":"@cosmic-peaqh ew gross"},
        {"username":"youDD1","content":"@Mitsukiislost relatable"},
        {"username":"cosmic-peaqh","content":"@Mitsukiislost ✧ oh :/"},
        {"username":"cosmic-peaqh","content":"@-yoimiyaa ✧ why are you saying that...? /gq"},
        {"username":"-yoimiyaa","content":"@cosmic-peaqh becuase its crinj"},
        {"username":"percent-15","content":"@cosmic-peaqh What does gq mean"},
        {"username":"cosmic-peaqh","content":"@-yoimiyaa ✧ uhh...it's just a chat area, but okay."},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ genuine question :j"},
        {"username":"-yoimiyaa","content":"@cosmic-peaqh that place is toxic and sensitive"},
        {"username":"percent-15","content":"@cosmic-peaqh What does :j mean"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ that's just a smile emoticon."},
        {"username":"cosmic-peaqh","content":"@-yoimiyaa ✧ hmm, not really sensitive. gaehive is more like that."},
        {"username":"-yoimiyaa","content":"@cosmic-peaqh ive investigated that place for about a year now, i probably know more about it than you. BOTH gaehive and gwdfi are senitive and toxic"},
        {"username":"percent-15","content":"@cosmic-peaqh Do you know any other / things"},
        {"username":"cosmic-peaqh","content":"@-yoimiyaa ✧ uhh...okay..."},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ yeah, i do. they're called \"tone indicators\"."},
        {"username":"percent-15","content":"@cosmic-peaqh I never knew their were so many"},
        {"username":"-yoimiyaa","content":"@-yoimiyaa have a nice day"},
        {"username":"cosmic-peaqh","content":"@percent-15 ✧ mhm, there's a lot."},
        {"username":"cosmic-peaqh","content":"@-yoimiyaa ✧ you too <3"}
    ]},
    {"username":"vollrineVSP1_","content":"elelelelelelelelelelel elaru is an LLLLL","replies":[
        {"username":"percent-15","content":"@vollrineVSP1_ Wat no"}
    ]},
    {"username":"BIitzy--","content":"why are yall here","replies":[]},
    {"username":"Lark--","content":"what","replies":[]},
    {"username":"DRAGONCAT341","content":"Why is everybody here","replies":[
        {"username":"cosmic-peaqh","content":"@DRAGONCAT341 ✧ ikr."},
        {"username":"youDD1","content":"@DRAGONCAT341 bc cool"},
        {"username":"percent-15","content":"@DRAGONCAT341 Because elaruu"}
    ]},
    {"username":"cosmic-peaqh","content":"✧ go to gwdfi.. NOW!!11!!","replies":[
        {"username":"youDD1","content":"@cosmic-peaqh no thanks"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ it's more active than this."},
        {"username":"youDD1","content":"@cosmic-peaqh so"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ ...it's easier to socialize."},
        {"username":"youDD1","content":"@cosmic-peaqh a smaller community makes less toxic things happen (no offence - GWDFI is great too)"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ fair enough."},
        {"username":"youDD1","content":"@cosmic-peaqh yh sorry"},
        {"username":"cosmic-peaqh","content":"@youDD1 ✧ it's fine. do as you please :j"}
    ]},
    {"username":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"username":"Skewb_ALT","content":"the new griffpatch","replies":[]},
    {"username":"KingRhoamKingRhoam","content":"yoo hoo?","replies":[]},
    {"username":"Skewb_ALT","content":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"username":"Windsong2","content":"Go back to gwdfi","replies":[
        {"username":"youDD1","content":"@Windsong2 no"}
    ]},
    {"username":"glass_foxes","content":"why do yall want gwdfi over here?","replies":[
        {"username":"percent-15","content":"@glass_foxes Because everyone's leaving :(("}
    ]},
    {"username":"-yoimiyaa","content":"lol","replies":[]},
    {"username":"percent-15","content":"WHERE IS EVERYONE?!?","replies":[
        {"username":"KingRhoamKingRhoam","content":"@percent-15 IM HERE"},
        {"username":"Skewb_ALT","content":"@percent-15 any way vote my pfp https://scratch.mit.edu/projects/943877826/"},
        {"username":"percent-15","content":"@KingRhoamKingRhoam Yey"}
    ]},
    {"username":"percent-15","content":"9857 yey","replies":[]},
    {"username":"percent-15","content":"First in 2 mins ☠️☠️☠️","replies":[]},
    {"username":"Skewb_ALT","content":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"username":"percent-15","content":"WHERE IS EVERYONE?!?","replies":[
        {"username":"youDD1","content":"@percent-15 Woah people are talking about elaruu on Gwdfi now as well, and yester day we got someone say it on sosc… yey"},
        {"username":"percent-15","content":"@youDD1 sosc"},
        {"username":"youDD1","content":"@percent-15 Scratch object show community"},
        {"username":"percent-15","content":"@youDD1 https://scratch.mit.edu/studios/26515825/"}
    ]},
    {"username":"Annabeth369","content":"*materializes* what is this mystical place","replies":[]},
    {"username":"Skewb_ALT","content":"bruuuuuuuuuuuuuuuuuuuuuh","replies":[]},
    {"username":"evegau","content":"I was teleported here from GWDFI. What is this place?","replies":[
        {"username":"percent-15","content":"@evegau @elaruu; a chat room"},
        {"username":"percent-15","content":"@evegau That’s rarely active :("},
        {"username":"evegau","content":"@percent-15 Okay, I may drop in sometimes"}
    ]},
    {"username":"percent-15","content":"Someone leaves, and 2 more people arrive… perfect!","replies":[]},
    {"username":"Skewb_ALT","content":"whats going on were am i","replies":[
        {"username":"percent-15","content":"@Skewb_ALT Elaruu"},	
        {"username":"Skewb_ALT","content":"@percent-15 what the"},
        {"username":"Skewb_ALT","content":"@percent-15 is going on"}
    ]},
    {"username":"youDD1","content":"lets make the longest comment thread on elaruu","replies":[
        {"username":"percent-15","content":"@youDD1 Ok…."}
    ]},
    {"username":"vollrineVSP1_","content":"why are we here","replies":[
        {"username":"percent-15","content":"@vollrineVSP1_ Because here is cool"},
        {"username":"evegau","content":"@vollrineVSP1_ Good question."},
        {"username":"vollrineVSP1_","content":"@evegau yea"},
        {"username":"youDD1","content":"@vollrineVSP1_ because elaruu is slay"},
        {"username":"vollrineVSP1_","content":"@youDD1 whos elaru"},
        {"username":"youDD1","content":"@vollrineVSP1_ this profile"}
    ]},
    {"username":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count repost because buried by spam","replies":[]},
    {"username":"KingRhoamKingRhoam","content":"don't","replies":[
        {"username":"percent-15","content":"@KingRhoamKingRhoam Ok"}
    ]},
    {"username":"R_2_G","content":"i'm bored :P","replies":[
        {"username":"percent-15","content":"@R_2_G :/ we’ll get there without spamming"}
    ]},
    {"username":"percent-15","content":"Surely this counts as spam","replies":[
        {"username":"R_2_G","content":"@percent-15 yeh"},
        {"username":"R_2_G","content":"@percent-15 okay time to leave the chat _emojifadingaway_"},
        {"username":"percent-15","content":"@R_2_G :( bye!"},
        {"username":"youDD1","content":"@percent-15 The numbers? Yes"},
        {"username":"percent-15","content":"@youDD1 Yee"},
        {"username":"percent-15","content":"@youDD1 Why is your pfp Pato anyway"},
        {"username":"youDD1","content":"@percent-15 had nothing better in my downloads + it confuses people (I'm a secret account (: )"},
        {"username":"percent-15","content":"@youDD1 lol I have 100s of pfps saved to my computer; all of pato’s are included"},
        {"username":"youDD1","content":"@percent-15 could you make a project with them?"},
        {"username":"percent-15","content":"@youDD1 Ok I’ll do it later"},
        {"username":"youDD1","content":"@percent-15 ty also unfollow me pls"},
        {"username":"percent-15","content":"@youDD1 Ok… why?"},
        {"username":"youDD1","content":"@percent-15 reasons"}
    ]},
    {"username":"R_2_G","content":"9793","replies":[]},
    {"username":"R_2_G","content":"9792","replies":[]},
    {"username":"R_2_G","content":"9791","replies":[]},
    {"username":"R_2_G","content":"9790","replies":[]},
    {"username":"R_2_G","content":"9789","replies":[]},
    {"username":"R_2_G","content":"9788","replies":[]},
    {"username":"percent-15","content":"#DONT SPAM","replies":[
        {"username":"ThatWasWrong","content":"@percent-15 do you know"}
    ]},
    {"username":"R_2_G","content":"9787","replies":[
        {"username":"percent-15","content":"@R_2_G Approx 1 hour until 10k"}
    ]},
    {"username":"youDD1","content":"if y'all are spamming I'm moving to griffpatch","replies":[
        {"username":"percent-15","content":"@youDD1 Oop- I’ll stop"},
        {"username":"huntali000","content":"@youDD1 same"},
        {"username":"youDD1","content":"@percent-15 good"},
        {"username":"percent-15","content":"@youDD1 :)"}
    ]},
    {"username":"huntali000","content":"EALUR","replies":[
        {"username":"percent-15","content":"@huntali000 @ealuru"}
    ]},
    {"username":"percent-15","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #pickle :)","replies":[]},
    {"username":"percent-15","content":"Ye we don’t die","replies":[]},
    {"username":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count also i hate new scratcher comment wait time","replies":[
        {"username":"percent-15","content":"@youDD1 lol I know"}
    ]},
    {"username":"R_2_G","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"username":"R_2_G","content":"@R_2_G PLEASE DONT DIEEEEEEEEEEEEEEEEEE"}
    ]},
    {"username":"R_2_G","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"username":"youDD1","content":"@R_2_G Stop spam or I report"}
    ]},
    {"username":"percent-15","content":"We can’t give up until 10k! But even then we shouldn’t give up","replies":[]},
    {"username":"KingRhoamKingRhoam","content":"d","replies":[
        {"username":"R_2_G","content":"@KingRhoamKingRhoam #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"username":"R_2_G","content":"@KingRhoamKingRhoam CMON PASTE IT WITH ME"},
        {"username":"KingRhoamKingRhoam","content":"@R_2_G I don't spam"}
    ]},
    {"username":"percent-15","content":"Starting to slow down…","replies":[
        {"username":"R_2_G","content":"@percent-15 #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"username":"percent-15","content":"@R_2_G YESS!!!"},
        {"username":"R_2_G","content":"@percent-15 PASTE IT WITH ME"}
    ]},
    {"username":"VXOLET_","content":"hmm","replies":[]},
    {"username":"percent-15","content":"F","replies":[]},
    {"username":"youDD1","content":"f's in the chat for @jamied132","replies":[]},
    {"username":"youDD1","content":"so ST didn't reopen @elaruu? what if someone hacked it?","replies":[
        {"username":"percent-15","content":"@youDD1 Well we don’t know that for sure. All we know is it wasn’t @cheddargirl"},
        {"username":"youDD1","content":"@percent-15 I'll write them an email later asking the devs if they reopened it"},
        {"username":"youDD1","content":"@percent-15 *devs"},
        {"username":"percent-15","content":"@youDD1 ‘K"},
        {"username":"youDD1","content":"@percent-15 I can't believe I corrected my mistake with the same mistake i meant mods"},
        {"username":"percent-15","content":"@youDD1 XD"}
    ]},
    {"username":"huntali000","content":"@eiaruu","replies":[
        {"username":"percent-15","content":"@huntali000 https://scratch.mit.edu/studios/34368349"}
    ]},
    {"username":"R_2_G","content":"welcomechainsama","replies":[
        {"username":"R_2_G","content":"@R_2_G Tumajarbisaun"},
        {"username":"R_2_G","content":"@R_2_G Wifenlooof"},
        {"username":"R_2_G","content":"@R_2_G Eselifterbraun"},
        {"username":"R_2_G","content":"@R_2_G Anweculbetugtbaby"},
        {"username":"R_2_G","content":"@R_2_G Aslonskysrblu"},
        {"username":"R_2_G","content":"@R_2_G Yuaksoinocenow"},
        {"username":"R_2_G","content":"@R_2_G Buchyulaidsosun"},
        {"username":"R_2_G","content":"@R_2_G Wenomechainsama"},
        {"username":"R_2_G","content":"@R_2_G Wenomechainsama (Sama)"},
        {"username":"R_2_G","content":"@R_2_G Tumajarbisaun (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G Wifenlooof (Looof)"},
        {"username":"R_2_G","content":"@R_2_G Eselifterbraun (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G Anweculbetugtbaby"},
        {"username":"R_2_G","content":"@R_2_G Aslonskysrblu (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G Yuaksoinocenow"},
        {"username":"R_2_G","content":"@R_2_G Buchyulaidsosun (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G Wenomechainsama"},
        {"username":"R_2_G","content":"@R_2_G Wenomechainsama (Sama)"},
        {"username":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G (Looof)"},
        {"username":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G Sama (Sama)"},
        {"username":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"username":"R_2_G","content":"@R_2_G (Looof)"},
        {"username":"R_2_G","content":"@R_2_G ye ye"}
    ]},
    {"username":"percent-15","content":"2 minutes of inactivity ☠️ this is a sign that it’s collapsing","replies":[
        {"username":"btdim1","content":"@percent-15 What do you mean? @elaruu has been inactive for 1 year and 1 month!"},
        {"username":"R_2_G","content":"@percent-15 no look up there"},
        {"username":"percent-15","content":"@btdim1 I meant no ones commented for 2 mins :/"}
    ]},
    {"username":"R_2_G","content":"this is a good chatroom ngl","replies":[
        {"username":"percent-15","content":"@R_2_G You finally get it"},
        {"username":"R_2_G","content":"@R_2_G why do i only have 28 followers. WHAT AM I DOING WRONG _veryverydepressedemoji_"},
        {"username":"R_2_G","content":"@R_2_G @followerspls"},
        {"username":"percent-15","content":"@R_2_G *29"},
        {"username":"R_2_G","content":"@percent-15 yey"}
    ]},
    {"username":"percent-15","content":"289 ‘til 10k!! Expected to get there in 1 hour and 17 minutes","replies":[
        {"username":"youDD1","content":"@percent-15 wait yours?"}
    ]},
    {"username":"huntali000","content":"stay stay stay","replies":[
        {"username":"percent-15","content":"@huntali000 Yes yes yes"}
    ]},
    {"username":"Quandaila","content":"gg","replies":[
        {"username":"percent-15","content":"@Quandaila :( bye"}
    ]},
    {"username":"VXOLET_","content":"This is active","replies":[
        {"username":"percent-15","content":"@VXOLET_ As is expected of such a great chat room"},
        {"username":"VXOLET_","content":"@percent-15 Yep"}
    ]},
    {"username":"R_2_G","content":"@helpme","replies":[]},
    {"username":"Quandaila","content":"I'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm cool","replies":[]},
    {"username":"R_2_G","content":"exit","replies":[
        {"username":"percent-15","content":"@R_2_G Stay!!"},
        {"username":"R_2_G","content":"@percent-15 @help"},
        {"username":"R_2_G","content":"@percent-15 @please @help @me @get @out @of @here"},
        {"username":"percent-15","content":"@R_2_G Why do u need help"},
        {"username":"percent-15","content":"@R_2_G What’s wrong with this place??"},
        {"username":"R_2_G","content":"@percent-15 @i @can't @leave"},
        {"username":"R_2_G","content":"@R_2_G _e_"},
        {"username":"R_2_G","content":"@R_2_G :((((((((((((((((((((((("},
        {"username":"percent-15","content":"@R_2_G There’s no need to leave tho"},
        {"username":"R_2_G","content":"@percent-15 yay"},
        {"username":"Skewb_ALT","content":"@percent-15 whats going on"}
    ]},
    {"username":"huntali000","content":"_money_","replies":[
        {"username":"R_2_G","content":"@huntali000 _rob_"}
    ]},
    {"username":"$system","content":"comments between December 16 and December 22 were not restored","replies":[]},
    {"username":"Jadafs","content":"No, no no no NO!","replies":[
        {"username":"percent-15","content":"@Jadafs Yes, yes yes yes YES!"},
        {"username":"Jadafs","content":"@percent-15 This place is cursed, and must be DESTROYED!"},
        {"username":"percent-15","content":"@Jadafs W-why"}
    ]},
    {"username":"Berry154","content":"but st should really just permanately ban this, ik people like it here and stuff but whoever owns this account didn't allow it to be a chatroom, and it isnt allowed","replies":[
        {"username":"percent-15","content":"@Berry154 There’s a good chance that their never gonna log in again so they shouldn’t care"},
        {"username":"percent-15","content":"@Berry154 What the st should really do is just email them"}
    ]},
    {"username":"percent-15","content":"@elaruu should get to 10k messages by the end of the day","replies":[]},
    {"username":"Voyager_III","content":"_10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_","replies":[]},
    {"username":"percent-15","content":"Top _B)_","replies":[]},
    {"username":"-CyberScratcher-","content":"sure ig","replies":[]},
    {"username":"pato--","content":"E","replies":[
        {"username":"percent-15","content":"@pato-- Ě"}
    ]},
    {"username":"sonicthehedgehog859","content":"@chat_here","replies":[]},
    {"username":"jik_coder","content":"@Elbrus","replies":[]},
    {"username":"jik_coder","content":"Elaruu Is back!","replies":[]},
    {"username":"-NintendoProGamer-","content":"e l a r u u !","replies":[]},
    {"username":"Pipercall_warriors","content":"Why is everyone spamming this person?","replies":[
        {"username":"-NintendoProGamer-","content":"@Pipercall_warriors it's a chatroom"}
    ]},
    {"username":"Voyager_III","content":"ELARUU IS BACK!!! :O","replies":[]},
    {"username":"unmissable","content":"@griffpatch","replies":[]},
    {"username":"percent-15","content":"We need to revive this","replies":[]},
    {"username":"percent-15","content":"Happy @elaruu day everyone!! :)","replies":[
        {"username":"SteichFam","content":"@percent-15 A good day!"}
    ]},
    {"username":"percent-15","content":"Top","replies":[]},
    {"username":"unmissable","content":"#stopgriffpatchcomments →→ @elaruu (2","replies":[]},
    {"username":"unmissable","content":"#stopgriffpatchcomments →→ @elaruu (1","replies":[
        {"username":"SteichFam","content":"@unmissable Yes"}
    ]},
    {"username":"-Officer_Kevin-","content":"WHICH ACCOUNT IS CHEESE MAN ON","replies":[
        {"username":"-Officer_Kevin-","content":"@-Officer_Kevin- Urh ig I donno if they are a cheese man or a cheese [other gender here]. So erm if your reading this tell me"},
        {"username":"SteichFam","content":"@-Officer_Kevin- Jamie got network banned, they moved to YouTube, talk to precent 15 about that"},
        {"username":"huntali000","content":"@SteichFam Wait what's cheese man's YT??"},
        {"username":"SteichFam","content":"@huntali000 idk talk to precent"}
    ]},
    {"username":"unmissable","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[
        {"username":"unmissable","content":"@unmissable wow we've been spamming them"}
    ]},
    {"username":"percent-15","content":"Is @elbrus back aswell?","replies":[
        {"username":"percent-15","content":"@percent-15 Nope :("}
    ]},
    {"username":"-Cinnamon_Roll-","content":"OMG YEY","replies":[]},
    {"username":"huntali000","content":"I wish upon a star that this place will be closed again /j","replies":[
        {"username":"SteichFam","content":"@huntali000 No"}
    ]},
    {"username":"huntali000","content":"blink","replies":[]},
    {"username":"_Simulation_Theory_","content":"ඞ","replies":[]},
    {"username":"_Simulation_Theory_","content":"the end is nigh","replies":[
        {"username":"SteichFam","content":"@_Simulation_Theory_ Yes and no!"},
        {"username":"huntali000","content":"@_Simulation_Theory_ so hurry"}
    ]},
    {"username":"SteichFam","content":"WE NEED TO REVIVE THIS PLACE!!~","replies":[
        {"username":"percent-15","content":"@SteichFam Yess"}
    ]},
    {"username":"SteichFam","content":"Top!!!!!","replies":[]},
    {"username":"$system","content":"Comments were re-opened on the 15th/16th of December","replies":[]},
    {"username":"$system","content":"This is where the comments were closed for the first time","replies":[]},
    {"username":"hi-there-_-","content":"What the heck is going on?","replies":[
        {"username":"pato--","content":"@hi-there-_- Good question"},
        {"username":"undefinedcow","content":"@hi-there-_- this is kinda funny"},
        {"username":"Th0r12","content":"@hi-there-_- Every chat is closinh"},
        {"username":"Quandaila","content":"@hi-there-_- The comments on @griffpatch got turned off"},
        {"username":"Th0r12","content":"@hi-there-_- Because we shipped people"},
        {"username":"my-account-haha","content":"@hi-there-_- uh, us griffpatchers shipped each otheer COUGH COUUUUUUUUUUUUUUUGGGGGGGGGHGFC BHGFCV"}
    ]},
    {"username":"tjb3171","content":"broooo griffs comments are down","replies":[
        {"username":"Th0r12","content":"@tjb3171 And @grifatch_tutor and @netheri"}
    ]},
    {"username":"Th0r12","content":"CALLING ALL GRIFFPATCHERS! WE NEED TO GO TO GWDFI TO CHAT!","replies":[
        {"username":"pato--","content":"@Th0r12 Gimme the link please"},
        {"username":"Th0r12","content":"@pato-- I don't know itlol"}
    ]},
    {"username":"Th0r12","content":"@griifpatch_tutor down and @netheri","replies":[
        {"username":"pato--","content":"@Th0r12 Griif?"},
        {"username":"hippopotamus_star","content":"@Th0r12 netheri is down now"}
    ]},
    {"username":"Quandaila","content":"We need to chat here before the comments get turned off here too","replies":[
        {"username":"Th0r12","content":"@Quandaila Yes"}
    ]},
    {"username":"Th0r12","content":"No! Everything is closing, I might go to gwdfi","replies":[]},
    {"username":"pato--","content":"Did someone ship me while I was inactive? I wanna know :3","replies":[]},
    {"username":"Quandaila","content":"Well at least we didn't get muted until tomorrow morning. (help)","replies":[]},
    {"username":"TotallyPiperMccloud","content":"THEY SHUT EVERYTHING DOWN","replies":[]},
    {"username":"TotallyPiperMccloud","content":"OH NO","replies":[]},
    {"username":"Th0r12","content":"We are chatting on @netheri !!!!","replies":[
        {"username":"Neon_Parrot","content":"@Th0r12 They shut down the comments"}
    ]},
    {"username":"THEFURYSNAP","content":"i think grifftopia shippping shall now be iilegeal","replies":[
        {"username":"teddy-demon","content":"@THEFURYSNAP yep O____O I never liked that trend anyway lol"},
        {"username":"THEFURYSNAP","content":"@teddy-demon ye. --> @griffpatch_tutor"},
        {"username":"Quandaila","content":"@teddy-demon yea"}
    ]},
    {"username":"little_millk","content":"bro etghhh","replies":[]},
    {"username":"Th0r12","content":"Comments on griffpatch were shut down!","replies":[
        {"username":"_Ast3r","content":"@Th0r12 Because of shipping real user together."},
        {"username":"Th0r12","content":"@_Ast3r Yeh, ik, I think we're going to griffpatch_tutor"},
        {"username":"_Ast3r","content":"@Th0r12 alr"},
        {"username":"THEFURYSNAP","content":"@Th0r12 @griffpatch_tutor"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"username":"TheComputerCrasher","content":"top ","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@TheComputerCrasher no :)"},
        {"username":"TheUltimateHoodie","content":"@TheComputerCrasher The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 1"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"username":"Th0r12","content":"Top ","replies":[
        {"username":"TheUltimateHoodie","content":"@Th0r12 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 2"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"cya, and nom ","replies":[]},
    {"username":"Hope_In_The_Cross","content":"I gotta go now, I declare this will be the top comment forever ","replies":[
        {"username":"TheUltimateHoodie","content":"@Hope_In_The_Cross The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 3"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"portal: @deleted","replies":[]},
    {"username":"Hope_In_The_Cross","content":"portal: @banned","replies":[
        {"username":"Hope_In_The_Cross","content":"@Hope_In_The_Cross No one is banned..."},
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross it probably just got deleted"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"portal: @JamieD534","replies":[
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant lol"}
    ]},
    {"username":"Hope_In_The_Cross","content":"portal: @JamieD132","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"at one point, elaruu will have more followers than griffpatch _B)_","replies":[
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant yes :)"},
        {"username":"ElEvatEd_ElEphant","content":"@T9-CARV oh no your back. and it seems you've skipped from 21 to 26 lol"},
        {"username":"ElEvatEd_ElEphant","content":"@T9-CARV well you clearly dont know how to count XD"}
    ]},
    {"username":"Hope_In_The_Cross","content":"At one point, Elaruu will have more followers than me _B)_","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yes :)"},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant lol"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"34g5sd32gfc66cf _B)_","replies":[
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant no :) (its telling me i'm spamming now lol)"},
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross lol"}
    ]},
    {"username":"Hope_In_The_Cross","content":"0oiu9hyugyvfhbjuji;poihougihijop _B)_","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross no :)"}
    ]},
    {"username":"$system","content":"a lot of comments by spam bots were not restored","replies":[]},
    {"username":"-NintendoProGamer-","content":"ytyftjytfj","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"FIRST IN 4 HOURS!!!!!","replies":[]},
    {"username":"xxxxxxx-70","content":"rare username with no numbers and few letters","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@xxxxxxx-70 I got 2 four-letter usernames with no numbers of symbols but the ST deleted them"},
        {"username":"xxxxxxx-70","content":"@ElEvatEd_ElEphant Sad"}
    ]},
    {"username":"-Rodri","content":"are we here cuz of spam bots orrr??","replies":[
        {"username":"Hope_In_The_Cross","content":"@-Rodri or"},
        {"username":"hippopotamus_star","content":"@-Rodri No this is just some place that @ElEvatEd_ElEphant wishes was like griffpatch's chat"},
        {"username":"-Rodri","content":"@hippopotamus_star doesn't look like it's working, (i mean, kinda)"},
        {"username":"hippopotamus_star","content":"@-Rodri it's not. just go to griffpatch's profile thats where everyone is at. nothing much happens here."}
    ]},
    {"username":"lilju12","content":"first in 4 hours","replies":[]},
    {"username":"404_Gamer","content":"Hey there. @griffpatch chat died so I went here.","replies":[
        {"username":"sweetskies383-","content":"@404_Gamer Wdym?"},
        {"username":"404_Gamer","content":"@sweetskies383- It's good now."}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"First in 10 again","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"First in 10","replies":[]},
    {"username":"SkippyKite","content":"Helo","replies":[
        {"username":"SkippyKite","content":"@SkippyKite Wait how did i get here?"},
        {"username":"ElEvatEd_ElEphant","content":"@SkippyKite Idk how did you get here??"},
        {"username":"SkippyKite","content":"@ElEvatEd_ElEphant Idk"}
    ]},
    {"username":"Netheri","content":"Good morning, elaruuians!","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@Netheri NETHERIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!"},
        {"username":"Hope_In_The_Cross","content":"@Netheri Your pfp!?!??!?!?!?!"},
        {"username":"Netheri","content":"@Hope_In_The_Cross Yeah, me is changing pfp around a little..."},
        {"username":"Hope_In_The_Cross","content":"@Netheri what about Christmas?!?!?!?!?"},
        {"username":"Netheri","content":"@Hope_In_The_Cross Oh, yeah. I switched to the wrong pfp... LOL"},
        {"username":"Hope_In_The_Cross","content":"@Netheri Oh xD"}
    ]},
    {"username":"theboreduser-_-","content":"don’t reply","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@theboreduser-_- ok"}
    ]},
    {"username":"Berry154","content":"ok im going to be honest, this isnt a preferred place for me to stay, i think that griffpatch_tutor is better","replies":[
        {"username":"clutcher1","content":"@Berry154 griffpatch_tutor"},
        {"username":"clutcher1","content":"@Berry154 @griffpatch_tutor"},
        {"username":"Berry154","content":"@clutcher1 i know where his profile is, so please dont reply to me with it"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"i think its safe.... @griffpatch","replies":[]},
    {"username":"ThePersonWhoIsAmogus","content":"https://scratch.mit.edu/classes/882182/ got the class so report it","replies":[]},
    {"username":"tutumao","content":"what's so special about this","replies":[
        {"username":"tutumao","content":"@tutumao Really don't want me to end this like how I ended the Kettle Kingdom huh"},
        {"username":"ElEvatEd_ElEphant","content":"@tutumao you didnt end kettle kingdom, it just ended because I got banned"}
    ]},
    {"username":"Iliketoscratch111","content":"i put the new 4g on the jeep","replies":[]},
    {"username":"Iliketoscratch111","content":"i just realise no one is at griffpatch and they are wasting there time...","replies":[]},
    {"username":"DuckSupporter","content":"@griffpatch_tutor is better unless its also getting spammed just go there","replies":[]},
    {"username":"ThePersonWhoIsAmogus","content":"SONAFA","replies":[]},
    {"username":"DuckSupporter","content":"go to @griffpatch-tutor","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@DuckSupporter 0_0 XD"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"6 pages in 1 minute?!?!","replies":[
        {"username":"Iliketoscratch111","content":"@ElEvatEd_ElEphant yeah bc 100 accounts"},
        {"username":"Y-a-s-h-i-r-oN-3-N-E","content":"@ElEvatEd_ElEphant what is going on"},
        {"username":"ElEvatEd_ElEphant","content":"@Iliketoscratch111 ye :/"},
        {"username":"ElEvatEd_ElEphant","content":"@Y-a-s-h-i-r-oN-3-N-E spam"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"does anyone know how long its been going for?","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"helo folks","replies":[]},
    {"username":"Hope_In_The_Cross","content":"THE BOT IS BACK XDDDD","replies":[]},
    {"username":"virtualstudent12345","content":"I have to be here because griffpatch is getting spammed","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@virtualstudent12345 yes"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"spread the word and liven this place","replies":[
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant Will do!!"},
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross :D thx"},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant np lol!"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant Ima be famous :D"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam ye"},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant ELARUUUUUUUUUUUUUUUUUUU?"},
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yessssssssssss"},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant xD"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[]},
    {"username":"Clicking_Game","content":"sjhdsjf","replies":[]},
    {"username":"colorjuice","content":"Why @elaruu?","replies":[
        {"username":"SteichFam","content":"@colorjuice I don’t know. Let’s go to @donut"},
        {"username":"VXOLET_Child","content":"@SteichFam no stay in @elaruu"}
    ]},
    {"username":"$system","content":"a lot of comments by spam bots were not restored","replies":[]},
    {"username":"$system","content":"a few comments were not restored","replies":[]},
    {"username":"Hope_In_The_Cross","content":"first in 5 min?","replies":[]},
    {"username":"pato--","content":"first in 3 min","replies":[]},
    {"username":"HedwigsHat","content":"phew","replies":[]},
    {"username":"Mitsukiislost","content":"second comment in a hour","replies":[]},
    {"username":"_lazybear_-","content":"first comment in a hour","replies":[
        {"username":"SteichFam","content":"@_lazybear_- First in 2 min"}
    ]},
    {"username":"elaruuian","content":"@mitchelldzamko is the first follower","replies":[]},
    {"username":"TheMindScratcher","content":"May I clarify something — Elbrus and Elaruu are NOT in a war. Apparently, if we advertise chats in @Elaruu, we are stealing @ElEvatEd_ElEphant’s 2 months of hard work and dedication. So, I have agreed to advertise casually on non-chat’s if they allow advertising, perhaps ‘Advertise Here!’ projects. I am waiting for @SteichFam to agree to this, but @Elbrus and @Elaruu are not in a war.","replies":[
        {"username":"SteichFam","content":"@TheMindScratcher TWO MONTHS?! No way. But I agree: *in magic sparkle signature stuff* ✨"},
        {"username":"SteichFam","content":"@SteichFam *Laura Wishwalker"}
    ]},
    {"username":"SSSA-","content":"I have decided to be an elaruuian","replies":[
        {"username":"CocoCat324","content":"@SSSA- Hoi elaruuian"},
        {"username":"SteichFam","content":"@SSSA- Kewl"}
    ]},
    {"username":"NewsRealm","content":"Scratcher war (elaruu vs elbrus) https://scratch.mit.edu/projects/927085346/","replies":[]},
    {"username":"JustMoses12","content":"First in 1 hour","replies":[]},
    {"username":"umqq","content":"How's your day, elaruu?","replies":[]},
    {"username":"umqq","content":"crayon rage","replies":[]},
    {"username":"THEFURYSNAP","content":"bigSHOT bigSHOT bigSHOOOOT","replies":[]},
    {"username":"NewsRealm","content":"i'm making news","replies":[
        {"username":"SteichFam","content":"@NewsRealm Love your reports"}
    ]},
    {"username":"-NintendoProGamer-","content":"i’m og elaruuian and you’re not haha","replies":[
        {"username":"Hope_In_The_Cross","content":"@-NintendoProGamer- _B)_"}
    ]},
    {"username":"Th0r12","content":"https://www.youtube.com/playlist?list=PLC9C7ECF854F62BF9 it's called elaruu!!!!!!","replies":[]},
    {"username":"squirrelygirl123","content":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"username":"SteichFam","content":"@squirrelygirl123 It’s a long story. People follow this person for a portal"}
    ]},
    {"username":"HedwigsHat","content":"imagine if elaruu suddenly became active","replies":[
        {"username":"SteichFam","content":"@HedwigsHat Lol @elbrus would be shocking if it bécame activer"}
    ]},
    {"username":"Bub2dgh6","content":"follow me","replies":[]},
    {"username":"BLEB45","content":"f4f please i followed you","replies":[]},
    {"username":"WorldOfCountries","content":"(This is the real last comment ever here) why should i comment here? i wait an hour a a comment? this chat is dead and not active, so cya guys.","replies":[
        {"username":"SteichFam","content":"@WorldOfCountries @griffpatch is slightly worse"},
        {"username":"ske-ater","content":"@WorldOfCountries don't people sleep and eat?? im confused on your claim"},
        {"username":"TheMindScratcher","content":"@ske-ater He’s saying that there’s 1 comment an hour here but there’s ~150 comments an hour on Griffpatch"}
    ]},
    {"username":"Jaegxr","content":"@TheUltimateHoodie is dedicated","replies":[]},
    {"username":"-NintendoProGamer-","content":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"username":"TheUltimateHoodie","content":"@-NintendoProGamer- The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 40"}
    ]},
    {"username":"Voyager_III","content":"*pant* I just got to *pant* the top... my space helmet is running out *pant* of air!","replies":[
        {"username":"TheUltimateHoodie","content":"@Voyager_III The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 41"},
        {"username":"Voyager_III","content":"@TheUltimateHoodie Please don't spam :("},
        {"username":"ElEvatEd_ElEphant","content":"@Voyager_III There’s technically no rules about multiple ads"}
    ]},
    {"username":"WorldOfCountries","content":"my last comment here is....... yes","replies":[]},
    {"username":"ske-ater","content":"wait... can anyone hear me up here?","replies":[
        {"username":"TheUltimateHoodie","content":"@ske-ater The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 42"}
    ]},
    {"username":"TheMindScratcher","content":"[LAST COMMENT ON ELARUU] Top. See you guys. This place, well it CANNOT be fair. I’m leaving Elbrus in hope of a better chat, maybe better then @griffpatch.","replies":[
        {"username":"ske-ater","content":"@TheMindScratcher cya"},
        {"username":"SteichFam","content":"@TheMindScratcher Aww. Can I help?"}
    ]},
    {"username":"ske-ater","content":"F-finally....","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"Yes the stars are pretty cool","replies":[
        {"username":"TheUltimateHoodie","content":"@ElEvatEd_ElEphant The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 43"}
    ]},
    {"username":"ske-ater","content":"Wow! Look at the solar system! Can't you believe it?","replies":[
        {"username":"ske-ater","content":"@ske-ater I'm setting up shelter here underground. I'm exhausted from that hiking... *snore*"},
        {"username":"ske-ater","content":"@ske-ater Good... Solar Morning?"},
        {"username":"ske-ater","content":"@ske-ater I'm digging my own grave!!! I need to stop talking!"},
        {"username":"ElEvatEd_ElEphant","content":"@ske-ater XD"},
        {"username":"ske-ater","content":"@ske-ater Welp, I surrender"},
        {"username":"ElEvatEd_ElEphant","content":"@ske-ater yeyyyyyyyyyyyyy"},
        {"username":"Tendedclub70","content":"@ElEvatEd_ElEphant AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. HIT THAT STUPID LINKKKKKKKKKKKKKKKKKKKKKKKKKKUHGHGFDSHQEWDWSED https://scratch.mit.edu/projects/926652260 AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHJAI98HFUEWDYGF3BDUEhji @wQBnewIQJubye @d#wihebyrf#newjheybhvn#edybhewHBhdnfjewhyqbhdne"},
        {"username":"TheUltimateHoodie","content":"@Tendedclub70 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 46"},
        {"username":"Tendedclub70","content":"@TheUltimateHoodie bruh"}
    ]},
    {"username":"$system","content":"Comments between november 8 and november 17 were not restored","replies":[]},
    {"username":"MaoZedongze","content":"Trash chat, delete this mess already.","replies":[]},
    {"username":"News_By_Kamoebas","content":"S","replies":[]},
    {"username":"News_By_Kamoebas","content":"A","replies":[]},
    {"username":"News_By_Kamoebas","content":"V","replies":[]},
    {"username":"News_By_Kamoebas","content":"E","replies":[
        {"username":"News_By_Kamoebas","content":"@News_By_Kamoebas ‎"}
    ]},
    {"username":"News_By_Kamoebas","content":"T","replies":[
        {"username":"DuckSupporter","content":"@News_By_Kamoebas i will now stay up till 2 am playing super mario maker 2, goodbye"}
    ]},
    {"username":"News_By_Kamoebas","content":"H","replies":[]},
    {"username":"News_By_Kamoebas","content":"E","replies":[]},
    {"username":"News_By_Kamoebas","content":"M","replies":[]},
    {"username":"-NintendoProGamer-","content":"k","replies":[]},
    {"username":"booogwooogz","content":"dis is pretty gud","replies":[]},
    {"username":"virtualstudent12345","content":"Elarrrrruuuuuuuuuuuuu no","replies":[
        {"username":"News_By_Kamoebas","content":"@virtualstudent12345 frogy chair wiff no faec"}
    ]},
    {"username":"News_By_Kamoebas","content":"quick question, why do people like this account too much? (i have a grudge on this account because a message about it broke my text chain)","replies":[
        {"username":"Hope_In_The_Cross","content":"@News_By_Kamoebas Its the best chat place :)"},
        {"username":"btdim1","content":"@News_By_Kamoebas I don't know ask @ElEvatEd_ElEphant."},
        {"username":"btdim1","content":"@News_By_Kamoebas It's also active during nighttime (where I'm from)."},
        {"username":"MaoZedongze","content":"@News_By_Kamoebas Because they are trying to make it like griffpatch keeps failing, its a wannabe, don't use it, use @griffpatch, way better and more active, others agree too"},
        {"username":"MaoZedongze","content":"@btdim1 No it isn't, I got proof, last active 30 minutes ago per comment, stop lying."},
        {"username":"virtualstudent12345","content":"@Hope_In_The_Cross Lies"},
        {"username":"News_By_Kamoebas","content":"@MaoZedongze y e s indeed."},
        {"username":"Hope_In_The_Cross","content":"@virtualstudent12345 NOOOOOOOOOO"}
    ]},
    {"username":"FollowingFollows","content":"maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","replies":[]},
    {"username":"MaoZedongze","content":"Griffpatch has fun projects. this is an empty profile with follows for some reason., just what? and why?","replies":[
        {"username":"Xx_Lily-Shadow_xX","content":"@MaoZedongze then why are you here? just leave if you hate it child."},
        {"username":"ElEvatEd_ElEphant","content":"@MaoZedongze leave and n e v e r return"},
        {"username":"MaoZedongze","content":"@Xx_Lily-Shadow_xX I already told you, learn to read my child"},
        {"username":"btdim1","content":"@MaoZedongze Because it's Griffpatch's secret Estonian alt :0"},
        {"username":"Xx_Lily-Shadow_xX","content":"@MaoZedongze your avoiding the question"},
        {"username":"Tancred_Master","content":"@ElEvatEd_ElEphant Nice, stay here forever in this sad pathetic boring chat, do not comment at griffpatch ever at all"},
        {"username":"ElEvatEd_ElEphant","content":"@Tancred_Master ok"},
        {"username":"Hope_In_The_Cross","content":"@MaoZedongze This is XXXXXXXXXXx better :)"}
    ]},
    {"username":"News_By_Kamoebas","content":"T","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"*interrupts*","replies":[
        {"username":"News_By_Kamoebas","content":"@ElEvatEd_ElEphant *Dies*"}
    ]},
    {"username":"News_By_Kamoebas","content":"H","replies":[]},
    {"username":"News_By_Kamoebas","content":"E","replies":[]},
    {"username":"News_By_Kamoebas","content":"M","replies":[]},
    {"username":"-NintendoProGamer-","content":"that mao guy is why your comments are being deleted (2 reports = delete)","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- yes I know that already but thx"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant np"},
        {"username":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- worlds fastest reply???"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant skill"},
        {"username":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- lol"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant yes"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant 11 second reply ☠️☠️☠️"},
        {"username":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- wow"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant Y"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant i would’ve been <2 seconds but i was commenting too quickly"},
        {"username":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- oh :/"},
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant yeah"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"report @MaoZedongze","replies":[
        {"username":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant already done"},
        {"username":"Xx_Lily-Shadow_xX","content":"@ElEvatEd_ElEphant done that"},
        {"username":"btdim1","content":"@ElEvatEd_ElEphant Why?"},
        {"username":"ElEvatEd_ElEphant","content":"@btdim1 innapropriate comments. they are gone now"},
        {"username":"btdim1","content":"@ElEvatEd_ElEphant Oh."}
    ]},
    {"username":"Jaegxr","content":"comments = g o n e","replies":[
        {"username":"-NintendoProGamer-","content":"@Jaegxr real"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"where are my comments going","replies":[
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant Same!! I think someone is reporting them -_-"},
        {"username":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yeah"}
    ]},
    {"username":"Hope_In_The_Cross","content":"How did my comment get deleted? ...","replies":[
        {"username":"CousinTimmy","content":"@Hope_In_The_Cross me too"},
        {"username":"Hope_In_The_Cross","content":"@CousinTimmy Really? What did you say?"},
        {"username":"CousinTimmy","content":"@Hope_In_The_Cross report those guys lol"},
        {"username":"Hope_In_The_Cross","content":"@CousinTimmy I feel like someones reporting them because its happened more than once for no reason now..."},
        {"username":"CousinTimmy","content":"@Hope_In_The_Cross yeah on griffpatch"},
        {"username":"Hope_In_The_Cross","content":"@CousinTimmy Thats weird and yeah, i'm going to report them!"},
        {"username":"SteichFam","content":"@Hope_In_The_Cross Boooo"},
        {"username":"Jaegxr","content":"@SteichFam ty"},
        {"username":"Jaegxr","content":"@SteichFam for confusing me"},
        {"username":"Hope_In_The_Cross","content":"@SteichFam Fr lol"}
    ]},
    {"username":"Kayla_emo_sloth","content":"@griffpatch","replies":[]},
    {"username":"Jaegxr","content":"Guys Report @Doom-Guy-- and @MaoZedongze they are spreading lies and bullying ppl ect ect","replies":[]},
    {"username":"$system","content":"Comments on November 6 (late nov 5 to early nov 7) were not restored","replies":[]},
    {"username":"elaruuian","content":"ELARUU RESPONDED! https://scratch.mit.edu/projects/919219790/","replies":[]},
    {"username":"mariocraft987","content":"WHO THE HELL IS @elaruu PLS TELL ME!","replies":[
        {"username":"elaruuian","content":"@mariocraft987 New griffpatch"},
        {"username":"mariocraft987","content":"@elaruuian cool the next griffpatch"},
        {"username":"elaruuu","content":"@mariocraft987 Yes."}
    ]},
    {"username":"mariocraft987","content":"who are you?","replies":[
        {"username":"elaruuu","content":"@mariocraft987 Who are you?"},
        {"username":"mariocraft987","content":"@elaruuu I AM my username, Why are you so famous"},
        {"username":"elaruuu","content":"@mariocraft987 I am famous because a cheese wanted to make me famous. @ProArmadillo made me."}
    ]},
    {"username":"Bub2dgh6","content":"Hi little kids obsessing over griffpatch ripoff so you back to @griffpatch and become griffpatchers again!","replies":[
        {"username":"btdim1","content":"@Bub2dgh6 Go to @Chatroom instead."},
        {"username":"eIaruu-","content":"@Bub2dgh6 no"},
        {"username":"elaruuu","content":"@Bub2dgh6 Who are you?"},
        {"username":"elaruuian","content":"@Bub2dgh6 no man"},
        {"username":"elaruuian","content":"@btdim1 no"},
        {"username":"elaruuian","content":"@Bub2dgh6 who even ls griffpatch"}
    ]},
    {"username":"AllTheFunStudios","content":"may i ask the followers of this guy why they are following this guy","replies":[
        {"username":"Hope_In_The_Cross","content":"@AllTheFunStudios Cause elaruu is awesome _B)_"},
        {"username":"mariocraft987","content":"@Hope_In_The_Cross who is elaruu"},
        {"username":"Hope_In_The_Cross","content":"@mariocraft987 This account lol"}
    ]},
    {"username":"mariocraft987","content":"hello","replies":[]},
    {"username":"btdim1","content":"There are many @elaruu copycats all of the sudden... very suspicious.","replies":[
        {"username":"Hope_In_The_Cross","content":"@btdim1 lol"},
        {"username":"elaruuu","content":"@btdim1 *fans"}
    ]},
    {"username":"_TopHat","content":"hi","replies":[
        {"username":"mariocraft987","content":"@_TopHat hello"}
    ]},
    {"username":"Bub2dgh6","content":"Who is “elaruu”","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"Continue the remix chain https://scratch.mit.edu/projects/919210515/remixtree/","replies":[]},
    {"username":"Bub2dgh6","content":"?","replies":[]},
    {"username":"elaruuian","content":"@elaruuer","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"@eiaruuian @elaruuing @eiaruuing","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant (name snipes up for grabs)"},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant xD"}
    ]},
    {"username":"elaruuian","content":"ELARUUING","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@elaruuian @elaruuing"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"https://scratch.mit.edu/projects/919216265/ elaruu replied to ME aswell!","replies":[]},
    {"username":"elaruuian","content":"@ELARUUs-BIGGEST-FAN","replies":[]},
    {"username":"Hope_In_The_Cross","content":"So many elaruus lol","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"Hi @elaruu!","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant Oh, hello there, @JamieD132! Your one of my favourite fans! If I could, I would give you a million dollars! _B)_"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Bruh lol"},
        {"username":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant https://scratch.mit.edu/projects/919216265/ XD"},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher lol. I should have done it on my profile so I could delete it"}
    ]},
    {"username":"TheMindScratcher","content":"https://scratch.mit.edu/projects/919213054/ ELARUU REPLIED!","replies":[]},
    {"username":"Elaruu1","content":"lol","replies":[]},
    {"username":"elaruuian","content":"Elaruu!","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"whoos back? m-mee! :)","replies":[
        {"username":"elaruuu","content":"@ElEvatEd_ElEphant Hello."},
        {"username":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant I just got back rn!"}
    ]},
    {"username":"-NintendoProGamer-","content":"h","replies":[]},
    {"username":"TheComputerCrasher","content":"It'd be crazy if this person randomly checked their Scratch account to find all of these messages lol","replies":[
        {"username":"-NintendoProGamer-","content":"@TheComputerCrasher https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"username":"elaruuu","content":"@TheComputerCrasher Wow."}
    ]},
    {"username":"KingRhoamKingRhoam","content":"If only Elaruu responds to messages","replies":[]},
    {"username":"i-am-a-person-123","content":"very dead","replies":[]},
    {"username":"TheMindScratcher","content":"Would you, @ElEvatEd_ElEphant, like to ally for The Great Events…?","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher i still hav no idea what the great events are :/"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Grifftopia will be dictated"},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher *googles definition of dictated* by who tho!!?"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Remember the army of 2 people who were about to mass report you?"},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher there was 3 people, and yeah"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Them."},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher Aaand how do they plan on getting in control of us?"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Controlling, Reporting, Bossing…"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant War will happen."},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher ohhh nooo that sounds bad... We should gather an army"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Yes, so far we have…"},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher am I in it?"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Well, do you want to?"},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher yes pls!"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant Okay!"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant If anyone asks, pretend we weren’t here."},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher ok..."}
    ]},
    {"username":"i-am-a-person-123","content":"elaruu?","replies":[]},
    {"username":"NoEmmy","content":"#Dead Chat","replies":[
        {"username":"NoEmmy","content":"@NoEmmy * #DeadChat"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"*activeness*","replies":[]},
    {"username":"1op9yun","content":"OH NO;;;;","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@1op9yun Ikr it's so dead"}
    ]},
    {"username":"1op9yun","content":"Dead chat","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@1op9yun Yea :/"},
        {"username":"ElEvatEd_ElEphant","content":"@1op9yun Have you used your daily ad? Cuz you could advertise it in @griffpatch"},
        {"username":"1op9yun","content":"@ElEvatEd_ElEphant no?"},
        {"username":"ElEvatEd_ElEphant","content":"@1op9yun Good :)"}
    ]},
    {"username":"HummusMomE","content":"elaruu > griffpatch???","replies":[
        {"username":"doggosintown","content":"@HummusMomE true"},
        {"username":"virtualstudent12345","content":"@HummusMomE No"}
    ]},
    {"username":"doggosintown","content":"Look at these random things I found: a ȧ ä ᶏ ɐ ɑ α ɒ ɒ̇ ɒ̈ ꭤ æ æ̇ æ̈ ꜵ ᴀ A 4 ꜭ","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@doggosintown Őķ"},
        {"username":"TheMindScratcher","content":"@doggosintown Look at these random things I found:"},
        {"username":"doggosintown","content":"@ElEvatEd_ElEphant ⓨⓐⓨ ⓢⓞⓜⓔⓞⓝⓔ ⓝⓞⓣⓘⓒⓔⓓ"},
        {"username":"doggosintown","content":"@TheMindScratcher oh wow"},
        {"username":"1op9yun","content":"@doggosintown 啊 吧从的额发给和就 i看了了；"},
        {"username":"doggosintown","content":"@1op9yun Ah, from the forehead to and on I looked?? what?"},
        {"username":"1op9yun","content":"@doggosintown I typed it........ -_-"},
        {"username":"doggosintown","content":"@1op9yun randomly?"},
        {"username":"1op9yun","content":"@doggosintown yup but in alphabet"},
        {"username":"doggosintown","content":"@1op9yun nice"},
        {"username":"EeveeMaster--","content":"@doggosintown wow"}
    ]},
    {"username":"doggosintown","content":"qwertyujik","replies":[]},
    {"username":"Jigglypuffcupidcute","content":"griffpatch better (NO OPINION BASHING)","replies":[
        {"username":"SteichFam","content":"@Jigglypuffcupidcute I have no opinion #NeutralitiesRule"}
    ]},
    {"username":"Elm0-_-","content":"How did this page suddenly blow up in popularity","replies":[
        {"username":"SteichFam","content":"@Elm0-_- IDK"},
        {"username":"KingRhoamKingRhoam","content":"@Elmo-_- Good questsion"},
        {"username":"elaruuian","content":"@Elm0-_- some guy sending this guy's user"}
    ]},
    {"username":"milkberry","content":"N-no....go back to griffpatch...stob...","replies":[
        {"username":"TheMindScratcher","content":"@milkberry It's fine"},
        {"username":"ElEvatEd_ElEphant","content":"@milkberry That is your daily Griffpatch ad, no more :)"},
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant At least we get that part of the deal"},
        {"username":"milkberry","content":"@ElEvatEd_ElEphant Nope, griffpatches profile has the 'daily ad rule' but, @elaruu has no rules, look at the about me and wiwo, see?"},
        {"username":"ElEvatEd_ElEphant","content":"@milkberry Yeah. I'm not sure if it's an actual rule tho..."}
    ]},
    {"username":"TheMindScratcher","content":"Ħ","replies":[
        {"username":"SteichFam","content":"@TheMindScratcher Hi :D"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"Ħelloooooo!","replies":[
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant UGH EVERYONE'S SO INACTIVE"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Yea :( I wish I was allowed to mention them on griffpatches profile more than once, but according to the rule that us elaruuians SOMEHOW agreed to, we can only mention them once each :( have u used your daily mention?"},
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant Just now :("},
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant I wasn't even part of that decision. Ima protest :("},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Ok :) hopefully it works, I just used mine too :/"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Yeah Ik! Apparently @ProArmadillo agreed to one small thing, and then @TheMindScratcher added a bunch of rules and claimed @ProArmadillo agreed to them aswell :("},
        {"username":"SteichFam","content":"@ElEvatEd_ElEphant WHAT-- I SHOULD HAVE A SAY IN STUFF-- I am always forgotten and overlooked as a griffpatcher"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam YESS WE SHALL FIGHT BACK! WE SHALL PROTEST"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Protest on @TheMindScratcher..."},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Never mind, he closed comments, protest on @griffpatch"},
        {"username":"TheMindScratcher","content":"@ElEvatEd_ElEphant I know what you’re up to."},
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher Ik, and idc"},
        {"username":"nngr-cno","content":"@TheMindScratcher Yas TMS. I am on your side. My team of eight+ people and you will DOMINATE"},
        {"username":"TheMindScratcher","content":"@nngr-cno YAY"},
        {"username":"nngr-cno","content":"@TheMindScratcher YESSIRR"}
    ]},
    {"username":"SteichFam","content":"Guys, there's a like 2 hr comment wait between these :cri:","replies":[]},
    {"username":"spongebobsquarpant22","content":"Top","replies":[]},
    {"username":"SteichFam","content":"Hello, griffpatchers and elaruuians! Laura Wishwalker (your friendly wizard and food supplier) is here with your twice-daily delivery of requested snacks! Today’s delivery includes Splish, Recess Minis, donuts, Zanthar cake, pie, prime sticks, golden oreos, and oreos. Please enjoy! If you would like to add something to the list, great. Tell me, and I will have your requested food option in tonight’s delivery. If you enjoy your food, please tip me (I take GED). Enjoy!","replies":[
        {"username":"Jigglypuffcupidcute","content":"@SteichFam Griffpatch's VIP room has infinite of these"},
        {"username":"SteichFam","content":"@Jigglypuffcupidcute Really? How do I get in?"},
        {"username":"Jigglypuffcupidcute","content":"@SteichFam ask to join"},
        {"username":"SteichFam","content":"@Jigglypuffcupidcute Ask who?"},
        {"username":"Jigglypuffcupidcute","content":"@SteichFam Ask in the studio"},
        {"username":"SteichFam","content":"@Jigglypuffcupidcute K, I found it. I am food deliverer for the chat rooms here"}
    ]},
    {"username":"SteichFam","content":"We need to increase commenting on this.","replies":[
        {"username":"GoldenPizza3","content":"@SteichFam california breeze"},
        {"username":"ElEvatEd_ElEphant","content":"@SteichFam Ikr :((("}
    ]},
    {"username":"spongebobsquarpant22","content":"Woohoo","replies":[]},
    {"username":"CousinTimmy","content":"Comment above me is a fAiLuRe","replies":[
        {"username":"TheBluePortal","content":"@CousinTimmy well well well"}
    ]},
    {"username":"CousinTimmy","content":"1 hour","replies":[]},
    {"username":"CousinTimmy","content":"first in 3 hrs because i am superior","replies":[]},
    {"username":"greatman1111","content":"i noticed @elaruu has 123 followers","replies":[]},
    {"username":"Netheri","content":"Good morning, people of earth.","replies":[
        {"username":"CousinTimmy","content":"@Netheri I am him"},
        {"username":"ElEvatEd_ElEphant","content":"@Netheri not me"},
        {"username":"grant-mikes-cn","content":"@Netheri Hey, wsg netheri. notice that you are famous :P"},
        {"username":"Netheri","content":"@grant-mikes-cn I'm not really that famous. I'm doing fine, just chilling here on scratch. What about you?"},
        {"username":"EmeraldGames4","content":"@grant-mikes-cn Hello"},
        {"username":"EmeraldGames4","content":"@grant-mikes-cn Oh wrong person to reply"},
        {"username":"EmeraldGames4","content":"@Netheri Good morning"}
    ]},
    {"username":"CousinTimmy","content":"I am the best","replies":[
        {"username":"Yousernaeme","content":"@CousinTimmy 100% tru you are unbeatable"}
    ]},
    {"username":"SebastianGab123","content":"@eluwu is better","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@SebastianGab123 @elaruwu also exists now"}
    ]},
    {"username":"-Officer_Kevin-","content":"Spam bots: robots made of canned meat","replies":[]},
    {"username":"ElEvatEd_ElEphant","content":"If only :(","replies":[
        {"username":"alueoa","content":"@ElEvatEd_ElEphant if only what?? D:"},
        {"username":"ElEvatEd_ElEphant","content":"@alueoa activeness was present"},
        {"username":"alueoa","content":"@ElEvatEd_ElEphant ah i seee-"}
    ]},
    {"username":"ElEvatEd_ElEphant","content":"hii!","replies":[
        {"username":"alueoa","content":"@ElEvatEd_ElEphant hellooo. :)"},
        {"username":"ElEvatEd_ElEphant","content":"@alueoa Hiii! :)"},
        {"username":"alueoa","content":"@ElEvatEd_ElEphant How are you!!!!! :D"},
        {"username":"ElEvatEd_ElEphant","content":"@alueoa Good :D"},
        {"username":"alueoa","content":"@ElEvatEd_ElEphant that's good :)"},
        {"username":"ElEvatEd_ElEphant","content":"@alueoa :D what about u?"},
        {"username":"alueoa","content":"@ElEvatEd_ElEphant I'm doing pretty gooddd thanks for askinggg c:"},
        {"username":"ElEvatEd_ElEphant","content":"@alueoa np :)"},
        {"username":"alueoa","content":"@ElEvatEd_ElEphant awh"}
    ]},
    {"username":"Stuffytheslob9","content":"i like eating my alphabet and reciting my pizza :3","replies":[]},
    {"username":"BlockyFin","content":"Anyone else know about planetballs","replies":[]},
    {"username":"CocoCat324","content":"Does anyone else dare challenge my spam abilities?","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@CocoCat324 yes >:)"},
        {"username":"CocoCat324","content":"@ElEvatEd_ElEphant Hmph"},
        {"username":"CocoCat324","content":"@ElEvatEd_ElEphant I will spam you later when you are active"}
    ]},
    {"username":"TheMindScratcher","content":"@griffpatch has, like, 1 comment 5 minutes, I'm moving here for the time being.","replies":[
        {"username":"ElEvatEd_ElEphant","content":"@TheMindScratcher yay! But this is worse again :("}
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
            <a href="/users/`+com.username+`" id="comment-user" data-comment-user="`+com.username+`"><img class="avatar" src="/data/users/`+com.username+`/avatar.png" width="45" height="45"></a>
            <div class="info">
                <div class="name">
                <a href="/users/`+com.username+`">`+com.username+`</a>
                </div>
                <div class="content">`+com.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>')+`</div>
                <div>
                <span class="time" title="${com.date ? new Date(com.date).toLocaleDateString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${com.date ? moment.unix(com.date/1000).fromNow() : 'archived comment'}</span>
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
                <a href="/users/`+rep.username+`" id="comment-user" data-comment-user="`+rep.username+`"><img class="avatar" src="/data/users/`+rep.username+`/avatar.png" width="45" height="45"></a>
                <div class="info">
                    <div class="name">
                    <a href="/users/`+rep.username+`">`+rep.username+`</a>
                    </div>
                    <div class="content">`+rep.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>')+`</div>
                    <div>
                    <span class="time" title="${rep.date ? new Date(rep.date).toLocaleDateString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${rep.date ? moment.unix(rep.date/1000).fromNow() : 'archived comment'}</span>
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

    
});
fetch('https://api.jamied132.workers.dev/users/elaruu/pfp').then(res=>res.json()).then(j=>{
                        var pfp = j.pfp;
                        
                        document.querySelectorAll("#profileimage").forEach(img=>{
                            img.setAttribute('src',pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp);
                        });
                        
                        document.querySelectorAll("#username").forEach(p=>{
                            p.innerText='elaruu';
                        });
                        document.querySelectorAll("#profileurl").forEach(a=>{
                            a.setAttribute('href','/users/elaruu')
                        });
                    })
var signedin = false;
if(sessionStorage.getItem('session')){
    var session = JSON.parse(atob(sessionStorage.getItem('session')));
    if(session.username && session.password){
        fetch('https://api.jamied132.workers.dev/auth/signin',{method:'POST',body:JSON.stringify(session)}).then(res=>res.json()).then(j=>{
            if(!j.error){
                signedin=true;
                document.querySelector("#actall").innerHTML=document.querySelector("#signedintemp").innerHTML;
                var settings;
                fetch('https://api.jamied132.workers.dev/users/'+session.username.toLowerCase()+'/pfp',{method:"POST",body:JSON.stringify({auth:session.password,user:session.username})}).then(res=>res.json()).then(j=>{
                    settings=j;
                    var pfp=settings.pfp;
                    
                    document.querySelectorAll("#myuserimage").forEach(img=>{
                        img.setAttribute('src',pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp);
                    });
                    
                    document.querySelectorAll("#myusername").forEach(p=>{
                        p.innerText=session.username;
                    });
                    document.querySelectorAll("#myprofileurl").forEach(a=>{
                        a.setAttribute('href','/users/'+session.username)
                    });
                    
                })
            }
        })
    }
}





    
    const text = "@everyone follow @mike.marc now pls lmao";
const replacedText = text.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>');
console.log(replacedText); 
