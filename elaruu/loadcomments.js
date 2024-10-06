var comments;

var archivedcomments = [
    {"user":"$system","content":"Elaruu was deleted on the 16th of february.","replies":[]},
    {"user":"$system","content":"comments between December 24 and 16 February were not restored","replies":[]},
    {"user":"youDD1","content":"/svcaanc = so very cool and absolutely not clickbait","replies":[
        {"user":"youDD1","content":"@youDD1 best tag of all time"}
    ]},
    {"user":"youDD1","content":"https://scratchstats.com/elaruu/ https://api.scratch.mit.edu/users/elaruu/","replies":[
        {"user":"youDD1","content":"@youDD1 29th of November 2022"},
        {"user":"percent-15","content":"@youDD1 29th of October u mean"},
        {"user":"youDD1","content":"@percent-15 im an idiot :c"},
        {"user":"percent-15","content":"@youDD1 No"},
        {"user":"youDD1","content":"@percent-15 kind of"}
    ]},
    {"user":"percent-15","content":"Ofc it goes inactive as soon as I leave -_-","replies":[
        {"user":"youDD1","content":"@percent-15 Yeah I had to go for a bit aswell"},
        {"user":"percent-15","content":"@youDD1 Oh :/"},
        {"user":"youDD1","content":"@percent-15 yeppers-"}
    ]},
    {"user":"Skewb_ALT","content":"ok im done i give up","replies":[
        {"user":"youDD1","content":"@Skewb_ALT give up with what"},
        {"user":"Skewb_ALT","content":"@youDD1 commenting"},
        {"user":"youDD1","content":"@Skewb_ALT k"}
    ]},
    {"user":"lavendersnail","content":"Help me decide what my phone’s Home Screen should look like in 2024: https://scratch.mit.edu/projects/943413735/","replies":[
        {"user":"SteichFam","content":"@lavendersnail :]"},
        {"user":"SteichFam","content":"@lavendersnail You could also try Grifftopia again"}
    ]},
    {"user":"youDD1","content":"The two leaders of this chat are @percent-15 and @SteichFam fight me","replies":[
        {"user":"SteichFam","content":"@youDD1 I cannot :D"},
        {"user":"youDD1","content":"@SteichFam good"}
    ]},
    {"user":"percent-15","content":"Bye gtg","replies":[
        {"user":"SteichFam","content":"@percent-15 Same i was just checking in!"}
    ]},
    {"user":"SteichFam","content":":////////////","replies":[
        {"user":"percent-15","content":"@SteichFam You missed it"},
        {"user":"SteichFam","content":"@percent-15 The 10K thing? Yeah"},
        {"user":"percent-15","content":"@SteichFam Yes it’s been very active for the past 2 hours and 40 minutes"},
        {"user":"SteichFam","content":"@percent-15 Oof :/ I MISS EVERYTHING"},
        {"user":"percent-15","content":"@SteichFam I miss a lot to :/"},
        {"user":"SteichFam","content":"@percent-15 lol"}
    ]},
    {"user":"youDD1","content":"https://scratch.mit.edu/users/elaruu/#comments-XXXXXXXXX XXXXXth message on here /svcaanc","replies":[
        {"user":"youDD1","content":"@youDD1 https://scratch.mit.edu/users/elaruu/#comments-303753628"}
    ]},
    {"user":"youDD1","content":"let's say @elaruu passed 10k Messages on @griffpatch","replies":[
        {"user":"percent-15","content":"@youDD1 What?"},
        {"user":"youDD1","content":"@percent-15 Comment \"elaruu reached 10k Messages\" on griffpatch"}
    ]},
    {"user":"Xx-Gradient-xX","content":"Griffpatch has 307719+ unread messages","replies":[
        {"user":"cosmic-peaqh","content":"@Xx-Gradient-xX ✧ yep."},
        {"user":"youDD1","content":"@Xx-Gradient-xX yeah that's normal"},
        {"user":"IDRANKMYACOUN","content":"@Xx-Gradient-xX Comment \"you totally wont get a bsod when you click your messages if you have that much mail"}
    ]},
    {"user":"Skewb_ALT","content":"guys we need to break out of here","replies":[]},
    {"user":"singasongtoday123","content":"ohhh i seeee","replies":[]},
    {"user":"HummusMomE","content":"nooo i missed 10k","replies":[
        {"user":"percent-15","content":"@HummusMomE So close :("}
    ]},
    {"user":"singasongtoday123","content":"lolll","replies":[]},
    {"user":"pnikolov-tcsns","content":"WE DID IT","replies":[]},
    {"user":"cosmic-peaqh","content":"✧ i'm just alternating between here and gwdfi-","replies":[
        {"user":"percent-15","content":"@cosmic-peaqh I’m just staying here /gwdfiib"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ gwdfi is not bad :/"},
        {"user":"percent-15","content":"@cosmic-peaqh “B” stands for boring"},
        {"user":"SteichFam","content":"@percent-15 Oof I chat there—"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ oh."},
        {"user":"percent-15","content":"@SteichFam How-"},
        {"user":"SteichFam","content":"@percent-15 Because I did give up on Grifftopia probably forever"},
        {"user":"percent-15","content":"@SteichFam You’ll never give up on elaruu, right?"},
        {"user":"SteichFam","content":"@percent-15 Of course not! I just go there when this place is dead ;D"},
        {"user":"percent-15","content":"@SteichFam So most of the time"},
        {"user":"SteichFam","content":"@percent-15 Yeah..."}
    ]},
    {"user":"singasongtoday123","content":"wait what happening","replies":[
        {"user":"IDRANKMYACOUN","content":"@singasongtoday123 he reach 10k mail"},
        {"user":"youDD1","content":"@singasongtoday123 https://api.jamied132.is-a.dev/users/elaruu/messages/count elaruu just passed 10k messages"},
        {"user":"singasongtoday123","content":"@youDD1 HOW DID U GET THAT LINK"},
        {"user":"singasongtoday123","content":"@IDRANKMYACOUN yeh i figured that out thanks"},
        {"user":"youDD1","content":"@singasongtoday123 What? The api is absolutely legal to vist; that's the point of api. It's visible in places if you search (:"},
        {"user":"singasongtoday123","content":"@youDD1 oh lolsorry"}
    ]},
    {"user":"Xx-Gradient-xX","content":"how are you guys counting the elaruu comments??","replies":[
        {"user":"IDRANKMYACOUN","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"youDD1","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"percent-15","content":"@Xx-Gradient-xX https://api.jamied132.is-a.dev/users/elaruu/messages/count"}
    ]},
    {"user":"youDD1","content":"10000th!","replies":[
        {"user":"percent-15","content":"@youDD1 Hmm I dunno…"},
        {"user":"youDD1","content":"@percent-15 NO YOU STOLE ITT"},
        {"user":"Xx-Gradient-xX","content":"@youDD1 actually, no. 10,008th."},
        {"user":"percent-15","content":"@youDD1 :)"},
        {"user":"IDRANKMYACOUN","content":"@youDD1 2 messag"},
        {"user":"singasongtoday123","content":"@IDRANKMYACOUN what"}
    ]},
    {"user":"percent-15","content":"PROBABLY 10k MESSAGES!!! _10mil_ _10mil_ _10mil_","replies":[
        {"user":"youDD1","content":"@percent-15 That's 10000th, just counted using unrefreshed tab exact count. CONGRATS! :') _10mil_"},
        {"user":"percent-15","content":"@youDD1 Lol"},
        {"user":"btdim1","content":"@percent-15 Wow! I missed it... :("},
        {"user":"btdim1","content":"@percent-15 Wow! I missed it... :("},
        {"user":"percent-15","content":"@btdim1 :("},
        {"user":"youDD1","content":"@btdim1 poor u"},
        {"user":"btdim1","content":"@youDD1 ok"}
    ]},
    {"user":"pnikolov-tcsns","content":"SIX MORE","replies":[]},
    {"user":"cosmic-peaqh","content":"✧ you guys aren't that bad </3","replies":[
        {"user":"percent-15","content":"@cosmic-peaqh Ofc /obviraurw"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ what does that tone indicator mean XD"},
        {"user":"percent-15","content":"@cosmic-peaqh Obviously I’m right and your wrong"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ oookay..."},
        {"user":"youDD1","content":"@cosmic-peaqh thanks (:"}
    ]},
    {"user":"percent-15","content":"Gee api takes far too long to update. We’ve probably already reached 10k without knowing","replies":[]},
    {"user":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count SO CLOSE","replies":[]},
    {"user":"pnikolov-tcsns","content":"message","replies":[
        {"user":"IDRANKMYACOUN","content":"@pnikolov-tcsns it's this guy"}
    ]},
    {"user":"cosmic-peaqh","content":"✧ okay, so if people on gwdfi are called gwdfiers, and if people on gaehive are called gaehivians, what are you guys called- (oh, and can't forget the griffpatchers)","replies":[
        {"user":"percent-15","content":"@cosmic-peaqh Were called elaruuians"},
        {"user":"huntali000","content":"@cosmic-peaqh elaruuians"},
        {"user":"youDD1","content":"@cosmic-peaqh elaruuians"},
        {"user":"percent-15","content":"@cosmic-peaqh This is our official studio https://scratch.mit.edu/studios/34103170/"},
        {"user":"pnikolov-tcsns","content":"@cosmic-peaqh elaruuians"},
        {"user":"Xx-Gradient-xX","content":"@cosmic-peaqh I'm a griffpatcher, and for a single weekend I was a gwdfier, but I guess we'd be Elaruunes?"},
        {"user":"IDRANKMYACOUN","content":"@cosmic-peaqh discοrd mods hating on this person for no reason (not me)"},
        {"user":"cosmic-peaqh","content":"@IDRANKMYACOUN ✧ which person? /gq"},
        {"user":"IDRANKMYACOUN","content":"@cosmic-peaqh any"}
    ]},
    {"user":"pnikolov-tcsns","content":"Close","replies":[]},
    {"user":"percent-15","content":"Estimated time ‘til 10k: 4 MINS!!!","replies":[]},
    {"user":"pnikolov-tcsns","content":"So","replies":[]},
    {"user":"pnikolov-tcsns","content":"PUUUT MESSAGES PEOPLE","replies":[]},
    {"user":"-yoimiyaa","content":"imagine everyone ditches griffpatch for here, wouldnt mind that","replies":[
        {"user":"percent-15","content":"@-yoimiyaa Yes"},
        {"user":"youDD1","content":"@-yoimiyaa yes"}
    ]},
    {"user":"AndrewB1501","content":"@krakow","replies":[]},
    {"user":"youDD1","content":"50 more till 10k!!","replies":[]},
    {"user":"AndrewB1501","content":"Krakow","replies":[]},
    {"user":"Xx-Gradient-xX","content":"maybe i should get rid of it?","replies":[]},
    {"user":"Xx-Gradient-xX","content":"my life is kinda mid","replies":[]},
    {"user":"Xx-Gradient-xX","content":"meh","replies":[]},
    {"user":"VampirCat7","content":"huh?","replies":[]},
    {"user":"IDRANKMYACOUN","content":"people hating on this account probably looks like a discοrd mod","replies":[
        {"user":"-yoimiyaa","content":"@IDRANKMYACOUN fr"},
        {"user":"youDD1","content":"@IDRANKMYACOUN how did you manage to say that-"},
        {"user":"pnikolov-tcsns","content":"@IDRANKMYACOUN So true though"},
        {"user":"IDRANKMYACOUN","content":"@youDD1 Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"},
        {"user":"Xx-Gradient-xX","content":"@IDRANKMYACOUN WSFFFVBNM? YOU GET MUTED FOR SAYING DAT... processing... lagging... 0-o"},
        {"user":"IDRANKMYACOUN","content":"@Xx-Gradient-xX I have Scratch 360 Pro Max Ultra Builders Club Premium Nike Just Do It ©"}
    ]},
    {"user":"AndrewB1501","content":"@eIaruu","replies":[]},
    {"user":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"user":"-yoimiyaa","content":"elaruu","replies":[
        {"user":"AndrewB1501","content":"@-yoimiyaa uurale"}
    ]},
    {"user":"cosmic-peaqh","content":"✧ gwdfi >> whatever the hell this is. /dkm /mj","replies":[
        {"user":"cosmic-peaqh","content":"@cosmic-peaqh ✧ (mj means major joke, dkm means don't kill me)"},
        {"user":"youDD1","content":"@cosmic-peaqh Did you say \"/km\"? Sure!"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ i said /don't/ kill me."},
        {"user":"percent-15","content":"@cosmic-peaqh Thanks for the explanation"},
        {"user":"AndrewB1501","content":"@cosmic-peaqh *do \"/mj\""},
        {"user":"cosmic-peaqh","content":"@AndrewB1501 ✧ huh?"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ you're welcome, i know some people aren't as educated on tone indicators as others."},
        {"user":"youDD1","content":"@cosmic-peaqh yhyh dw was joking"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ alright XD"},
        {"user":"AndrewB1501","content":"@cosmic-peaqh remove n't"},
        {"user":"percent-15","content":"@cosmic-peaqh The only ones I know are /j /srs /sarc /p"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ oh."}
    ]},
    {"user":"percent-15","content":"65 MORE MESSAGES UNTIL 10k!!!!!!","replies":[
        {"user":"youDD1","content":"@percent-15 AYOOOO"},
        {"user":"pnikolov-tcsns","content":"@percent-15 Yaaaaaaaay"},
        {"user":"percent-15","content":"@youDD1 Wat"},
        {"user":"youDD1","content":"@percent-15 nice/cool/amazing"}
    ]},
    {"user":"wizardmanmagic","content":"w elaruu","replies":[]},
    {"user":"wizardmanmagic","content":"top","replies":[]},
    {"user":"-yoimiyaa","content":"yall hating on an acc thats not even active","replies":[
        {"user":"youDD1","content":"@-yoimiyaa ikr why"},
        {"user":"pnikolov-tcsns","content":"@-yoimiyaa That's a solid point"}
    ]},
    {"user":"Skewb_ALT","content":"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","replies":[
        {"user":"youDD1","content":"@Skewb_ALT scratchL (probs nobody will get the reference)"}
    ]},
    {"user":"vollrineVSP1_","content":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru i","replies":[
        {"user":"huntali000","content":"@vollrineVSP1_ what did elaruu do wrong?"},
        {"user":"vollrineVSP1_","content":"@huntali000 I dunno"},
        {"user":"huntali000","content":"@vollrineVSP1_ @JamieD132"},
        {"user":"vollrineVSP1_","content":"@huntali000 what do they have to do with this"},
        {"user":"huntali000","content":"@vollrineVSP1_ The one who started the buisness"},
        {"user":"vollrineVSP1_","content":"@huntali000 ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}
    ]},
    {"user":"vollrineVSP1_","content":"Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru is a loser Elaru E","replies":[
        {"user":"pnikolov-tcsns","content":"@vollrineVSP1_ Why bro"},
        {"user":"pnikolov-tcsns","content":"@vollrineVSP1_ Just why"},
        {"user":"youDD1","content":"@vollrineVSP1_ bruh"},
        {"user":"Skewb_ALT","content":"@pnikolov-tcsns let him do it"},
        {"user":"vollrineVSP1_","content":"@pnikolov-tcsns I dunno"},
        {"user":"pnikolov-tcsns","content":"@vollrineVSP1_ He’s a loser huh? Then who also is"},
        {"user":"pnikolov-tcsns","content":"@vollrineVSP1_ GUESS"},
        {"user":"Skewb_ALT","content":"@pnikolov-tcsns you lol (do not take this seriously)"},
        {"user":"pnikolov-tcsns","content":"@Skewb_ALT I know"},
        {"user":"Skewb_ALT","content":"@pnikolov-tcsns guys leave him alone"}
    ]},
    {"user":"-potatopudding","content":"everyone h @tes you for no reason-","replies":[]},
    {"user":"MagnificentMi-Ann","content":"why everyone hating on @elaruu","replies":[
        {"user":"youDD1","content":"@MagnificentMi-Ann because they don't appreciate true greatness :("}
    ]},
    {"user":"pnikolov-tcsns","content":"Hi","replies":[]},
    {"user":"cosmic-peaqh","content":"✧ yeah, well- *retreats to gwdfi where you all should be right now* /nf /dkm /nbr /nsrs /hj","replies":[
        {"user":"Mitsukiislost","content":"@cosmic-peaqh Ew no"},
        {"user":"cosmic-peaqh","content":"@Mitsukiislost ✧ why, \"ew\" ? /gq"},
        {"user":"Mitsukiislost","content":"@cosmic-peaqh Can’t ever go there without being called a ‘cringe griffpatcher’"},
        {"user":"percent-15","content":"@cosmic-peaqh What does nf and dkm and nbr and nsrs mean"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ nf = not forcing, dkm = don't kill me, nbr = no but really, nsrs = not serious."},
        {"user":"-yoimiyaa","content":"@cosmic-peaqh ew gross"},
        {"user":"youDD1","content":"@Mitsukiislost relatable"},
        {"user":"cosmic-peaqh","content":"@Mitsukiislost ✧ oh :/"},
        {"user":"cosmic-peaqh","content":"@-yoimiyaa ✧ why are you saying that...? /gq"},
        {"user":"-yoimiyaa","content":"@cosmic-peaqh becuase its crinj"},
        {"user":"percent-15","content":"@cosmic-peaqh What does gq mean"},
        {"user":"cosmic-peaqh","content":"@-yoimiyaa ✧ uhh...it's just a chat area, but okay."},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ genuine question :j"},
        {"user":"-yoimiyaa","content":"@cosmic-peaqh that place is toxic and sensitive"},
        {"user":"percent-15","content":"@cosmic-peaqh What does :j mean"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ that's just a smile emoticon."},
        {"user":"cosmic-peaqh","content":"@-yoimiyaa ✧ hmm, not really sensitive. gaehive is more like that."},
        {"user":"-yoimiyaa","content":"@cosmic-peaqh ive investigated that place for about a year now, i probably know more about it than you. BOTH gaehive and gwdfi are senitive and toxic"},
        {"user":"percent-15","content":"@cosmic-peaqh Do you know any other / things"},
        {"user":"cosmic-peaqh","content":"@-yoimiyaa ✧ uhh...okay..."},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ yeah, i do. they're called \"tone indicators\"."},
        {"user":"percent-15","content":"@cosmic-peaqh I never knew their were so many"},
        {"user":"-yoimiyaa","content":"@-yoimiyaa have a nice day"},
        {"user":"cosmic-peaqh","content":"@percent-15 ✧ mhm, there's a lot."},
        {"user":"cosmic-peaqh","content":"@-yoimiyaa ✧ you too <3"}
    ]},
    {"user":"vollrineVSP1_","content":"elelelelelelelelelelel elaru is an LLLLL","replies":[
        {"user":"percent-15","content":"@vollrineVSP1_ Wat no"}
    ]},
    {"user":"BIitzy--","content":"why are yall here","replies":[]},
    {"user":"Lark--","content":"what","replies":[]},
    {"user":"DRAGONCAT341","content":"Why is everybody here","replies":[
        {"user":"cosmic-peaqh","content":"@DRAGONCAT341 ✧ ikr."},
        {"user":"youDD1","content":"@DRAGONCAT341 bc cool"},
        {"user":"percent-15","content":"@DRAGONCAT341 Because elaruu"}
    ]},
    {"user":"cosmic-peaqh","content":"✧ go to gwdfi.. NOW!!11!!","replies":[
        {"user":"youDD1","content":"@cosmic-peaqh no thanks"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ it's more active than this."},
        {"user":"youDD1","content":"@cosmic-peaqh so"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ ...it's easier to socialize."},
        {"user":"youDD1","content":"@cosmic-peaqh a smaller community makes less toxic things happen (no offence - GWDFI is great too)"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ fair enough."},
        {"user":"youDD1","content":"@cosmic-peaqh yh sorry"},
        {"user":"cosmic-peaqh","content":"@youDD1 ✧ it's fine. do as you please :j"}
    ]},
    {"user":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[]},
    {"user":"Skewb_ALT","content":"the new griffpatch","replies":[]},
    {"user":"KingRhoamKingRhoam","content":"yoo hoo?","replies":[]},
    {"user":"Skewb_ALT","content":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"user":"Windsong2","content":"Go back to gwdfi","replies":[
        {"user":"youDD1","content":"@Windsong2 no"}
    ]},
    {"user":"glass_foxes","content":"why do yall want gwdfi over here?","replies":[
        {"user":"percent-15","content":"@glass_foxes Because everyone's leaving :(("}
    ]},
    {"user":"-yoimiyaa","content":"lol","replies":[]},
    {"user":"percent-15","content":"WHERE IS EVERYONE?!?","replies":[
        {"user":"KingRhoamKingRhoam","content":"@percent-15 IM HERE"},
        {"user":"Skewb_ALT","content":"@percent-15 any way vote my pfp https://scratch.mit.edu/projects/943877826/"},
        {"user":"percent-15","content":"@KingRhoamKingRhoam Yey"}
    ]},
    {"user":"percent-15","content":"9857 yey","replies":[]},
    {"user":"percent-15","content":"First in 2 mins ☠️☠️☠️","replies":[]},
    {"user":"Skewb_ALT","content":"any way vote my pfp https://scratch.mit.edu/projects/943877826/","replies":[]},
    {"user":"percent-15","content":"WHERE IS EVERYONE?!?","replies":[
        {"user":"youDD1","content":"@percent-15 Woah people are talking about elaruu on Gwdfi now as well, and yester day we got someone say it on sosc… yey"},
        {"user":"percent-15","content":"@youDD1 sosc"},
        {"user":"youDD1","content":"@percent-15 Scratch object show community"},
        {"user":"percent-15","content":"@youDD1 https://scratch.mit.edu/studios/26515825/"}
    ]},
    {"user":"Annabeth369","content":"*materializes* what is this mystical place","replies":[]},
    {"user":"Skewb_ALT","content":"bruuuuuuuuuuuuuuuuuuuuuh","replies":[]},
    {"user":"evegau","content":"I was teleported here from GWDFI. What is this place?","replies":[
        {"user":"percent-15","content":"@evegau @elaruu; a chat room"},
        {"user":"percent-15","content":"@evegau That’s rarely active :("},
        {"user":"evegau","content":"@percent-15 Okay, I may drop in sometimes"}
    ]},
    {"user":"percent-15","content":"Someone leaves, and 2 more people arrive… perfect!","replies":[]},
    {"user":"Skewb_ALT","content":"whats going on were am i","replies":[
        {"user":"percent-15","content":"@Skewb_ALT Elaruu"},	
        {"user":"Skewb_ALT","content":"@percent-15 what the"},
        {"user":"Skewb_ALT","content":"@percent-15 is going on"}
    ]},
    {"user":"youDD1","content":"lets make the longest comment thread on elaruu","replies":[
        {"user":"percent-15","content":"@youDD1 Ok…."}
    ]},
    {"user":"vollrineVSP1_","content":"why are we here","replies":[
        {"user":"percent-15","content":"@vollrineVSP1_ Because here is cool"},
        {"user":"evegau","content":"@vollrineVSP1_ Good question."},
        {"user":"vollrineVSP1_","content":"@evegau yea"},
        {"user":"youDD1","content":"@vollrineVSP1_ because elaruu is slay"},
        {"user":"vollrineVSP1_","content":"@youDD1 whos elaru"},
        {"user":"youDD1","content":"@vollrineVSP1_ this profile"}
    ]},
    {"user":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count repost because buried by spam","replies":[]},
    {"user":"KingRhoamKingRhoam","content":"don't","replies":[
        {"user":"percent-15","content":"@KingRhoamKingRhoam Ok"}
    ]},
    {"user":"R_2_G","content":"i'm bored :P","replies":[
        {"user":"percent-15","content":"@R_2_G :/ we’ll get there without spamming"}
    ]},
    {"user":"percent-15","content":"Surely this counts as spam","replies":[
        {"user":"R_2_G","content":"@percent-15 yeh"},
        {"user":"R_2_G","content":"@percent-15 okay time to leave the chat _emojifadingaway_"},
        {"user":"percent-15","content":"@R_2_G :( bye!"},
        {"user":"youDD1","content":"@percent-15 The numbers? Yes"},
        {"user":"percent-15","content":"@youDD1 Yee"},
        {"user":"percent-15","content":"@youDD1 Why is your pfp Pato anyway"},
        {"user":"youDD1","content":"@percent-15 had nothing better in my downloads + it confuses people (I'm a secret account (: )"},
        {"user":"percent-15","content":"@youDD1 lol I have 100s of pfps saved to my computer; all of pato’s are included"},
        {"user":"youDD1","content":"@percent-15 could you make a project with them?"},
        {"user":"percent-15","content":"@youDD1 Ok I’ll do it later"},
        {"user":"youDD1","content":"@percent-15 ty also unfollow me pls"},
        {"user":"percent-15","content":"@youDD1 Ok… why?"},
        {"user":"youDD1","content":"@percent-15 reasons"}
    ]},
    {"user":"R_2_G","content":"9793","replies":[]},
    {"user":"R_2_G","content":"9792","replies":[]},
    {"user":"R_2_G","content":"9791","replies":[]},
    {"user":"R_2_G","content":"9790","replies":[]},
    {"user":"R_2_G","content":"9789","replies":[]},
    {"user":"R_2_G","content":"9788","replies":[]},
    {"user":"percent-15","content":"#DONT SPAM","replies":[
        {"user":"ThatWasWrong","content":"@percent-15 do you know"}
    ]},
    {"user":"R_2_G","content":"9787","replies":[
        {"user":"percent-15","content":"@R_2_G Approx 1 hour until 10k"}
    ]},
    {"user":"youDD1","content":"if y'all are spamming I'm moving to griffpatch","replies":[
        {"user":"percent-15","content":"@youDD1 Oop- I’ll stop"},
        {"user":"huntali000","content":"@youDD1 same"},
        {"user":"youDD1","content":"@percent-15 good"},
        {"user":"percent-15","content":"@youDD1 :)"}
    ]},
    {"user":"huntali000","content":"EALUR","replies":[
        {"user":"percent-15","content":"@huntali000 @ealuru"}
    ]},
    {"user":"percent-15","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #pickle :)","replies":[]},
    {"user":"percent-15","content":"Ye we don’t die","replies":[]},
    {"user":"youDD1","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count also i hate new scratcher comment wait time","replies":[
        {"user":"percent-15","content":"@youDD1 lol I know"}
    ]},
    {"user":"R_2_G","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"user":"R_2_G","content":"@R_2_G PLEASE DONT DIEEEEEEEEEEEEEEEEEE"}
    ]},
    {"user":"R_2_G","content":"#DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE","replies":[
        {"user":"youDD1","content":"@R_2_G Stop spam or I report"}
    ]},
    {"user":"percent-15","content":"We can’t give up until 10k! But even then we shouldn’t give up","replies":[]},
    {"user":"KingRhoamKingRhoam","content":"d","replies":[
        {"user":"R_2_G","content":"@KingRhoamKingRhoam #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"user":"R_2_G","content":"@KingRhoamKingRhoam CMON PASTE IT WITH ME"},
        {"user":"KingRhoamKingRhoam","content":"@R_2_G I don't spam"}
    ]},
    {"user":"percent-15","content":"Starting to slow down…","replies":[
        {"user":"R_2_G","content":"@percent-15 #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE #DONT DIE"},
        {"user":"percent-15","content":"@R_2_G YESS!!!"},
        {"user":"R_2_G","content":"@percent-15 PASTE IT WITH ME"}
    ]},
    {"user":"VXOLET_","content":"hmm","replies":[]},
    {"user":"percent-15","content":"F","replies":[]},
    {"user":"youDD1","content":"f's in the chat for @jamied132","replies":[]},
    {"user":"youDD1","content":"so ST didn't reopen @elaruu? what if someone hacked it?","replies":[
        {"user":"percent-15","content":"@youDD1 Well we don’t know that for sure. All we know is it wasn’t @cheddargirl"},
        {"user":"youDD1","content":"@percent-15 I'll write them an email later asking the devs if they reopened it"},
        {"user":"youDD1","content":"@percent-15 *devs"},
        {"user":"percent-15","content":"@youDD1 ‘K"},
        {"user":"youDD1","content":"@percent-15 I can't believe I corrected my mistake with the same mistake i meant mods"},
        {"user":"percent-15","content":"@youDD1 XD"}
    ]},
    {"user":"huntali000","content":"@eiaruu","replies":[
        {"user":"percent-15","content":"@huntali000 https://scratch.mit.edu/studios/34368349"}
    ]},
    {"user":"R_2_G","content":"welcomechainsama","replies":[
        {"user":"R_2_G","content":"@R_2_G Tumajarbisaun"},
        {"user":"R_2_G","content":"@R_2_G Wifenlooof"},
        {"user":"R_2_G","content":"@R_2_G Eselifterbraun"},
        {"user":"R_2_G","content":"@R_2_G Anweculbetugtbaby"},
        {"user":"R_2_G","content":"@R_2_G Aslonskysrblu"},
        {"user":"R_2_G","content":"@R_2_G Yuaksoinocenow"},
        {"user":"R_2_G","content":"@R_2_G Buchyulaidsosun"},
        {"user":"R_2_G","content":"@R_2_G Wenomechainsama"},
        {"user":"R_2_G","content":"@R_2_G Wenomechainsama (Sama)"},
        {"user":"R_2_G","content":"@R_2_G Tumajarbisaun (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G Wifenlooof (Looof)"},
        {"user":"R_2_G","content":"@R_2_G Eselifterbraun (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G Anweculbetugtbaby"},
        {"user":"R_2_G","content":"@R_2_G Aslonskysrblu (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G Yuaksoinocenow"},
        {"user":"R_2_G","content":"@R_2_G Buchyulaidsosun (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G Wenomechainsama"},
        {"user":"R_2_G","content":"@R_2_G Wenomechainsama (Sama)"},
        {"user":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G (Looof)"},
        {"user":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G Sama (Sama)"},
        {"user":"R_2_G","content":"@R_2_G (Ye, ye)"},
        {"user":"R_2_G","content":"@R_2_G (Looof)"},
        {"user":"R_2_G","content":"@R_2_G ye ye"}
    ]},
    {"user":"percent-15","content":"2 minutes of inactivity ☠️ this is a sign that it’s collapsing","replies":[
        {"user":"btdim1","content":"@percent-15 What do you mean? @elaruu has been inactive for 1 year and 1 month!"},
        {"user":"R_2_G","content":"@percent-15 no look up there"},
        {"user":"percent-15","content":"@btdim1 I meant no ones commented for 2 mins :/"}
    ]},
    {"user":"R_2_G","content":"this is a good chatroom ngl","replies":[
        {"user":"percent-15","content":"@R_2_G You finally get it"},
        {"user":"R_2_G","content":"@R_2_G why do i only have 28 followers. WHAT AM I DOING WRONG _veryverydepressedemoji_"},
        {"user":"R_2_G","content":"@R_2_G @followerspls"},
        {"user":"percent-15","content":"@R_2_G *29"},
        {"user":"R_2_G","content":"@percent-15 yey"}
    ]},
    {"user":"percent-15","content":"289 ‘til 10k!! Expected to get there in 1 hour and 17 minutes","replies":[
        {"user":"youDD1","content":"@percent-15 wait yours?"}
    ]},
    {"user":"huntali000","content":"stay stay stay","replies":[
        {"user":"percent-15","content":"@huntali000 Yes yes yes"}
    ]},
    {"user":"Quandaila","content":"gg","replies":[
        {"user":"percent-15","content":"@Quandaila :( bye"}
    ]},
    {"user":"VXOLET_","content":"This is active","replies":[
        {"user":"percent-15","content":"@VXOLET_ As is expected of such a great chat room"},
        {"user":"VXOLET_","content":"@percent-15 Yep"}
    ]},
    {"user":"R_2_G","content":"@helpme","replies":[]},
    {"user":"Quandaila","content":"I'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm i'm cool","replies":[]},
    {"user":"R_2_G","content":"exit","replies":[
        {"user":"percent-15","content":"@R_2_G Stay!!"},
        {"user":"R_2_G","content":"@percent-15 @help"},
        {"user":"R_2_G","content":"@percent-15 @please @help @me @get @out @of @here"},
        {"user":"percent-15","content":"@R_2_G Why do u need help"},
        {"user":"percent-15","content":"@R_2_G What’s wrong with this place??"},
        {"user":"R_2_G","content":"@percent-15 @i @can't @leave"},
        {"user":"R_2_G","content":"@R_2_G _e_"},
        {"user":"R_2_G","content":"@R_2_G :((((((((((((((((((((((("},
        {"user":"percent-15","content":"@R_2_G There’s no need to leave tho"},
        {"user":"R_2_G","content":"@percent-15 yay"},
        {"user":"Skewb_ALT","content":"@percent-15 whats going on"}
    ]},
    {"user":"huntali000","content":"_money_","replies":[
        {"user":"R_2_G","content":"@huntali000 _rob_"}
    ]},
    {"user":"$system","content":"comments between December 16 and December 22 were not restored","replies":[]},
    {"user":"Jadafs","content":"No, no no no NO!","replies":[
        {"user":"percent-15","content":"@Jadafs Yes, yes yes yes YES!"},
        {"user":"Jadafs","content":"@percent-15 This place is cursed, and must be DESTROYED!"},
        {"user":"percent-15","content":"@Jadafs W-why"}
    ]},
    {"user":"Berry154","content":"but st should really just permanately ban this, ik people like it here and stuff but whoever owns this account didn't allow it to be a chatroom, and it isnt allowed","replies":[
        {"user":"percent-15","content":"@Berry154 There’s a good chance that their never gonna log in again so they shouldn’t care"},
        {"user":"percent-15","content":"@Berry154 What the st should really do is just email them"}
    ]},
    {"user":"percent-15","content":"@elaruu should get to 10k messages by the end of the day","replies":[]},
    {"user":"Voyager_III","content":"_10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_ _10mil_","replies":[]},
    {"user":"percent-15","content":"Top _B)_","replies":[]},
    {"user":"-CyberScratcher-","content":"sure ig","replies":[]},
    {"user":"pato--","content":"E","replies":[
        {"user":"percent-15","content":"@pato-- Ě"}
    ]},
    {"user":"sonicthehedgehog859","content":"@chat_here","replies":[]},
    {"user":"jik_coder","content":"@Elbrus","replies":[]},
    {"user":"jik_coder","content":"Elaruu Is back!","replies":[]},
    {"user":"-NintendoProGamer-","content":"e l a r u u !","replies":[]},
    {"user":"Pipercall_warriors","content":"Why is everyone spamming this person?","replies":[
        {"user":"-NintendoProGamer-","content":"@Pipercall_warriors it's a chatroom"}
    ]},
    {"user":"Voyager_III","content":"ELARUU IS BACK!!! :O","replies":[]},
    {"user":"unmissable","content":"@griffpatch","replies":[]},
    {"user":"percent-15","content":"We need to revive this","replies":[]},
    {"user":"percent-15","content":"Happy @elaruu day everyone!! :)","replies":[
        {"user":"SteichFam","content":"@percent-15 A good day!"}
    ]},
    {"user":"percent-15","content":"Top","replies":[]},
    {"user":"unmissable","content":"#stopgriffpatchcomments →→ @elaruu (2","replies":[]},
    {"user":"unmissable","content":"#stopgriffpatchcomments →→ @elaruu (1","replies":[
        {"user":"SteichFam","content":"@unmissable Yes"}
    ]},
    {"user":"-Officer_Kevin-","content":"WHICH ACCOUNT IS CHEESE MAN ON","replies":[
        {"user":"-Officer_Kevin-","content":"@-Officer_Kevin- Urh ig I donno if they are a cheese man or a cheese [other gender here]. So erm if your reading this tell me"},
        {"user":"SteichFam","content":"@-Officer_Kevin- Jamie got network banned, they moved to YouTube, talk to precent 15 about that"},
        {"user":"huntali000","content":"@SteichFam Wait what's cheese man's YT??"},
        {"user":"SteichFam","content":"@huntali000 idk talk to precent"}
    ]},
    {"user":"unmissable","content":"https://api.jamied132.is-a.dev/users/elaruu/messages/count","replies":[
        {"user":"unmissable","content":"@unmissable wow we've been spamming them"}
    ]},
    {"user":"percent-15","content":"Is @elbrus back aswell?","replies":[
        {"user":"percent-15","content":"@percent-15 Nope :("}
    ]},
    {"user":"-Cinnamon_Roll-","content":"OMG YEY","replies":[]},
    {"user":"huntali000","content":"I wish upon a star that this place will be closed again /j","replies":[
        {"user":"SteichFam","content":"@huntali000 No"}
    ]},
    {"user":"huntali000","content":"blink","replies":[]},
    {"user":"_Simulation_Theory_","content":"ඞ","replies":[]},
    {"user":"_Simulation_Theory_","content":"the end is nigh","replies":[
        {"user":"SteichFam","content":"@_Simulation_Theory_ Yes and no!"},
        {"user":"huntali000","content":"@_Simulation_Theory_ so hurry"}
    ]},
    {"user":"SteichFam","content":"WE NEED TO REVIVE THIS PLACE!!~","replies":[
        {"user":"percent-15","content":"@SteichFam Yess"}
    ]},
    {"user":"SteichFam","content":"Top!!!!!","replies":[]},
    {"user":"$system","content":"Comments were re-opened on the 15th/16th of December","replies":[]},
    {"user":"$system","content":"This is where the comments were closed for the first time","replies":[]},
    {"user":"hi-there-_-","content":"What the heck is going on?","replies":[
        {"user":"pato--","content":"@hi-there-_- Good question"},
        {"user":"undefinedcow","content":"@hi-there-_- this is kinda funny"},
        {"user":"Th0r12","content":"@hi-there-_- Every chat is closinh"},
        {"user":"Quandaila","content":"@hi-there-_- The comments on @griffpatch got turned off"},
        {"user":"Th0r12","content":"@hi-there-_- Because we shipped people"},
        {"user":"my-account-haha","content":"@hi-there-_- uh, us griffpatchers shipped each otheer COUGH COUUUUUUUUUUUUUUUGGGGGGGGGHGFC BHGFCV"}
    ]},
    {"user":"tjb3171","content":"broooo griffs comments are down","replies":[
        {"user":"Th0r12","content":"@tjb3171 And @grifatch_tutor and @netheri"}
    ]},
    {"user":"Th0r12","content":"CALLING ALL GRIFFPATCHERS! WE NEED TO GO TO GWDFI TO CHAT!","replies":[
        {"user":"pato--","content":"@Th0r12 Gimme the link please"},
        {"user":"Th0r12","content":"@pato-- I don't know itlol"}
    ]},
    {"user":"Th0r12","content":"@griifpatch_tutor down and @netheri","replies":[
        {"user":"pato--","content":"@Th0r12 Griif?"},
        {"user":"hippopotamus_star","content":"@Th0r12 netheri is down now"}
    ]},
    {"user":"Quandaila","content":"We need to chat here before the comments get turned off here too","replies":[
        {"user":"Th0r12","content":"@Quandaila Yes"}
    ]},
    {"user":"Th0r12","content":"No! Everything is closing, I might go to gwdfi","replies":[]},
    {"user":"pato--","content":"Did someone ship me while I was inactive? I wanna know :3","replies":[]},
    {"user":"Quandaila","content":"Well at least we didn't get muted until tomorrow morning. (help)","replies":[]},
    {"user":"TotallyPiperMccloud","content":"THEY SHUT EVERYTHING DOWN","replies":[]},
    {"user":"TotallyPiperMccloud","content":"OH NO","replies":[]},
    {"user":"Th0r12","content":"We are chatting on @netheri !!!!","replies":[
        {"user":"Neon_Parrot","content":"@Th0r12 They shut down the comments"}
    ]},
    {"user":"THEFURYSNAP","content":"i think grifftopia shippping shall now be iilegeal","replies":[
        {"user":"teddy-demon","content":"@THEFURYSNAP yep O____O I never liked that trend anyway lol"},
        {"user":"THEFURYSNAP","content":"@teddy-demon ye. --> @griffpatch_tutor"},
        {"user":"Quandaila","content":"@teddy-demon yea"}
    ]},
    {"user":"little_millk","content":"bro etghhh","replies":[]},
    {"user":"Th0r12","content":"Comments on griffpatch were shut down!","replies":[
        {"user":"_Ast3r","content":"@Th0r12 Because of shipping real user together."},
        {"user":"Th0r12","content":"@_Ast3r Yeh, ik, I think we're going to griffpatch_tutor"},
        {"user":"_Ast3r","content":"@Th0r12 alr"},
        {"user":"THEFURYSNAP","content":"@Th0r12 @griffpatch_tutor"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"user":"TheComputerCrasher","content":"top ","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@TheComputerCrasher no :)"},
        {"user":"TheUltimateHoodie","content":"@TheComputerCrasher The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 1"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"user":"Th0r12","content":"Top ","replies":[
        {"user":"TheUltimateHoodie","content":"@Th0r12 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 2"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"top ","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"cya, and nom ","replies":[]},
    {"user":"Hope_In_The_Cross","content":"I gotta go now, I declare this will be the top comment forever ","replies":[
        {"user":"TheUltimateHoodie","content":"@Hope_In_The_Cross The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 3"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"portal: @deleted","replies":[]},
    {"user":"Hope_In_The_Cross","content":"portal: @banned","replies":[
        {"user":"Hope_In_The_Cross","content":"@Hope_In_The_Cross No one is banned..."},
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross it probably just got deleted"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"portal: @JamieD534","replies":[
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant lol"}
    ]},
    {"user":"Hope_In_The_Cross","content":"portal: @JamieD132","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"at one point, elaruu will have more followers than griffpatch _B)_","replies":[
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant yes :)"},
        {"user":"ElEvatEd_ElEphant","content":"@T9-CARV oh no your back. and it seems you've skipped from 21 to 26 lol"},
        {"user":"ElEvatEd_ElEphant","content":"@T9-CARV well you clearly dont know how to count XD"}
    ]},
    {"user":"Hope_In_The_Cross","content":"At one point, Elaruu will have more followers than me _B)_","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yes :)"},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant lol"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"34g5sd32gfc66cf _B)_","replies":[
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant no :) (its telling me i'm spamming now lol)"},
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross lol"}
    ]},
    {"user":"Hope_In_The_Cross","content":"0oiu9hyugyvfhbjuji;poihougihijop _B)_","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross no :)"}
    ]},
    {"user":"$system","content":"a lot of comments by spam bots were not restored","replies":[]},
    {"user":"-NintendoProGamer-","content":"ytyftjytfj","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"FIRST IN 4 HOURS!!!!!","replies":[]},
    {"user":"xxxxxxx-70","content":"rare username with no numbers and few letters","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@xxxxxxx-70 I got 2 four-letter usernames with no numbers of symbols but the ST deleted them"},
        {"user":"xxxxxxx-70","content":"@ElEvatEd_ElEphant Sad"}
    ]},
    {"user":"-Rodri","content":"are we here cuz of spam bots orrr??","replies":[
        {"user":"Hope_In_The_Cross","content":"@-Rodri or"},
        {"user":"hippopotamus_star","content":"@-Rodri No this is just some place that @ElEvatEd_ElEphant wishes was like griffpatch's chat"},
        {"user":"-Rodri","content":"@hippopotamus_star doesn't look like it's working, (i mean, kinda)"},
        {"user":"hippopotamus_star","content":"@-Rodri it's not. just go to griffpatch's profile thats where everyone is at. nothing much happens here."}
    ]},
    {"user":"lilju12","content":"first in 4 hours","replies":[]},
    {"user":"404_Gamer","content":"Hey there. @griffpatch chat died so I went here.","replies":[
        {"user":"sweetskies383-","content":"@404_Gamer Wdym?"},
        {"user":"404_Gamer","content":"@sweetskies383- It's good now."}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"First in 10 again","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"First in 10","replies":[]},
    {"user":"SkippyKite","content":"Helo","replies":[
        {"user":"SkippyKite","content":"@SkippyKite Wait how did i get here?"},
        {"user":"ElEvatEd_ElEphant","content":"@SkippyKite Idk how did you get here??"},
        {"user":"SkippyKite","content":"@ElEvatEd_ElEphant Idk"}
    ]},
    {"user":"Netheri","content":"Good morning, elaruuians!","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@Netheri NETHERIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!"},
        {"user":"Hope_In_The_Cross","content":"@Netheri Your pfp!?!??!?!?!?!"},
        {"user":"Netheri","content":"@Hope_In_The_Cross Yeah, me is changing pfp around a little..."},
        {"user":"Hope_In_The_Cross","content":"@Netheri what about Christmas?!?!?!?!?"},
        {"user":"Netheri","content":"@Hope_In_The_Cross Oh, yeah. I switched to the wrong pfp... LOL"},
        {"user":"Hope_In_The_Cross","content":"@Netheri Oh xD"}
    ]},
    {"user":"theboreduser-_-","content":"don’t reply","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@theboreduser-_- ok"}
    ]},
    {"user":"Berry154","content":"ok im going to be honest, this isnt a preferred place for me to stay, i think that griffpatch_tutor is better","replies":[
        {"user":"clutcher1","content":"@Berry154 griffpatch_tutor"},
        {"user":"clutcher1","content":"@Berry154 @griffpatch_tutor"},
        {"user":"Berry154","content":"@clutcher1 i know where his profile is, so please dont reply to me with it"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"i think its safe.... @griffpatch","replies":[]},
    {"user":"ThePersonWhoIsAmogus","content":"https://scratch.mit.edu/classes/882182/ got the class so report it","replies":[]},
    {"user":"tutumao","content":"what's so special about this","replies":[
        {"user":"tutumao","content":"@tutumao Really don't want me to end this like how I ended the Kettle Kingdom huh"},
        {"user":"ElEvatEd_ElEphant","content":"@tutumao you didnt end kettle kingdom, it just ended because I got banned"}
    ]},
    {"user":"Iliketoscratch111","content":"i put the new 4g on the jeep","replies":[]},
    {"user":"Iliketoscratch111","content":"i just realise no one is at griffpatch and they are wasting there time...","replies":[]},
    {"user":"DuckSupporter","content":"@griffpatch_tutor is better unless its also getting spammed just go there","replies":[]},
    {"user":"ThePersonWhoIsAmogus","content":"SONAFA","replies":[]},
    {"user":"DuckSupporter","content":"go to @griffpatch-tutor","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@DuckSupporter 0_0 XD"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"6 pages in 1 minute?!?!","replies":[
        {"user":"Iliketoscratch111","content":"@ElEvatEd_ElEphant yeah bc 100 accounts"},
        {"user":"Y-a-s-h-i-r-oN-3-N-E","content":"@ElEvatEd_ElEphant what is going on"},
        {"user":"ElEvatEd_ElEphant","content":"@Iliketoscratch111 ye :/"},
        {"user":"ElEvatEd_ElEphant","content":"@Y-a-s-h-i-r-oN-3-N-E spam"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"does anyone know how long its been going for?","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"helo folks","replies":[]},
    {"user":"Hope_In_The_Cross","content":"THE BOT IS BACK XDDDD","replies":[]},
    {"user":"virtualstudent12345","content":"I have to be here because griffpatch is getting spammed","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@virtualstudent12345 yes"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"spread the word and liven this place","replies":[
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant Will do!!"},
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross :D thx"},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant np lol!"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant Ima be famous :D"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam ye"},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant ELARUUUUUUUUUUUUUUUUUUU?"},
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yessssssssssss"},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant xD"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"Spread the WARd! @donuts vs @elaruu vs @The Patch vs @Stuffytheslob9 vs @pato-- vs @The Patch_tutor! Who will win? Vote now by commenting on the profile you choose!","replies":[]},
    {"user":"Clicking_Game","content":"sjhdsjf","replies":[]},
    {"user":"colorjuice","content":"Why @elaruu?","replies":[
        {"user":"SteichFam","content":"@colorjuice I don’t know. Let’s go to @donut"},
        {"user":"VXOLET_Child","content":"@SteichFam no stay in @elaruu"}
    ]},
    {"user":"$system","content":"a lot of comments by spam bots were not restored","replies":[]},
    {"user":"$system","content":"a few comments were not restored","replies":[]},
    {"user":"Hope_In_The_Cross","content":"first in 5 min?","replies":[]},
    {"user":"pato--","content":"first in 3 min","replies":[]},
    {"user":"HedwigsHat","content":"phew","replies":[]},
    {"user":"Mitsukiislost","content":"second comment in a hour","replies":[]},
    {"user":"_lazybear_-","content":"first comment in a hour","replies":[
        {"user":"SteichFam","content":"@_lazybear_- First in 2 min"}
    ]},
    {"user":"elaruuian","content":"@mitchelldzamko is the first follower","replies":[]},
    {"user":"TheMindScratcher","content":"May I clarify something — Elbrus and Elaruu are NOT in a war. Apparently, if we advertise chats in @Elaruu, we are stealing @ElEvatEd_ElEphant’s 2 months of hard work and dedication. So, I have agreed to advertise casually on non-chat’s if they allow advertising, perhaps ‘Advertise Here!’ projects. I am waiting for @SteichFam to agree to this, but @Elbrus and @Elaruu are not in a war.","replies":[
        {"user":"SteichFam","content":"@TheMindScratcher TWO MONTHS?! No way. But I agree: *in magic sparkle signature stuff* ✨"},
        {"user":"SteichFam","content":"@SteichFam *Laura Wishwalker"}
    ]},
    {"user":"SSSA-","content":"I have decided to be an elaruuian","replies":[
        {"user":"CocoCat324","content":"@SSSA- Hoi elaruuian"},
        {"user":"SteichFam","content":"@SSSA- Kewl"}
    ]},
    {"user":"NewsRealm","content":"Scratcher war (elaruu vs elbrus) https://scratch.mit.edu/projects/927085346/","replies":[]},
    {"user":"JustMoses12","content":"First in 1 hour","replies":[]},
    {"user":"umqq","content":"How's your day, elaruu?","replies":[]},
    {"user":"umqq","content":"crayon rage","replies":[]},
    {"user":"THEFURYSNAP","content":"bigSHOT bigSHOT bigSHOOOOT","replies":[]},
    {"user":"NewsRealm","content":"i'm making news","replies":[
        {"user":"SteichFam","content":"@NewsRealm Love your reports"}
    ]},
    {"user":"-NintendoProGamer-","content":"i’m og elaruuian and you’re not haha","replies":[
        {"user":"Hope_In_The_Cross","content":"@-NintendoProGamer- _B)_"}
    ]},
    {"user":"Th0r12","content":"https://www.youtube.com/playlist?list=PLC9C7ECF854F62BF9 it's called elaruu!!!!!!","replies":[]},
    {"user":"squirrelygirl123","content":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"user":"SteichFam","content":"@squirrelygirl123 It’s a long story. People follow this person for a portal"}
    ]},
    {"user":"HedwigsHat","content":"imagine if elaruu suddenly became active","replies":[
        {"user":"SteichFam","content":"@HedwigsHat Lol @elbrus would be shocking if it bécame activer"}
    ]},
    {"user":"Bub2dgh6","content":"follow me","replies":[]},
    {"user":"BLEB45","content":"f4f please i followed you","replies":[]},
    {"user":"WorldOfCountries","content":"(This is the real last comment ever here) why should i comment here? i wait an hour a a comment? this chat is dead and not active, so cya guys.","replies":[
        {"user":"SteichFam","content":"@WorldOfCountries @griffpatch is slightly worse"},
        {"user":"ske-ater","content":"@WorldOfCountries don't people sleep and eat?? im confused on your claim"},
        {"user":"TheMindScratcher","content":"@ske-ater He’s saying that there’s 1 comment an hour here but there’s ~150 comments an hour on Griffpatch"}
    ]},
    {"user":"Jaegxr","content":"@TheUltimateHoodie is dedicated","replies":[]},
    {"user":"-NintendoProGamer-","content":"WHY DOES THIS PERSON HAVE SO MANY FOLLOWERS THEY DON'T EVEN POST ANYTHING","replies":[
        {"user":"TheUltimateHoodie","content":"@-NintendoProGamer- The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 40"}
    ]},
    {"user":"Voyager_III","content":"*pant* I just got to *pant* the top... my space helmet is running out *pant* of air!","replies":[
        {"user":"TheUltimateHoodie","content":"@Voyager_III The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 41"},
        {"user":"Voyager_III","content":"@TheUltimateHoodie Please don't spam :("},
        {"user":"ElEvatEd_ElEphant","content":"@Voyager_III There’s technically no rules about multiple ads"}
    ]},
    {"user":"WorldOfCountries","content":"my last comment here is....... yes","replies":[]},
    {"user":"ske-ater","content":"wait... can anyone hear me up here?","replies":[
        {"user":"TheUltimateHoodie","content":"@ske-ater The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 42"}
    ]},
    {"user":"TheMindScratcher","content":"[LAST COMMENT ON ELARUU] Top. See you guys. This place, well it CANNOT be fair. I’m leaving Elbrus in hope of a better chat, maybe better then @griffpatch.","replies":[
        {"user":"ske-ater","content":"@TheMindScratcher cya"},
        {"user":"SteichFam","content":"@TheMindScratcher Aww. Can I help?"}
    ]},
    {"user":"ske-ater","content":"F-finally....","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"Yes the stars are pretty cool","replies":[
        {"user":"TheUltimateHoodie","content":"@ElEvatEd_ElEphant The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 43"}
    ]},
    {"user":"ske-ater","content":"Wow! Look at the solar system! Can't you believe it?","replies":[
        {"user":"ske-ater","content":"@ske-ater I'm setting up shelter here underground. I'm exhausted from that hiking... *snore*"},
        {"user":"ske-ater","content":"@ske-ater Good... Solar Morning?"},
        {"user":"ske-ater","content":"@ske-ater I'm digging my own grave!!! I need to stop talking!"},
        {"user":"ElEvatEd_ElEphant","content":"@ske-ater XD"},
        {"user":"ske-ater","content":"@ske-ater Welp, I surrender"},
        {"user":"ElEvatEd_ElEphant","content":"@ske-ater yeyyyyyyyyyyyyy"},
        {"user":"Tendedclub70","content":"@ElEvatEd_ElEphant AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. HIT THAT STUPID LINKKKKKKKKKKKKKKKKKKKKKKKKKKUHGHGFDSHQEWDWSED https://scratch.mit.edu/projects/926652260 AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH. AHHHHHHHHHHHHJAI98HFUEWDYGF3BDUEhji @wQBnewIQJubye @d#wihebyrf#newjheybhvn#edybhewHBhdnfjewhyqbhdne"},
        {"user":"TheUltimateHoodie","content":"@Tendedclub70 The Lava Keeps Rising is an interactive shooter game with lots of intense action and is filled with deadly lava! Check it out here: https://scratch.mit.edu/projects/923551866/! If you love, fave, and give a suggestion in the comments, I will give you a free follow! Thanks! RNTAS: 46"},
        {"user":"Tendedclub70","content":"@TheUltimateHoodie bruh"}
    ]},
    {"user":"$system","content":"Comments between november 8 and november 17 were not restored","replies":[]},
    {"user":"MaoZedongze","content":"Trash chat, delete this mess already.","replies":[]},
    {"user":"News_By_Kamoebas","content":"S","replies":[]},
    {"user":"News_By_Kamoebas","content":"A","replies":[]},
    {"user":"News_By_Kamoebas","content":"V","replies":[]},
    {"user":"News_By_Kamoebas","content":"E","replies":[
        {"user":"News_By_Kamoebas","content":"@News_By_Kamoebas ‎"}
    ]},
    {"user":"News_By_Kamoebas","content":"T","replies":[
        {"user":"DuckSupporter","content":"@News_By_Kamoebas i will now stay up till 2 am playing super mario maker 2, goodbye"}
    ]},
    {"user":"News_By_Kamoebas","content":"H","replies":[]},
    {"user":"News_By_Kamoebas","content":"E","replies":[]},
    {"user":"News_By_Kamoebas","content":"M","replies":[]},
    {"user":"-NintendoProGamer-","content":"k","replies":[]},
    {"user":"booogwooogz","content":"dis is pretty gud","replies":[]},
    {"user":"virtualstudent12345","content":"Elarrrrruuuuuuuuuuuuu no","replies":[
        {"user":"News_By_Kamoebas","content":"@virtualstudent12345 frogy chair wiff no faec"}
    ]},
    {"user":"News_By_Kamoebas","content":"quick question, why do people like this account too much? (i have a grudge on this account because a message about it broke my text chain)","replies":[
        {"user":"Hope_In_The_Cross","content":"@News_By_Kamoebas Its the best chat place :)"},
        {"user":"btdim1","content":"@News_By_Kamoebas I don't know ask @ElEvatEd_ElEphant."},
        {"user":"btdim1","content":"@News_By_Kamoebas It's also active during nighttime (where I'm from)."},
        {"user":"MaoZedongze","content":"@News_By_Kamoebas Because they are trying to make it like griffpatch keeps failing, its a wannabe, don't use it, use @griffpatch, way better and more active, others agree too"},
        {"user":"MaoZedongze","content":"@btdim1 No it isn't, I got proof, last active 30 minutes ago per comment, stop lying."},
        {"user":"virtualstudent12345","content":"@Hope_In_The_Cross Lies"},
        {"user":"News_By_Kamoebas","content":"@MaoZedongze y e s indeed."},
        {"user":"Hope_In_The_Cross","content":"@virtualstudent12345 NOOOOOOOOOO"}
    ]},
    {"user":"FollowingFollows","content":"maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","replies":[]},
    {"user":"MaoZedongze","content":"Griffpatch has fun projects. this is an empty profile with follows for some reason., just what? and why?","replies":[
        {"user":"Xx_Lily-Shadow_xX","content":"@MaoZedongze then why are you here? just leave if you hate it child."},
        {"user":"ElEvatEd_ElEphant","content":"@MaoZedongze leave and n e v e r return"},
        {"user":"MaoZedongze","content":"@Xx_Lily-Shadow_xX I already told you, learn to read my child"},
        {"user":"btdim1","content":"@MaoZedongze Because it's Griffpatch's secret Estonian alt :0"},
        {"user":"Xx_Lily-Shadow_xX","content":"@MaoZedongze your avoiding the question"},
        {"user":"Tancred_Master","content":"@ElEvatEd_ElEphant Nice, stay here forever in this sad pathetic boring chat, do not comment at griffpatch ever at all"},
        {"user":"ElEvatEd_ElEphant","content":"@Tancred_Master ok"},
        {"user":"Hope_In_The_Cross","content":"@MaoZedongze This is XXXXXXXXXXx better :)"}
    ]},
    {"user":"News_By_Kamoebas","content":"T","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"*interrupts*","replies":[
        {"user":"News_By_Kamoebas","content":"@ElEvatEd_ElEphant *Dies*"}
    ]},
    {"user":"News_By_Kamoebas","content":"H","replies":[]},
    {"user":"News_By_Kamoebas","content":"E","replies":[]},
    {"user":"News_By_Kamoebas","content":"M","replies":[]},
    {"user":"-NintendoProGamer-","content":"that mao guy is why your comments are being deleted (2 reports = delete)","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- yes I know that already but thx"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant np"},
        {"user":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- worlds fastest reply???"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant skill"},
        {"user":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- lol"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant yes"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant 11 second reply ☠️☠️☠️"},
        {"user":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- wow"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant Y"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant i would’ve been <2 seconds but i was commenting too quickly"},
        {"user":"ElEvatEd_ElEphant","content":"@-NintendoProGamer- oh :/"},
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant yeah"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"report @MaoZedongze","replies":[
        {"user":"-NintendoProGamer-","content":"@ElEvatEd_ElEphant already done"},
        {"user":"Xx_Lily-Shadow_xX","content":"@ElEvatEd_ElEphant done that"},
        {"user":"btdim1","content":"@ElEvatEd_ElEphant Why?"},
        {"user":"ElEvatEd_ElEphant","content":"@btdim1 innapropriate comments. they are gone now"},
        {"user":"btdim1","content":"@ElEvatEd_ElEphant Oh."}
    ]},
    {"user":"Jaegxr","content":"comments = g o n e","replies":[
        {"user":"-NintendoProGamer-","content":"@Jaegxr real"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"where are my comments going","replies":[
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant Same!! I think someone is reporting them -_-"},
        {"user":"ElEvatEd_ElEphant","content":"@Hope_In_The_Cross yeah"}
    ]},
    {"user":"Hope_In_The_Cross","content":"How did my comment get deleted? ...","replies":[
        {"user":"CousinTimmy","content":"@Hope_In_The_Cross me too"},
        {"user":"Hope_In_The_Cross","content":"@CousinTimmy Really? What did you say?"},
        {"user":"CousinTimmy","content":"@Hope_In_The_Cross report those guys lol"},
        {"user":"Hope_In_The_Cross","content":"@CousinTimmy I feel like someones reporting them because its happened more than once for no reason now..."},
        {"user":"CousinTimmy","content":"@Hope_In_The_Cross yeah on griffpatch"},
        {"user":"Hope_In_The_Cross","content":"@CousinTimmy Thats weird and yeah, i'm going to report them!"},
        {"user":"SteichFam","content":"@Hope_In_The_Cross Boooo"},
        {"user":"Jaegxr","content":"@SteichFam ty"},
        {"user":"Jaegxr","content":"@SteichFam for confusing me"},
        {"user":"Hope_In_The_Cross","content":"@SteichFam Fr lol"}
    ]},
    {"user":"Kayla_emo_sloth","content":"@griffpatch","replies":[]},
    {"user":"Jaegxr","content":"Guys Report @Doom-Guy-- and @MaoZedongze they are spreading lies and bullying ppl ect ect","replies":[]},
    {"user":"$system","content":"Comments on November 6 (late nov 5 to early nov 7) were not restored","replies":[]},
    {"user":"elaruuian","content":"ELARUU RESPONDED! https://scratch.mit.edu/projects/919219790/","replies":[]},
    {"user":"mariocraft987","content":"WHO THE HELL IS @elaruu PLS TELL ME!","replies":[
        {"user":"elaruuian","content":"@mariocraft987 New griffpatch"},
        {"user":"mariocraft987","content":"@elaruuian cool the next griffpatch"},
        {"user":"elaruuu","content":"@mariocraft987 Yes."}
    ]},
    {"user":"mariocraft987","content":"who are you?","replies":[
        {"user":"elaruuu","content":"@mariocraft987 Who are you?"},
        {"user":"mariocraft987","content":"@elaruuu I AM my username, Why are you so famous"},
        {"user":"elaruuu","content":"@mariocraft987 I am famous because a cheese wanted to make me famous. @ProArmadillo made me."}
    ]},
    {"user":"Bub2dgh6","content":"Hi little kids obsessing over griffpatch ripoff so you back to @griffpatch and become griffpatchers again!","replies":[
        {"user":"btdim1","content":"@Bub2dgh6 Go to @Chatroom instead."},
        {"user":"eIaruu-","content":"@Bub2dgh6 no"},
        {"user":"elaruuu","content":"@Bub2dgh6 Who are you?"},
        {"user":"elaruuian","content":"@Bub2dgh6 no man"},
        {"user":"elaruuian","content":"@btdim1 no"},
        {"user":"elaruuian","content":"@Bub2dgh6 who even ls griffpatch"}
    ]},
    {"user":"AllTheFunStudios","content":"may i ask the followers of this guy why they are following this guy","replies":[
        {"user":"Hope_In_The_Cross","content":"@AllTheFunStudios Cause elaruu is awesome _B)_"},
        {"user":"mariocraft987","content":"@Hope_In_The_Cross who is elaruu"},
        {"user":"Hope_In_The_Cross","content":"@mariocraft987 This account lol"}
    ]},
    {"user":"mariocraft987","content":"hello","replies":[]},
    {"user":"btdim1","content":"There are many @elaruu copycats all of the sudden... very suspicious.","replies":[
        {"user":"Hope_In_The_Cross","content":"@btdim1 lol"},
        {"user":"elaruuu","content":"@btdim1 *fans"}
    ]},
    {"user":"_TopHat","content":"hi","replies":[
        {"user":"mariocraft987","content":"@_TopHat hello"}
    ]},
    {"user":"Bub2dgh6","content":"Who is “elaruu”","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"Continue the remix chain https://scratch.mit.edu/projects/919210515/remixtree/","replies":[]},
    {"user":"Bub2dgh6","content":"?","replies":[]},
    {"user":"elaruuian","content":"@elaruuer","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"@eiaruuian @elaruuing @eiaruuing","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant (name snipes up for grabs)"},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant xD"}
    ]},
    {"user":"elaruuian","content":"ELARUUING","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@elaruuian @elaruuing"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"https://scratch.mit.edu/projects/919216265/ elaruu replied to ME aswell!","replies":[]},
    {"user":"elaruuian","content":"@ELARUUs-BIGGEST-FAN","replies":[]},
    {"user":"Hope_In_The_Cross","content":"So many elaruus lol","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"Hi @elaruu!","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant Oh, hello there, @JamieD132! Your one of my favourite fans! If I could, I would give you a million dollars! _B)_"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Bruh lol"},
        {"user":"ElEvatEd_ElEphant","content":"@ElEvatEd_ElEphant https://scratch.mit.edu/projects/919216265/ XD"},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher lol. I should have done it on my profile so I could delete it"}
    ]},
    {"user":"TheMindScratcher","content":"https://scratch.mit.edu/projects/919213054/ ELARUU REPLIED!","replies":[]},
    {"user":"Elaruu1","content":"lol","replies":[]},
    {"user":"elaruuian","content":"Elaruu!","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"whoos back? m-mee! :)","replies":[
        {"user":"elaruuu","content":"@ElEvatEd_ElEphant Hello."},
        {"user":"Hope_In_The_Cross","content":"@ElEvatEd_ElEphant I just got back rn!"}
    ]},
    {"user":"-NintendoProGamer-","content":"h","replies":[]},
    {"user":"TheComputerCrasher","content":"It'd be crazy if this person randomly checked their Scratch account to find all of these messages lol","replies":[
        {"user":"-NintendoProGamer-","content":"@TheComputerCrasher https://api.jamied132.is-a.dev/users/elaruu/messages/count"},
        {"user":"elaruuu","content":"@TheComputerCrasher Wow."}
    ]},
    {"user":"KingRhoamKingRhoam","content":"If only Elaruu responds to messages","replies":[]},
    {"user":"i-am-a-person-123","content":"very dead","replies":[]},
    {"user":"TheMindScratcher","content":"Would you, @ElEvatEd_ElEphant, like to ally for The Great Events…?","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher i still hav no idea what the great events are :/"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Grifftopia will be dictated"},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher *googles definition of dictated* by who tho!!?"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Remember the army of 2 people who were about to mass report you?"},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher there was 3 people, and yeah"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Them."},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher Aaand how do they plan on getting in control of us?"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Controlling, Reporting, Bossing…"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant War will happen."},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher ohhh nooo that sounds bad... We should gather an army"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Yes, so far we have…"},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher am I in it?"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Well, do you want to?"},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher yes pls!"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant Okay!"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant If anyone asks, pretend we weren’t here."},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher ok..."}
    ]},
    {"user":"i-am-a-person-123","content":"elaruu?","replies":[]},
    {"user":"NoEmmy","content":"#Dead Chat","replies":[
        {"user":"NoEmmy","content":"@NoEmmy * #DeadChat"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"*activeness*","replies":[]},
    {"user":"1op9yun","content":"OH NO;;;;","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@1op9yun Ikr it's so dead"}
    ]},
    {"user":"1op9yun","content":"Dead chat","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@1op9yun Yea :/"},
        {"user":"ElEvatEd_ElEphant","content":"@1op9yun Have you used your daily ad? Cuz you could advertise it in @griffpatch"},
        {"user":"1op9yun","content":"@ElEvatEd_ElEphant no?"},
        {"user":"ElEvatEd_ElEphant","content":"@1op9yun Good :)"}
    ]},
    {"user":"HummusMomE","content":"elaruu > griffpatch???","replies":[
        {"user":"doggosintown","content":"@HummusMomE true"},
        {"user":"virtualstudent12345","content":"@HummusMomE No"}
    ]},
    {"user":"doggosintown","content":"Look at these random things I found: a ȧ ä ᶏ ɐ ɑ α ɒ ɒ̇ ɒ̈ ꭤ æ æ̇ æ̈ ꜵ ᴀ A 4 ꜭ","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@doggosintown Őķ"},
        {"user":"TheMindScratcher","content":"@doggosintown Look at these random things I found:"},
        {"user":"doggosintown","content":"@ElEvatEd_ElEphant ⓨⓐⓨ ⓢⓞⓜⓔⓞⓝⓔ ⓝⓞⓣⓘⓒⓔⓓ"},
        {"user":"doggosintown","content":"@TheMindScratcher oh wow"},
        {"user":"1op9yun","content":"@doggosintown 啊 吧从的额发给和就 i看了了；"},
        {"user":"doggosintown","content":"@1op9yun Ah, from the forehead to and on I looked?? what?"},
        {"user":"1op9yun","content":"@doggosintown I typed it........ -_-"},
        {"user":"doggosintown","content":"@1op9yun randomly?"},
        {"user":"1op9yun","content":"@doggosintown yup but in alphabet"},
        {"user":"doggosintown","content":"@1op9yun nice"},
        {"user":"EeveeMaster--","content":"@doggosintown wow"}
    ]},
    {"user":"doggosintown","content":"qwertyujik","replies":[]},
    {"user":"Jigglypuffcupidcute","content":"griffpatch better (NO OPINION BASHING)","replies":[
        {"user":"SteichFam","content":"@Jigglypuffcupidcute I have no opinion #NeutralitiesRule"}
    ]},
    {"user":"Elm0-_-","content":"How did this page suddenly blow up in popularity","replies":[
        {"user":"SteichFam","content":"@Elm0-_- IDK"},
        {"user":"KingRhoamKingRhoam","content":"@Elmo-_- Good questsion"},
        {"user":"elaruuian","content":"@Elm0-_- some guy sending this guy's user"}
    ]},
    {"user":"milkberry","content":"N-no....go back to griffpatch...stob...","replies":[
        {"user":"TheMindScratcher","content":"@milkberry It's fine"},
        {"user":"ElEvatEd_ElEphant","content":"@milkberry That is your daily Griffpatch ad, no more :)"},
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant At least we get that part of the deal"},
        {"user":"milkberry","content":"@ElEvatEd_ElEphant Nope, griffpatches profile has the 'daily ad rule' but, @elaruu has no rules, look at the about me and wiwo, see?"},
        {"user":"ElEvatEd_ElEphant","content":"@milkberry Yeah. I'm not sure if it's an actual rule tho..."}
    ]},
    {"user":"TheMindScratcher","content":"Ħ","replies":[
        {"user":"SteichFam","content":"@TheMindScratcher Hi :D"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"Ħelloooooo!","replies":[
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant UGH EVERYONE'S SO INACTIVE"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Yea :( I wish I was allowed to mention them on griffpatches profile more than once, but according to the rule that us elaruuians SOMEHOW agreed to, we can only mention them once each :( have u used your daily mention?"},
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant Just now :("},
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant I wasn't even part of that decision. Ima protest :("},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Ok :) hopefully it works, I just used mine too :/"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Yeah Ik! Apparently @ProArmadillo agreed to one small thing, and then @TheMindScratcher added a bunch of rules and claimed @ProArmadillo agreed to them aswell :("},
        {"user":"SteichFam","content":"@ElEvatEd_ElEphant WHAT-- I SHOULD HAVE A SAY IN STUFF-- I am always forgotten and overlooked as a griffpatcher"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam YESS WE SHALL FIGHT BACK! WE SHALL PROTEST"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Protest on @TheMindScratcher..."},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Never mind, he closed comments, protest on @griffpatch"},
        {"user":"TheMindScratcher","content":"@ElEvatEd_ElEphant I know what you’re up to."},
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher Ik, and idc"},
        {"user":"nngr-cno","content":"@TheMindScratcher Yas TMS. I am on your side. My team of eight+ people and you will DOMINATE"},
        {"user":"TheMindScratcher","content":"@nngr-cno YAY"},
        {"user":"nngr-cno","content":"@TheMindScratcher YESSIRR"}
    ]},
    {"user":"SteichFam","content":"Guys, there's a like 2 hr comment wait between these :cri:","replies":[]},
    {"user":"spongebobsquarpant22","content":"Top","replies":[]},
    {"user":"SteichFam","content":"Hello, griffpatchers and elaruuians! Laura Wishwalker (your friendly wizard and food supplier) is here with your twice-daily delivery of requested snacks! Today’s delivery includes Splish, Recess Minis, donuts, Zanthar cake, pie, prime sticks, golden oreos, and oreos. Please enjoy! If you would like to add something to the list, great. Tell me, and I will have your requested food option in tonight’s delivery. If you enjoy your food, please tip me (I take GED). Enjoy!","replies":[
        {"user":"Jigglypuffcupidcute","content":"@SteichFam Griffpatch's VIP room has infinite of these"},
        {"user":"SteichFam","content":"@Jigglypuffcupidcute Really? How do I get in?"},
        {"user":"Jigglypuffcupidcute","content":"@SteichFam ask to join"},
        {"user":"SteichFam","content":"@Jigglypuffcupidcute Ask who?"},
        {"user":"Jigglypuffcupidcute","content":"@SteichFam Ask in the studio"},
        {"user":"SteichFam","content":"@Jigglypuffcupidcute K, I found it. I am food deliverer for the chat rooms here"}
    ]},
    {"user":"SteichFam","content":"We need to increase commenting on this.","replies":[
        {"user":"GoldenPizza3","content":"@SteichFam california breeze"},
        {"user":"ElEvatEd_ElEphant","content":"@SteichFam Ikr :((("}
    ]},
    {"user":"spongebobsquarpant22","content":"Woohoo","replies":[]},
    {"user":"CousinTimmy","content":"Comment above me is a fAiLuRe","replies":[
        {"user":"TheBluePortal","content":"@CousinTimmy well well well"}
    ]},
    {"user":"CousinTimmy","content":"1 hour","replies":[]},
    {"user":"CousinTimmy","content":"first in 3 hrs because i am superior","replies":[]},
    {"user":"greatman1111","content":"i noticed @elaruu has 123 followers","replies":[]},
    {"user":"Netheri","content":"Good morning, people of earth.","replies":[
        {"user":"CousinTimmy","content":"@Netheri I am him"},
        {"user":"ElEvatEd_ElEphant","content":"@Netheri not me"},
        {"user":"grant-mikes-cn","content":"@Netheri Hey, wsg netheri. notice that you are famous :P"},
        {"user":"Netheri","content":"@grant-mikes-cn I'm not really that famous. I'm doing fine, just chilling here on scratch. What about you?"},
        {"user":"EmeraldGames4","content":"@grant-mikes-cn Hello"},
        {"user":"EmeraldGames4","content":"@grant-mikes-cn Oh wrong person to reply"},
        {"user":"EmeraldGames4","content":"@Netheri Good morning"}
    ]},
    {"user":"CousinTimmy","content":"I am the best","replies":[
        {"user":"Yousernaeme","content":"@CousinTimmy 100% tru you are unbeatable"}
    ]},
    {"user":"SebastianGab123","content":"@eluwu is better","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@SebastianGab123 @elaruwu also exists now"}
    ]},
    {"user":"-Officer_Kevin-","content":"Spam bots: robots made of canned meat","replies":[]},
    {"user":"ElEvatEd_ElEphant","content":"If only :(","replies":[
        {"user":"alueoa","content":"@ElEvatEd_ElEphant if only what?? D:"},
        {"user":"ElEvatEd_ElEphant","content":"@alueoa activeness was present"},
        {"user":"alueoa","content":"@ElEvatEd_ElEphant ah i seee-"}
    ]},
    {"user":"ElEvatEd_ElEphant","content":"hii!","replies":[
        {"user":"alueoa","content":"@ElEvatEd_ElEphant hellooo. :)"},
        {"user":"ElEvatEd_ElEphant","content":"@alueoa Hiii! :)"},
        {"user":"alueoa","content":"@ElEvatEd_ElEphant How are you!!!!! :D"},
        {"user":"ElEvatEd_ElEphant","content":"@alueoa Good :D"},
        {"user":"alueoa","content":"@ElEvatEd_ElEphant that's good :)"},
        {"user":"ElEvatEd_ElEphant","content":"@alueoa :D what about u?"},
        {"user":"alueoa","content":"@ElEvatEd_ElEphant I'm doing pretty gooddd thanks for askinggg c:"},
        {"user":"ElEvatEd_ElEphant","content":"@alueoa np :)"},
        {"user":"alueoa","content":"@ElEvatEd_ElEphant awh"}
    ]},
    {"user":"Stuffytheslob9","content":"i like eating my alphabet and reciting my pizza :3","replies":[]},
    {"user":"BlockyFin","content":"Anyone else know about planetballs","replies":[]},
    {"user":"CocoCat324","content":"Does anyone else dare challenge my spam abilities?","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@CocoCat324 yes >:)"},
        {"user":"CocoCat324","content":"@ElEvatEd_ElEphant Hmph"},
        {"user":"CocoCat324","content":"@ElEvatEd_ElEphant I will spam you later when you are active"}
    ]},
    {"user":"TheMindScratcher","content":"@griffpatch has, like, 1 comment 5 minutes, I'm moving here for the time being.","replies":[
        {"user":"ElEvatEd_ElEphant","content":"@TheMindScratcher yay! But this is worse again :("}
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
                <div class="content">`+com.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>')+`</div>
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
                    <div class="content">`+rep.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>')+`</div>
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
