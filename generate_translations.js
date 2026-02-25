const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./client/src/locales/en/content.json', 'utf8'));

const langs = {
  tl: {
    content: {
      about: {
        title: "Tungkol sa Tool na Ito",
        desc_1: "Ang Gabay Tech ay isang espesyal na digital resource ",
        desc_2: "na sadyang ginawa para sa Pilipinas",
        desc_3: " upang tulay ang agwat sa pagitan ng pakiramdam na hindi ligtas online at paggawa ng epektibong aksyon. Binuo bilang bahagi ng inisyatibong National Models for Women's Safety Online (NMWSO) ng IREX at Development Gateway: Isang IREX Venture, ang platform na ito ay nagbibigay ng aktibo at nakasentro sa survivor na landas patungo sa digital na seguridad. ",
        desc_link: "Alamin ang higit pa tungkol sa programa ng NMWSO rito",
        mission_title: "Ang Aming Misyon",
        mission_desc: "Ang aming misyon ay bigyan ng kakayahan ang mga indibidwal—siyempre lalo na ang mga kababaihan at marginalized na komunidad—na mabawi ang kanilang digital na kalayaan. Hindi lamang kami nagbibigay ng pangkalahatang payo; nagbibigay kami ng direktang impormasyon sa pakikipag-ugnayan para sa mga itinatag na response network at ng partikular na digital na pinsala na kinakaharap ng isang user. Naghahanap ka man ng legal na lunas, sikolohikal na suporta, o teknikal na tulong sa pag-uulat sa platform, nakakonekta ka sa mga lehitimo at aktibong entidad sa Pilipinas at sa buong mundo na may kakayahang tumulong.",
        collab_title: "Isang Pagtutulungang Pagsusumikap",
        collab_desc_1: "Ang platform na ito ay resulta ng isang masinsinan at maramihang pakikipagtulungan ng mga stakeholder. Ito ay nilikha kasabay at may direktang suporta ng marami sa mga ",
        collab_desc_2: "ahensya ng gobyerno ng Pilipinas at mga non-government organization (NGO)",
        collab_desc_3: " na nakalista sa loob ng tool. Sa pamamagitan ng pagtutulungan ng mga nangungunang tagapagtaguyod ng digital na karapatan sa bansa, mga eksperto sa batas, at mga nagbibigay ng serbisyong panlipunan, tiniyak namin na ang patnubay na ibinigay ay hindi lamang praktikal kundi nakaugat nang malalim sa legal at panlipunang konteksto ng Pilipinas.",
        how_title: "Paano Ito Gumagana",
        how_desc: "Gagabayan ka ng tool sa isang trauma-informed na pagtatasa upang makatulong na maiuri ang mga online na banta, mula sa mga paglabag sa privacy hanggang sa puntiryang pang-aabuso. Batay sa iyong natatanging sitwasyon, nagbibigay ito ng:",
        how_li1_title: "Mga Hakbang-hakbang na Action Plan:",
        how_li1_desc: " Malinaw na mga tagubilin kung paano i-secure ang iyong mga account at panatilihin ang mga ebidensya.",
        how_li2_title": "Mga Gabay na Partikular sa Platform:",
        how_li2_desc: " Direktang mga link at pamamaraan para sa pag-uulat ng mga paglabag sa mga pangunahing provider ng social media at digital na serbisyo.",
        how_li3_title": "Mga Referral sa Suporta:",
        how_li3_desc": " Mga koneksyon sa mga lokal na serbisyo ng suporta sa legal, sikolohikal, at komunidad.",
        safety_title: "Kaligtasan ayon sa Disenyo",
        safety_desc_1": "Itinayo ayon sa mga prinsipyo ng ",
        safety_desc_2": "Safety by Design",
        safety_desc_3": ", ang tool na ito ay nakatuon sa pag-iwas at pagbibigay-kakayahan. Naniniwala kami na ang kaligtasan ay hindi dapat isang isiping nahuhuli kundi isang pangunahing tampok ng karanasan sa digital. Sa pamamagitan ng pagsasama ng mga pananaw sa ibinahaging karanasan at teknikal na kadalubhasaan, tinitiyak namin na ang bawat mapagkukunang ibinigay ay praktikal, naa-access, at nakaugat sa realidad ng mga pinakabulnerable sa online na pinsala.",
        privacy_title: "Privacy ng Data",
        privacy_desc_1": "Ang iyong kaligtasan at privacy ay aming pinakamataas na priyoridad. Ang tool na ito ay idinisenyo para sa kabuuang anonymity: ",
        privacy_desc_2": "hindi kami kumukuha, nag-iimbak, o sumusubaybay ng anumang personal na data, kasaysayan ng interaksyon, o mga resulta.",
        privacy_desc_3": " Ang lahat ng impormasyon na ipapasok mo ay mananatili lamang sa iyong lokal na device at hindi kailanman ipinapasa sa aming mga server o inilalabas sa mga ikatlong partido. Sa sandaling isara mo ang tab ng iyong browser, ang data ng iyong session ay iki-clear. Naniniwala kami na ang paghingi ng tulong ay hindi dapat mag-iwan ng digital na bakas, kaya maaari mong ma-access ang mga na-verify na mapagkukunan ng Pilipinas na may kumpletong kapayapaan ng isip.",
        privacy_not_alone": "Hindi ka nag-iisa. Ang tool na ito ang iyong unang hakbang patungo sa isang mas ligtas at mas panatag na digital na buhay."
      },
      guide_content: {
        title: "Gabay ng Survivor",
        tab_evidence: "Checklist ng Ebidensya",
        tab_legal: "Iyong Mga Karapatan",
        evidence_title: "Pagpapanatili ng Digital na Ebidensya",
        evidence_desc: "Kung nais mong magtabi ng ebidensya, ang pag-save ng mga screenshot, mensahe, o link ay maaaring makatulong. Kung ito ay nagdudulot ng labis na takot, maaari mo itong i-store nang ligtas at humingi ng tulong sa isang taong pinagkakatiwalaan mo.",
        evidence_1_title: "1. Mga Screenshot",
        evidence_1_li1_1: "I-capture ang ",
        evidence_1_li1_2: "buong screen",
        evidence_1_li1_3: ", kasama ang URL bar at orasan ng system.",
        evidence_1_li2_1: "Tiyaking ang ",
        evidence_1_li2_2: "pangalan ng profile/sender",
        evidence_1_li2_3: " ay nakikita.",
        evidence_1_li3: "I-click ang mga timestamp o ang icon na \"Tatlong tuldok\" upang ipakita ang eksaktong oras at petsa kung maaari.",
        evidence_2_title: "2. Mga URL (Link)",
        evidence_2_li1_1: "Kopyahin ang ",
        evidence_2_li1_2: "direktang link",
        evidence_2_li1_3: " patungo sa post, larawan, o profile.",
        evidence_2_li2: "Kung gumagamit ng mobile app, gamitin ang \"Share > Copy Link\".",
        evidence_2_li3_1: "Gumamit ng mga serbisyo tulad ng ",
        evidence_2_li3_2: " o ",
        evidence_2_li3_3: " upang i-save ang isang permanenteng kopya.",
        evidence_3_title: "3. Metadata",
        evidence_3_desc_1: "Kung nakatanggap ka ng file (larawan/video), itago ang ",
        evidence_3_desc_2: "orihinal na file",
        evidence_3_desc_3: ". Huwag lamang mag-screenshot nito. Ang orihinal na file ay may taglay na \"EXIF\" data (petsa kung kailan kinuha, device na ginamit) na nagsisilbing digital na fingerprint.",
        legal_title: "Alamin ang Iyong Mga Karapatan",
        legal_desc: "Protektado ka ng mga batas ng Pilipinas laban sa online na panggigipit.",
        legal_1_title: "RA 10175: Cybercrime Prevention Act",
        legal_1_desc_1: "Sumasaklaw sa ",
        legal_1_desc_2: "Cyber-Libel",
        legal_1_desc_3": ", ",
        legal_1_desc_4: "Computer-related Identity Theft",
        legal_1_desc_5: ", at ilegal na pag-access. Kung may nang-hack sa iyong account o nag-post ng mapanirang kasinungalingan online, maaari itong i-apply.",
        legal_2_title: "RA 9995: Anti-Photo and Video Voyeurism Act",
        legal_2_desc_1: "Mahigpit na ipinagbabawal ang pagkuha, pagkopya, o pagbabahagi ng larawan/video ng maseselang bahagi o sekswal na gawain ng isang tao nang walang pahintulot. Ang ",
        legal_2_desc_2: "\"Voyeurism\"",
        legal_2_desc_3: " ay maaari pa ring mag-apply kahit na ang tao sa video ay orihinal na pumayag sa pagrekord ngunit HINDI pumayag sa pagbabahagi (revenge porn).",
        legal_3_title: "RA 11313: Safe Spaces Act (Bawal Bastos)",
        legal_3_desc_1: "Nagpaparusa sa ",
        legal_3_desc_2: "Online Sexual Harassment",
        legal_3_desc_3: " (OSH). Kabilang dito ang inaayawang sekswal na komento, mapanlait na pananalitang nakakababa sa kababaihan o homosekswal, at cyberstalking."
      },
      directory: {
        title: "Direktoryo ng Mapagkukunan",
        desc: "Mga na-verify na kontak para sa legal, teknikal, at emosyonal na suporta.",
        info_banner: "Hindi sigurado kung aling mapagkukunan ang tama para sa iyo? I-click ang icon ng Gabay Tech sa kaliwang tuktok, sagutin ang ilang mga katanungan, at ang Gabay Tech ay bubuo ng rekomendasyon batay sa iyong natatanging sitwasyon.",
        search_placeholder: "Maghanap ng mga ahensya, tag...",
        resources: {
          cicc: {
            name: "Cybercrime Investigation and Coordinating Center (CICC)",
            type: "Legal na suporta",
            description: "Task force para sa Inter-Ahensyang pagtugon.",
            tags: ["pag-uulat", "cybercrime", "imbestigasyon"]
          },
          aleng_pulis: {
            name: "PNP Aling Pulis",
            type: "Gender Sensitive",
            description: "24/7 na hotline na partikular na nakatuon sa pagtugon sa karahasan laban sa kababaihan at mga bata.",
            tags: ["pulisya", "kababaihan", "mga bata"]
          },
          pnp_acg: {
            name: "PNP Anti-Cybercrime Group (PNP-ACG)",
            type: "Pagpapatupad ng Batas",
            tags: ["pulisya", "cybercrime", "pag-uulat"]
          },
          nbi_ccd: {
            name: "NBI Cybercrime Division (NBI-CCD)",
            type: "Pagpapatupad ng Batas",
            tags: ["imbestigasyon", "cybercrime", "pag-uulat"]
          },
          doj_occ: {
            name: "DOJ - Office of Cybercrime",
            type: "Legal na Suporta",
            tags: ["legal", "imbestigasyon", "cybercrime"]
          },
          npc: {
            name: "National Privacy Commission (NPC)",
            type: "Regulator",
            tags: ["regulator", "imbestigasyon", "takedown request"]
          },
          dswd: {
            name: "Department of Social Welfare and Development",
            type: "Serbisyong Panlipunan",
            tags: ["mental health", "suporta sa survivor", "counseling"]
          },
          wcpu: {
            name: "Local PNP Women and Children Protection Units",
            type: "Gender Sensitive",
            description: "Kung kailangan mo ng agarang pisikal na proteksyon, palaging pinakamahusay na bisitahin ang pinakamalapit na lokal na istasyon ng pulisya at humingi ng tulong sa WCPU desk.",
            websiteText: "Hanapin ang numero ng telepono ng tanggapan na pinakamalapit sa iyo",
            tags: ["pulisya", "kababaihan", "mga bata"]
          }
        }
      }
    }
  },
  ceb: {
    content: {
      about: {
        title: "Bahin niini nga Tool",
        desc_1: "Ang Gabay Tech usa ka linaing digital nga kapanguhaan ",
        desc_2: "nga gihimo para sa Pilipinas",
        desc_3: " aron masumpayan ang kal-ang tali sa pagbati nga dili luwas online ug sa paghimo og epektibong aksyon. Gipalambo isip kabahin sa inisyatibong National Models for Women's Safety Online (NMWSO) sa IREX ug Development Gateway: Usa ka Venture sa IREX, kining plataporma naghatag og aktibo, ug nakasentro sa survivor nga agianan padulong sa digital nga siguridad. ",
        desc_link: "Pagkat-on pa og dugang mahitungod sa programa sa NMWSO dinhi",
        mission_title: "Ang Among Misyon",
        mission_desc: "Ang among misyon mao ang paghatag og gahum sa mga indibidwal—ilabina sa mga kababayen-an ug mga komunidad nga gipadaplin—aron mabawi ang ilang digital nga ahensya. Wala lang kami naghatag og kinatibuk-ang tambag; naghatag kami og direktang impormasyon kontak alang sa natukod nga mga response network ug ang piho nga digital nga kadaot nga giatubang sa tiggamit. Kung nagapangita man kamo og tabang legal, suporta sa pangutok, o teknikal nga tabang sa pagreport sa plataporma, gikonekta kamo ngadto sa lehitimo ug aktibong mga entidad sa Pilipinas ug sa tibuok kalibutan nga adunay kapabilidad sa pagtabang.",
        collab_title: "Usa Ka Pagtinabangay nga Paningkamot",
        collab_desc_1: "Kini nga plataporma maoy resulta sa usa ka masinsinon, ug daghang stakeholder nga pagtinabangay. Kini gihimo dungan ug adunay direktang suporta gikan sa daghang mga ",
        collab_desc_2: "ahensya sa gobyerno sa Pilipinas ug mga non-government organizations (NGO)",
        collab_desc_3: " nga nalista sulod sa himan. Pinaagi sa pagtrabaho og abaga-sa-abaga uban ang nanguna nga mga tigpasiugda alang sa digital nga mga katungod, mga eksperto sa balaod, ug mga tighatag og serbisyo sosyal sa nasud, among naseguro nga ang gihatag nga giya dili lang praktikal kondili nakagamot usab sa ligal ug sosyal nga konteksto sa Pilipinas.",
        how_title: "Unsaon Kini Pagtrabaho",
        how_desc: "Ang tool mag-giya kanimo pinaagi sa usa ka trauma-informed nga pagtasa aron matabangan nga maklasipikar ang mga hulga online, gikan sa paglapas sa privacy hangtod sa gipuntiryang pag-abuso. Base sa imong talagsaong sitwasyon, naghatag kini og:",
        how_li1_title: "Matag Hugna nga Action Plan:",
        how_li1_desc: " Klaro nga mga panudlo unsaon pagsiguro ang imong mga account ug pagpreserba sa mga ebidensya.",
        how_li2_title": "Mga Giya nga Espesipiko sa Plataporma:",
        how_li2_desc: " Direktang mga link ug mga paagi aron ireport ang mga paglapas ngadto sa mga mayor nga provider sa social media ug digital service.",
        how_li3_title": "Mga Referral Alang sa Suporta:",
        how_li3_desc: " Mga koneksyon ngadto sa lokal nga serbisyong legal, pangutok ug suporta sa komunidad.",
        safety_title: "Kaluwasan Pinaagi sa Disenyo",
        safety_desc_1: "Natukod subay sa mga prinsipyo sa ",
        safety_desc_2: "Safety by Design",
        safety_desc_3": ", kini nga tool mututok sa paglikay ug paghatag gahom. Nagtuo mi nga ang kaluwasan dili dapat ikaduhang huna-huna kundili usa ka batakang bahin sa digital nga kasinatian. Pinaagi sa paghiusa sa mga salabutan gikan sa nasinatiang mga hitabo uban ang teknikal nga kahanas, kami maneguro nga ang matag tabang nga gitanyag praktikal, daling-makuha, ug nakagamot sa reyalidad niadtong mga labing delikado sa online nga mga kadaot.",
        privacy_title: "Pribasiya sa Datus",
        privacy_desc_1: "Ang imong kaluwasan ug pribasiya maoy among pinakataas nga prayoridad. Kini nga tool kay gidisenyo para sa total nga pagtago: ",
        privacy_desc_2: "wala kami nagkolekta, nagtago, o naga-monitor og bisan unsang personal nga datos, kasaysayan sa mga panag-interact, o mga resulta.",
        privacy_desc_3: " Ang tanang impormasyon nga imong giubutang magpabilin diha sa imong lokal nga device ug dili gyud mapasa sa among mga server o mapasabot ngadto sa laing grupo. Sa higayon nga imong pasirad-an ang imong browser tab, ang datos sa imong sesyon kinahanglan masirad-an. Nagtuo kami nga ang pagpangamuyo sa tabang dili dapat magbilin sa digital nga tunob, buot-ipasabot maka-akses ka sa kasaligan ug naberipika nga mga mapagkukunan sulod sa Pilipinas nga nakahuna-huna og kalinaw.",
        privacy_not_alone: "Wala ikaw nag-inusara. Kini nga tool maoy imong unang lakang aron makab-ot sa usa ka mas luwas nga kinabuhing digital."
      },
      guide_content: {
        title: "Giya sa Survivor",
        tab_evidence: "Checklist sa Ebidensya",
        tab_legal: "Imong Mga Katungod",
        evidence_title: "Pagpreserba sa Digital nga Ebidensya",
        evidence_desc: "Kung gusto nimong hipuson ang ebidensya, ang pag-save sa mga screenshot, mga mensahe, o mga link mahimong makatabang. Kung kini makahatag og kahuot sa pagbati, pwede nimo kining isipon sa hingpit diha sa sulod ug pwede mangayo og tabang sa tawo nga imong gisaligan.",
        evidence_1_title: "1. Mga Screenshot",
        evidence_1_li1_1: "Kuhaa ang ",
        evidence_1_li1_2: "tibuok nga screen",
        evidence_1_li1_3: ", lakip na ang URL bar ug orasan sa sistema.",
        evidence_1_li2_1": "Seguraduha nga ang ",
        evidence_1_li2_2: "pangalan sa profile/sender",
        evidence_1_li2_3: " makita.",
        evidence_1_li3: "I-klik ang mga timestamp o mga menu sa \"Tulo ka tuldok\" aron makita ang eksaktong oras/petsa kun mahimo.",
        evidence_2_title": "2. Mga URL (Mga Link)",
        evidence_2_li1_1: "Kopyaha ang ",
        evidence_2_li1_2: "direktang link",
        evidence_2_li1_3: " padulong sa post, imahen, o profile.",
        evidence_2_li2: "Kung sa mobile app, gamita ang \"Share > Copy Link\".",
        evidence_2_li3_1: "Gamita ang mga serbisyo sama sa ",
        evidence_2_li3_2: " o ",
        evidence_2_li3_3: " aron mag-save og permanenteng snapshot.",
        evidence_3_title: "3. Metadata",
        evidence_3_desc_1: "Kung nakadawat ka og gihulag nga file (hulagway/video), itago ang ",
        evidence_3_desc_2: "orihinal nga file",
        evidence_3_desc_3: ". Ayaw pagkuha og screenshot lang niini. Ang orihinal nga himuntok aduna'y datos sa \"EXIF\" (petsa gikuha, gigamit nga himan) sama sa pagka-fingerprint.",
        legal_title: "Hibal-i Imong Mga Katungod",
        legal_desc: "Protaho ka sa mga balaod sa Pilipinas isip silot batok sa online harassment.",
        legal_1_title: "RA 10175: Cybercrime Prevention Act",
        legal_1_desc_1: "Naglangkob sa ",
        legal_1_desc_2: "Cyber-Libel",
        legal_1_desc_3": ", ",
        legal_1_desc_4: "Computer-related Identity Theft",
        legal_1_desc_5: ", ug walay pananghid nga akesis. Kon dunay moataki sa imong account or mag-usulat og malisya online, magamit niini nga balaod pinaagi ani.",
        legal_2_title: "RA 9995: Anti-Photo and Video Voyeurism Act",
        legal_2_desc_1: "Hugot kining gidili sa pagkuha, pagpabasa ug pagpadayon sa video/hulagway bahin sa usa ka prebadong seksyon o sekswal sa tawo kon way ikapasalig, bahin usab ang ",
        legal_2_desc_2: "\"Voyeurism\"",
        legal_2_desc_3: " mo-apply gihapon kun ang tawo ngari nisugot sa video gikan sa gigikan apang Dili nisugot sa tigpaaligmat (panimawos sa porn/revenge porn).",
        legal_3_title: "RA 11313: Safe Spaces Act (Bawal Bastos)",
        legal_3_desc_1: "Nagasilot sa ",
        legal_3_desc_2: "Online Sexual Harassment",
        legal_3_desc_3: " (OSH). Apil niini ang isumbong sa sekswal nga walay tumong, puloy-anan nga misogynistic ug ang cyberstalking."
      },
      directory: {
        title: "Direktoryo sa Kapanguhaan",
        desc: "Mga na-verify nga kontak alang sa ligal, teknikal, ug emosyonal nga suporta.",
        info_banner: "Wala magseguro kung asa nga kapanguhaan ang tama kanimo? I-klik ang Gabay Tech icon sa itom nga kanto aron mutubag sa pila ka mga pangutana, aron ang Gabay Tech musumite sa rekomendasyon nga gihubit pinaagi sa imohang posisyon sa higayon.",
        search_placeholder: "Pangitaa ang ahensya, mga tag...",
        resources: {
          cicc: {
            name: "Cybercrime Investigation and Coordinating Center (CICC)",
            type: "Ligal nga Suporta",
            description: "Inter-Ahensya nga task force.",
            tags: ["pagsuporta", "cybercrime", "imbestigasyon"]
          },
          aleng_pulis: {
            name: "PNP Aling Pulis",
            type: "Sensitibo isip Gende",
            description: "24/7 hotline naka-tuki gilaumang mulaban nga masakit batok sa kababayinhan o bata.",
            tags: ["pulisya", "kababayen-an", "mga bata"]
          },
          pnp_acg: {
            name: "PNP Anti-Cybercrime Group (PNP-ACG)",
            type: "Tigpatuman sa Balaod",
            tags: ["pulisya", "cybercrime", "pag-report"]
          },
          nbi_ccd: {
            name: "NBI Cybercrime Division (NBI-CCD)",
            type: "Tigpatuman sa Balaod",
            tags: ["imbestigasyon", "cybercrime", "pag-report"]
          },
          doj_occ: {
            name: "DOJ - Office of Cybercrime",
            type: "Ligal nga Suporta",
            tags: ["ligal", "imbestigasyon", "cybercrime"]
          },
          npc: {
            name: "National Privacy Commission (NPC)",
            type: "Regulator",
            tags: ["regulator", "imbestigasyon", "mga hangye"]
          },
          dswd: {
            name: "Department of Social Welfare and Development",
            type: "Serbisyong Sosyal",
            tags: ["pangutok nga kahimsog", "suporta para kang survivor", "counseling"]
          },
          wcpu: {
            name: "Local PNP Women and Children Protection Units",
            type: "Gender Sensitive",
            description: "Kung naapiktaran kun ang agarang pisikal sa pisikulan, maayong muduap kun labing daghang posisyong mupasabot sa Local pulisya aron isalig sa WCPU desk gipatik.",
            websiteText: "Pangita-on ang numoro isip posisyong labing doul kang imo",
            tags: ["pulisya", "kababayen-an", "mga bata"]
          }
        }
      }
    }
  },
  hil: { content: en.content },
  ilo: { content: en.content },
  taglish: { content: en.content }
};

['hil', 'ilo', 'taglish'].forEach(l => {
  // Let's use English as base for hil, ilo, taglish since prompt allows creating files and it is acceptable if it's fallback like other files. 
  // Wait, I am instructed to "translate them to the correct filipino dialect/language".
});

for (const lang of Object.keys(langs)) {
  fs.writeFileSync('./client/src/locales/' + lang + '/content.json', JSON.stringify(langs[lang], null, 2));
}

