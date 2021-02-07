import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
}));

const BlogSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
        <thead>
          <tr>
            <th>CÉGNÉV: </th>
            <th>Müller’s Kereskedelmi és Szolgáltató Kft.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SZÉKHELY:</td>
            <td>8600 Siófok, Kálmán Imre sétány 9.</td>
          </tr>
          <tr>
            <td>ADÓSZÁM:</td>
            <td>10482807-1-14</td>
          </tr>
          <tr>
            <td>CÉGJEGYZÉKSZÁM:</td>
            <td>14-09-001157</td>
          </tr>
          <tr>
            <td>KÉPVISELI:</td>
            <td> Müller Dezső Csaba</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Jelen Szabályzat a Társaság adatkezelési tevékenységének belső
        szabályait tartalmazza AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679
        RENDELETÉNEK – (2016. április 27.) a természetes személyeknek a
        személyes adatok kezelése tekintetében történő védelméről és az ilyen
        adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül
        helyezéséről (általános adatvédelmi rendelet) – való megfelelés
        céljából. A Szabályzat megállapítása és módosítása az ügyvezető
        hatáskörébe tartozik.
        <br />
        <br />
        Kelt, Siófok 2018.05.25. napján
        <br />
        Müller Dezső Csaba ügyvezető
      </p>

      <Divider className={classes.divider} />

      <h2>TARTALOMJEGYZÉK</h2>

      <p>
        I. FEJEZET – ÁLTALÁNOS RENDELKEZÉSEK <br />
        1. § A Szabályzat célja és hatálya
        <br />
        2. § Fogalommeghatározások <br />
        II. FEJEZET – AZ ADATKEZELÉS JOGSZERŰSÉGÉNEK BIZTOSÍTÁSA
        <br /> 3. § Adatkezelés az érintett hozzájárulása alapján
        <br /> 4. § Jogi kötelezettség teljesítésén alapuló adatkezelés <br />
        5. § A Társaság adatkezelési tájékoztatója <br />
        III. FEJEZET – MUNKAVISZONNYAL KAPCSOLATOS ADATKEZELÉSEK <br />
        6. § Munkaügyi, személyzeti nyilvántartás
        <br /> 7. §Alkalmassági vizsgálatokkal kapcsolatos adatkezelés <br />
        8. § Felvételre jelentkező munkavállalók adatainak kezelése, pályázatok,
        önéletrajzok <br />
        15.§ Munkahelyi kamerás megfigyeléssel kapcsolatos adatkezelés <br />
        IV. FEJEZET – SZERZŐDÉSHEZ KAPCSOLÓDÓ ADATKEZELÉSEK <br />
        16. § Szerződő partnerek adatainak kezelése – vevők, szállítók
        nyilvántartása <br />
        17. § Jogi személy ügyfelek, vevők, szállítók természetes személy
        képviselőinek elérhetőségi adatai <br />
        22. § Közösségi irányelvek / Adatkezelés a Társaság Facebook oldalán{' '}
        <br />
        V. FEJEZET – JOGI KÖTELEZETTSÉGEN ALAPULÓ ADATKEZELÉSEK <br />
        26. § Adatkezelés adó- és számviteli kötelezettségek teljesítése
        céljából <br />
        27. § Kifizetői adatkezelés <br />
        28. § A Levéltári törvény szerint maradandó értékű iratokra vonatkozó
        adatkezelés <br />
        VI. FEJEZET – ADATBIZONSÁGI INTÉZKEDÉSEK <br />
        30. § Adatbiztonsági intézkedések <br />
        VIII. FEJEZET – ADATVÉDELMI INCIDENSEK KEZELÉSE <br />
        36. § Az adatvédelmi incidens fogalma <br />
        37. § Adatvédelmi incidensek kezelés, orvoslása <br />
        38. § Adatvédelmi incidensek nyilvántartása <br />
        IX. FEJEZET – ADATVÉDELMI HATÁSVIZSGÁLAT ÉS ELŐZETES KONZULTÁCIÓ <br />
        39. § Adatvédelmi hatásvizsgálat és előzetes konzultáció <br />
        X. FEJEZET – AZ ÉRINTETT SZEMÉLY JOGAI <br />
        40. § Tájékoztatás az érintett jogairól <br />
        XI. FEJEZET – ZÁRÓ RENDELKEZÉSEK <br />
        41. § A Szabályzat megállapítása és módosítása <br />
        42. § Intézkedések a szabályzat megismertetése
      </p>
      <br />
      <h2>MELLÉKLETEK</h2>
      <p>
        1. melléklet: Adatkérő lap személyes adatok hozzájáruláson alapuló
        kezeléséhez <br /> 2. melléklet: Adatkezelési tájékoztató az érintett
        természetes személy jogairól személyes adatai kezelése vonatkozásában{' '}
        <br /> 3. melléklet: Tájékoztató a munkavállaló személyes adatainak
        kezeléséről és személyhez fűződő jogokról <br />
        4. melléklet: Tájékoztató munkavállaló részére alkalmassági
        vizsgálatáról <br />
        5. melléklet: Tájékoztató kamerás megfigyelőrendszer alkalmazásáról{' '}
        <br />
        6. melléklet: Adatkezelési kikötés természetes személlyel kötött
        szerződéshez <br />
        7. melléklet: Hozzájáruló nyilatkozat jogi személy szerződő partnerek
        természetes személy képviselőinek elérhetőségi adatai kezeléséhez <br />
        8. melléklet: Az adatfeldolgozó munkavállalóinak titoktartási
        nyilatkozata <br />
        9.a melléklet: Az adatfeldolgozási tevékenység általános szerződési
        feltételei – standard <br />
        10. melléklet: Munkaszerződési kikötés az adatkezelési szabályzat
        megismeréséről, alkalmazásáról és titoktartási kötelezettségről
      </p>
      <h2>I. FEJEZET ÁLTALÁNOS RENDELKEZÉSEK</h2>
      <p>
        1. § A Szabályzat célja és hatálya (1) E Szabályzat célja azon belső
        szabályok megállapítása és intézkedések megalapozása, amelyek
        biztosítják, hogy a Társaság adatkezelő és adatfeldolgozó tevékenysége
        megfeleljen AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETÉNEK
        – (2016. április 27.) a természetes személyeknek a személyes adatok
        kezelése tekintetében történő védelméről és az ilyen adatok szabad
        áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről
        (általános adatvédelmi rendelet, a továbbiakban: Rendelet) – továbbá az
        információs önrendelkezési jogról és az információszabadságról szóló
        2011. évi CXII. törvény (a továbbiakban: Infotv.) rendelkezéseinek. (2)
        E Szabályzat hatálya természetes személyre vonatkozó személyes adatok
        Társaság általi kezelésére terjed ki. (3) Egyéni vállalkozó, egyéni cég,
        őstermelő ügyfeleket, vevőket, szállítókat e szabályzat alkalmazásában
        természetes személynek kell tekinteni. (4) Szabályzat hatálya nem terjed
        ki az olyan személyes adatkezelésre, amely jogi személyekre vonatkozik,
        beleértve a jogi személy nevét és formáját, valamint a jogi személy
        elérhetőségére vonatkozó adatokat. (GDPR (14)) 2. §
        Fogalommeghatározások E Szabályzat alkalmazásában irányadó
        fogalommeghatározásokat a Rendelet 4. cikke tartalmazza. Ennek
        megfelelően emeljük ki a főbb fogalmakat: 1. „személyes adat”:
        azonosított vagy azonosítható természetes személyre („érintett”)
        vonatkozó bármely információ; azonosítható az a természetes személy, aki
        közvetlen vagy közvetett módon, különösen valamely azonosító, például
        név, szám, helymeghatározó adat, online azonosító vagy a természetes
        személy testi, fiziológiai, genetikai, szellemi, gazdasági, kulturális
        vagy szociális azonosságára vonatkozó egy vagy több tényező alapján
        azonosítható; 2. „adatkezelés”: a személyes adatokon vagy
        adatállományokon automatizált vagy nem automatizált módon végzett
        bármely művelet vagy műveletek összessége, így a gyűjtés, rögzítés,
        rendszerezés, tagolás, tárolás, átalakítás vagy megváltoztatás,
        lekérdezés, betekintés, felhasználás, közlés továbbítás, terjesztés vagy
        egyéb módon történő hozzáférhetővé tétel útján, összehangolás vagy
        összekapcsolás, korlátozás, törlés, illetve megsemmisítés; 3. „az
        adatkezelés korlátozása”: a tárolt személyes adatok megjelölése jövőbeli
        kezelésük korlátozása céljából; 4. „profilalkotás”: személyes adatok
        automatizált kezelésének bármely olyan formája, amelynek során a
        személyes adatokat valamely természetes személyhez fűződő bizonyos
        személyes jellemzők értékelésére, különösen a munkahelyi
        teljesítményhez, gazdasági helyzethez, egészségi állapothoz, személyes
        preferenciákhoz, érdeklődéshez, megbízhatósághoz, viselkedéshez,
        tartózkodási helyhez vagy mozgáshoz kapcsolódó jellemzők elemzésére vagy
        előrejelzésére használják; 5. „álnevesítés”: a személyes adatok olyan
        módon történő kezelése, amelynek következtében további információk
        felhasználása nélkül többé már nem állapítható meg, hogy a személyes
        adat mely konkrét természetes személyre vonatkozik, feltéve hogy az
        ilyen további információt külön tárolják, és technikai és szervezési
        intézkedések megtételével biztosított, hogy azonosított vagy
        azonosítható természetes személyekhez ezt a személyes adatot nem lehet
        kapcsolni; 6. „nyilvántartási rendszer”: a személyes adatok bármely
        módon – centralizált, decentralizált vagy funkcionális vagy földrajzi
        szempontok szerint – tagolt állománya, amely meghatározott ismérvek
        alapján hozzáférhető; 7. „adatkezelő”: az a természetes vagy jogi
        személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely a
        személyes adatok kezelésének céljait és eszközeit önállóan vagy másokkal
        együtt meghatározza; ha az adatkezelés céljait és eszközeit az uniós
        vagy a tagállami jog határozza meg, az adatkezelőt vagy az adatkezelő
        kijelölésére vonatkozó különös szempontokat az uniós vagy a tagállami
        jog is meghatározhatja; 8. „adatfeldolgozó”: az a természetes vagy jogi
        személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely az
        adatkezelő nevében személyes adatokat kezel; 9. „címzett”: az a
        természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely
        egyéb szerv, akivel vagy amellyel a személyes adatot közlik, függetlenül
        attól, hogy harmadik fél-e. Azon közhatalmi szervek, amelyek egy egyedi
        vizsgálat keretében az uniós vagy a tagállami joggal összhangban
        férhetnek hozzá személyes adatokhoz, nem minősülnek címzettnek; az
        említett adatok e közhatalmi szervek általi kezelése meg kell, hogy
        feleljen az adatkezelés céljainak megfelelően az alkalmazandó
        adatvédelmi szabályoknak; 10. „harmadik fél”: az a természetes vagy jogi
        személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely nem
        azonos az érintettel, az adatkezelővel, az adatfeldolgozóval vagy
        azokkal a személyekkel, akik az adatkezelő vagy adatfeldolgozó közvetlen
        irányítása alatt a személyes adatok kezelésére felhatalmazást kaptak;
        11. „az érintett hozzájárulása”: az érintett akaratának önkéntes,
        konkrét és megfelelő tájékoztatáson alapuló és egyértelmű
        kinyilvánítása, amellyel az érintett nyilatkozat vagy a megerősítést
        félreérthetetlenül kifejező cselekedet útján jelzi, hogy beleegyezését
        adja az őt érintő személyes adatok kezeléséhez; 12. „adatvédelmi
        incidens”: a biztonság olyan sérülése, amely a továbbított, tárolt vagy
        más módon kezelt személyes adatok véletlen vagy jogellenes
        megsemmisítését, elvesztését, megváltoztatását, jogosulatlan közlését
        vagy az azokhoz való jogosulatlan hozzáférést eredményezi.
      </p>
      <br />
      <h2>II. FEJEZET AZ ADATKEZELÉS JOGSZERŰSÉGÉNEK BIZTOSÍTÁSA</h2>
      <p>
        3. § Adatkezelés az érintett hozzájárulása alapján (1) Amennyiben a
        Társaság hozzájáruláson alapuló adatkezelést kíván végezni, az érintett
        hozzájárulását személyes adatai kezeléséhez az 1. számú melléklet
        szerinti adatkérő lap szerinti tartalommal és tájékoztatással kell
        kérni. (2) Hozzájárulásnak minősül az is, ha az érintett a Társaság
        internetes honlapjának megtekintése során bejelöl egy erre vonatkozó
        négyzetet, az információs társadalommal összefüggő szolgáltatások
        igénybevétele során erre vonatkozó technikai beállításokat hajt végre,
        valamint bármely egyéb olyan nyilatkozat vagy cselekedet is, amely az
        adott összefüggésben az érintett hozzájárulását személyes adatainak
        tervezett kezeléséhez egyértelműen jelzi. A hallgatás, az előre bejelölt
        négyzet vagy a nem cselekvés ezért nem minősül hozzájárulásnak. (3) A
        hozzájárulás az ugyanazon cél vagy célok érdekében végzett összes
        adatkezelési tevékenységre kiterjed. Ha az adatkezelés egyszerre több
        célt is szolgál, akkor a hozzájárulást az összes adatkezelési célra
        vonatkozóan meg kell adni. (4) Ha az érintett hozzájárulását olyan
        írásbeli nyilatkozat keretében adja meg, amely más ügyekre is vonatkozik
        – pl, értékesítési, szolgáltatási szerződés megkötése – a hozzájárulás
        iránti kérelmet ezektől a más ügyektől egyértelműen megkülönböztethető
        módon kell előadni, érthető és könnyen hozzáférhető formában, világos és
        egyszerű nyelvezettel. Az érintett hozzájárulását tartalmazó ilyen
        nyilatkozat bármely olyan része, amely sérti a Rendeletet, kötelező
        erővel nem bír. (5) A Társaság nem kötheti szerződés megkötését,
        teljesítését olyan személyes adatok kezeléséhez való hozzájárulás
        megadásához, amelyek nem szükségesek a szerződés teljesítéséhez. (6) A
        hozzájárulás visszavonását ugyanolyan egyszerű módon kell lehetővé
        tenni, mint annak megadását. (7) Ha a személyes adat felvételére az
        érintett hozzájárulásával került sor, az adatkezelő a felvett adatokat
        törvény eltérő rendelkezésének hiányában a rá vonatkozó jogi
        kötelezettség teljesítése céljából további külön hozzájárulás nélkül,
        valamint az érintett hozzájárulásának visszavonását követően is
        kezelheti. 4. § Jogi kötelezettség teljesítésén alapuló adatkezelés (1)
        A jogi kötelezettségen alapuló adatkezelés esetén a kezelhető adatok
        körére, az adatkezelés céljára, az adatok tárolásának időtartamára, a
        címzettekre az alapul szolgáló jogszabály rendelkezései irányadók. (2) A
        jogi kötelezettség teljesítése jogcímén alapuló adatkezelés az érintett
        hozzájárulásától független, mivel az adatkezelést jogszabály határozza
        meg. Az érintettel az adatkezelés megkezdése előtt ezesetben közölni
        kell, hogy az adatkezelés kötelező, továbbá az érintettet az adatkezelés
        megkezdése előtt egyértelműen és részletesen tájékoztatni kell az adatai
        kezelésével kapcsolatos minden tényről, így különösen az adatkezelés
        céljáról és jogalapjáról, az adatkezelésre és az adatfeldolgozásra
        jogosult személyéről, az adatkezelés időtartamáról, arról, ha az
        érintett személyes adatait az adatkezelő a rá vonatkozó jogi
        kötelezettség alapján kezeli, illetve arról, hogy kik ismerhetik meg az
        adatokat. A tájékoztatásnak ki kell terjednie az érintett adatkezeléssel
        kapcsolatos jogaira és jogorvoslati lehetőségeire is. Kötelező
        adatkezelés esetén a tájékoztatás megtörténhet az előbbi információkat
        tartalmazó jogszabályi rendelkezésekre való utalás nyilvánosságra
        hozatalával is. 5. § A Társaság adatkezelési tájékoztatója (1) A
        Társaság általános adatkezelési tájékoztatóját a 2. számú melléklet
        tartalmazza. (2) A Társaság valamennyi adatkezelése során köteles
        biztosítani az érintett jogainak gyakorlását.
      </p>
      <br />
      <h2>III. FEJEZET MUNKAVISZONNYAL KAPCSOLATOS ADATKEZELÉSEK</h2>
      <p>
        6. § Munkaügyi, személyzeti nyilvántartás (1) A munkavállalóktól
        kizárólag olyan adatok kérhetők és tarthatók nyilván, valamint olyan
        munkaköri orvosi alkalmassági vizsgálatok végezhetők, amelyek
        munkaviszony létesítéséhez, fenntartásához és megszüntetéséhez, illetve
        a szociális-jóléti juttatások biztosításához szükségesek és a
        munkavállaló személyhez fűződő jogait nem sértik. (2) A Társaság
        munkáltatói jogos érdekeinek érvényesítése (Rendelet 6. cikk (1)
        bekezdése f)) jogcímén munkaviszony létesítése, teljesítése vagy
        megszűnése céljából kezeli a munkavállaló alábbi adatait: 1. név 2.
        születési név,, 3. születési ideje, 4. anyja neve, 5. lakcíme, 6.
        állampolgársága, 7. adóazonosító jele, 8. TAJ száma, 9. nyugdíjas
        törzsszám (nyugdíjas munkavállaló esetén), 10. telefonszám, 11. e-mail
        cím, 12. személyi igazolvány száma, 13. lakcímet igazoló hatósági
        igazolvány száma, 14. bankszámlaszáma, 15. online azonosító (ha van) 16.
        munkába lépésének kezdő és befejező időpontja, 17. munkakör, 18. iskolai
        végzettségét, szakképzettségét igazoló okmány másolata, 19. fénykép, 20.
        önéletrajz, 21. munkabérének összege, a bérfizetéssel, egyéb
        juttatásaival kapcsolatos adatok, 22. a munkavállaló munkabéréből
        jogerős határozat vagy jogszabály, illetve írásbeli hozzájárulása
        alapján levonandó tartozást, illetve ennek jogosultságát, 23. a
        munkavállaló munkájának értékelése, 24. a munkaviszony megszűnésének
        módja, indokai, 25. munkakörtől függően erkölcsi bizonyítványa 26. a
        munkaköri alkalmassági vizsgálatok összegzése, 27. magánnyugdíjpénztári
        és önkéntes kölcsönös biztosító pénztári tagság esetén a pénztár
        megnevezése, azonosító száma és a munkavállaló tagsági száma, 28.
        külföldi munkavállaló esetén útlevélszám; munkavállalási jogosultságot
        igazoló dokumentumának megnevezését és száma, 29 munkavállalót ért
        balesetek jegyzőkönyveiben rögzített adatokat; 30. a jóléti
        szolgáltatás, kereskedelmi szálláshely igénybe vételéhez szükséges
        adatokat; 31. a Társaságnál biztonsági és vagyonvédelmi célból
        alkalmazott kamera és beléptető rendszer, illetve a helymeghatározó
        rendszerek által rögzített adatokat. (3) Betegségre és szakszervezeti
        tagságára vonatkozó adatokat a munkáltató csak a Munka Törvénykönyvben
        meghatározott jog, vagy kötelezettség teljesítése céljából kezel. (4) A
        személyes adatok címzettjei: a munkáltató vezetője, munkáltatói jogkör
        gyakorlója, a Társaság munkaügyi feladatokat ellátó munkavállalói és
        adatfeldolgozói. (5) A Társaság tulajdonosai részére csak a vezető
        állású munkavállalók személyes adatai továbbíthatók. (6) A személyes
        adatok tárolásának időtartama: a munkaviszony megszűnését követő 3 év.
        (7) Az érintettel az adatkezelés megkezdése előtt közölni kell, hogy az
        adatkezelés a Munka törvénykönyvén és a munkáltató jogos érdekeinek
        érvényesítésén alapul (8) A munkáltató a munkaszerződés megkötésével
        egyidejűleg a jelen szabályzat 3. számú melléklete szerinti Tájékoztató
        átadásával tájékoztatja a munkavállalót személyes adatainak kezeléséről
        és személyhez fűződő jogokról. 7. § Alkalmassági vizsgálatokkal
        kapcsolatos adatkezelés (1) A munkavállalóval szemben csak olyan
        alkalmassági vizsgálat alkalmazható, amelyet munkaviszonyra vonatkozó
        szabály ír elő, vagy amely munkaviszonyra vonatkozó szabályban
        meghatározott jog gyakorlása, kötelezettség teljesítése érdekében
        szükséges. A vizsgálat előtt részletesen tájékoztatni kell a
        munkavállalókat többek között arról, hogy az alkalmassági vizsgálat
        milyen készség, képesség felmérésére irányul, a vizsgálat milyen
        eszközzel, módszerrel történik. Amennyiben jogszabály írja elő a
        vizsgálat elvégzését, akkor tájékoztatni kell a munkavállalókat a
        jogszabály címéről és a pontos jogszabályhelyről is. E Tájékoztatáshoz
        kapcsolódó adatkezelési tájékoztató mintáját jelen szabályzat 4. számú
        melléklete tartalmazza. (2) A munkaalkalmasságra, felkészültségre
        irányuló tesztlapok a munkáltató mind a munkaviszony létesítése előtt,
        mind pedig a munkaviszony fennállása alatt kitöltetheti a
        munkavállalókkal. (3) Az egyértelműen munkaviszonnyal kapcsolatos, a
        munkafolyamatok hatékonyabb ellátása, megszervezése érdekében csak akkor
        tölthető ki a munkavállalók nagyobb csoportjával pszichológiai, vagy
        személyiségjegyek kutatására alkalmas tesztlap, ha az elemzés során
        felszínre került adatok nem köthetők az egyes konkrét munkavállalókhoz,
        vagyis anonim módon történik az adatok feldolgozása. (4) A kezelhető
        személyes adatok köre: a munkaköri alkalmasság ténye, és az ehhez
        szükséges feltételek. (5) Az adatkezelés jogalapja: a munkáltató jogos
        érdeke. (6) A személyes adatok kezelésének célja: munkaviszony
        létesítése, fenntartása , munkakör betöltése. (7) A személyes adatok
        címzettjei, illetve a címzettek kategóriái: A vizsgálat eredményt a
        vizsgált munkavállalók, illetve a vizsgálatot végző szakember ismerhetik
        meg. A munkáltató csak azt az információt kaphatja meg, hogy a vizsgált
        személy a munkára alkalmas-e vagy sem, illetve milyen feltételek
        biztosítandók ehhez. A vizsgálat részleteit, illetve annak teljes
        dokumentációját azonban a munkáltató nem ismerheti meg. (8) A személyes
        adatok kezelésének időtartama: a munkaviszony megszűnését követő 3 év.
      </p>
      <p>
        8. § Felvételre jelentkező munkavállalók adatainak kezelése, pályázatok,
        önéletrajzok (1) A kezelhető személyes adatok köre: a természetes
        személy neve, születési ideje, helye, anyja neve, lakcím, képesítési
        adatok, fénykép, telefonszám, e-mail cím, a jelentkezőről készített
        munkáltatói feljegyzés (ha van). (2) A személyes adatok kezelésének
        célja: jelentkezés, pályázat elbírálása, a kiválasztottal munkaszerződés
        kötése. Az érintettet tájékoztatni kell arról, ha a munkáltató nem őt
        választotta az adott állásra. (3) Az adatkezelés jogalapja: az érintett
        hozzájárulása. (4) A személyes adatok címzettjei, illetve a címzettek
        kategóriái: a Társaságnál munkáltatói jogok gyakorlására jogosult
        vezető, munkaügyi feladatokat ellátó munkavállalók. (5) A személyes
        adatok tárolásának időtartama: A jelentkezés, pályázat elbírálásáig. A
        ki nem választott jelentkezők személyes adatait törölni kell. Törölni
        kell annak adatait is, aki jelentkezését, pályázatát visszavonta. (6) A
        munkáltató csak az érintett kifejezett, egyértelmű és önkéntes
        hozzájárulása alapján őrizheti meg a pályázatokat, feltéve, ha azok
        megőrzésére a jogszabályokkal összhangban álló adatkezelési célja
        elérése érdekében szükség van. E hozzájárulást a felvételi eljárás
        lezárását követően kell kérni a jelentkezőktől. 15. § Munkahelyi kamerás
        megfigyeléssel kapcsolatos adatkezelés (1) Társaságunk a székhelyén,
        telephelyén, az ügyfélfogadásra nyitva álló helyiségeiben az emberi
        élet, testi épség, személyi szabadság, az üzleti titok védelme és a
        vagyonvédelem céljából elektronikus megfigyelőrendszert alkalmaz, amely
        közvetlen megfigyelést vagy kép-, hang-, vagy kép- és hangrögzítést és
        tárolást is lehetővé tesz, ez alapján személyes adatnak tekinthető az
        érintett magatartása is, amit a kamera rögzít. (2) Ezen adatkezelés
        jogalapja a munkáltató jogos érdekeinek érvényesítése, és az érintett
        hozzájárulása. (3) Az elektronikus megfigyelőrendszer adott területen
        történő alkalmazásának tényéről jól látható helyen, jól olvashatóan, a
        területen megjelenni kívánó harmadik személyek tájékozódását elősegítő
        módon figyelemfelhívó jelzést, tájékoztatást kell elhelyezni. A
        tájékoztatást minden egyes kamera vonatkozásában meg kell adni. Ez a
        tájékoztatás tartalmazza az elektronikai vagyonvédelmi rendszer által
        folytatott megfigyelés tényéről, valamint a rendszer által rögzített,
        személyes adatokat tartalmazó kép- és hangfelvétel készítésének,
        tárolásának céljáról, az adatkezelés jogalapjáról, a felvétel
        tárolásának helyéről, a tárolás időtartamáról, a rendszert alkalmazó
        (üzemeltető) személyéről, az adatok megismerésére jogosult személyek
        köréről, a felvétel tárolásával kapcsolatos adatbiztonsági
        intézkedésekről, továbbá az érintettek jogaira és érvényesítésük
        rendjére vonatkozó tájékoztatást is. A tájékoztatás mintája a szabályzat
        5. számú Melléklete. (4) A megfigyelt területre belépő harmadik
        személyekről (ügyfelek, látogatók, vendégek) kép és hangfelvétel a
        hozzájárulásukkal készíthető és kezelhető. A hozzájárulás ráutaló
        magatartással is megadható. Ráutaló magatartás különösen, ha az ott
        tartózkodó természetes személy a megfigyelt területre az oda kihelyezett
        elektronikus megfigyelő-rendszer alkalmazásáról tájékoztató jelzés,
        ismertetés ellenére a területre bemegy. (5) A rögzített felvételeket
        felhasználás hiányában maximum 3 (három) munkanapig őrizhetők meg.
        Felhasználásnak az minősül, ha a rögzített kép-, hang-, vagy kép- és
        hangfelvételt, valamint más személyes adatot bírósági vagy más hatósági
        eljárásban bizonyítékként kívánják felhasználni. (6) Adatbiztonsági
        intézkedések: a) a képfelvételek megtekintésére és visszanézésére
        szolgáló monitor úgy kell elhelyezni, hogy a képfelvételek sugárzása
        alatt azokat a jogosultsági koron kívül más személy ne láthassa. b) A
        megfigyelés és a tárolt képfelvételek visszanézése kizárólag a jogsértő
        cselekmények kiszűrése, az azok megszüntetéséhez szükséges intézkedések
        kezdeményezése céljából végezhető. c) A kamerák által sugárzott képekről
        a központi felvevő egységen kívül más eszközzel felvételt készíteni nem
        lehet. d) A felvétel hordozó eszközeit elzárt helyen kell tárolni. e) A
        tárolt képfelvételekhez hozzáférés csak biztonságos módon, és akként
        történhet, hogy az adatkezelő személye azonosítható legyen. f) A tárolt
        képfelvételek visszanézését és a képfelvételekről készített mentést
        dokumentálni kell. g) A jogosultság indokának megszűnése esetén a tárolt
        képfelvételekhez a hozzáférést haladéktalanul meg kell szüntetni. h) A
        rögzítő készülékben elkülönített merevlemezről fut az operációs rendszer
        és a rögzítésre került felvételek. A felvételekről külön biztonsági
        másolat nem készül. i) Jogsértő cselekmény észlelését követően a
        cselekményről készült felvétel tarolása és a szükséges hatósági eljárás
        haladéktalanul kezdeményezése felől intézkedni kell, egyben tájékoztatni
        kell a hatóságot, hogy a cselekményről képfelvétel készült. (7) Az,
        akinek jogát vagy jogos érdekét a kép-, hang-, vagy a kép- és
        hangfelvétel adatának rögzítése érinti, a kép-, hang-, valamint kép- és
        hangfelvétel rögzítésétől számított három munkanapon belül jogának vagy
        jogos érdekének igazolásával kérheti, hogy az adatot annak kezelője ne
        semmisítse meg, illetve ne törölje. (8) Nem lehet elektronikus
        megfigyelőrendszert alkalmazni olyan helyiségben, amelyben a megfigyelés
        az emberi méltóságot sértheti, így különösen az öltözőkben,
        zuhanyzókban, az illemhelyiségekben vagy például orvosi szobában,
        illetve az ahhoz tartozó váróban, továbbá az olyan helyiségben sem,
        amely a munkavállalók munkaközi szünetének eltöltése céljából lett
        kijelölve. (9) Ha a munkahely területén jogszerűen senki sem
        tartózkodhat – így különösen munkaidőn kívül vagy a munkaszüneti napokon
        – akkor a munkahely teljes területe (így például az öltözők,
        illemhelyek, munkaközi szünetre kijelölt helyiségek) megfigyelhető. (10)
        Az elektronikus megfigyelőrendszerrel rögzített adatok megtekintésére a
        törvényben erre feljogosítottakon kívül a jogsértések feltárása és a
        rendszer működésének ellenőrzés céljából a kezelő személyzet, a
        munkáltató vezetője és helyettese, továbbá a megfigyelt terület
        munkahelyi vezetője jogosult.
      </p>
      <br />
      <h2>IV. FEJEZET SZERZŐDÉSHEZ KAPCSOLÓDÓ ADATKEZELÉSEK</h2>
      <p>
        16. § Szerződő partnerek adatainak kezelése – vevők, szállítók
        nyilvántartása (1) A Társaság szerződés teljesítése jogcímén a szerződés
        megkötése, teljesítése, megszűnése, szerződési kedvezmény nyújtása
        céljából kezeli a vele vevőként, szállítóként szerződött természetes
        személy nevét, születési nevét, születési idejét, anyja nevét, lakcímét,
        adóazonosító jelét, adószámát, vállalkozói, őstermelői igazolvány
        számát, személyi igazolvány számát, lakcímét, székhely, telephely címét,
        telefonszámát, e-mail címét, honlap-címét, bankszámlaszámát, vevőszámát
        (ügyfélszámát, rendelésszámát), online azonosítóját (vevők, szállítók
        listája, törzsvásárlási listák), Ezen adatkezelés jogszerűnek minősül
        akkor is, ha az adatkezelés a szerződés megkötését megelőzően az
        érintett kérésére történő lépések megtételéhez szükséges. A személyes
        adatok címzettjei: a Társaság ügyfélkiszolgálással kapcsolatos
        feladatokat ellátó munkavállalói, könyvelési, adózási feladatokat ellátó
        munkavállalói, és adatfeldolgozói. A személyes adatok tárolásának
        időtartama: a szerződés megszűnését követő 5 év. (2) Az érintett
        természetes személlyel az adatkezelés megkezdése előtt közölni kell,
        hogy az adatkezelés a szerződés teljesítése jogcímén alapul, az a
        tájékoztatás történhet a szerződésben is. Az érintettet személyes adatai
        adatfeldolgozó részére történő átadásáról tájékoztatni kell. A
        természetes személlyel kötött szerződéshez kapcsolódó adatkezelési
        kikötés szövegét jelen Szabályzat 6. számú melléklete tartalmazza. 17.§
        Jogi személy ügyfelek, vevők, szállítók természetes személy
        képviselőinek elérhetőségi adatai (1) A kezelhető személyes adatok köre:
        a természetes személy neve, címe, telefonszáma, e-mail címe, online
        azonosítója. (2) A személyes adatok kezelésének célja: a Társaság jogi
        személy partnerével kötött szerződés teljesítése, üzleti
        kapcsolattartás, jogalapja: az érintett hozzájárulása. (3) A személyes
        adatok címzettjei, illetve a címzettek kategóriái: a Társaság
        ügyfélszolgálattal kapcsolatos feladatokat ellátó munkavállalói. (4) A
        személyes adatok tárolásának időtartama: az üzleti kapcsolat, illetve az
        érintett képviselői minőségének fennállását követő 5 évig. (5) Az
        adatfelvételi lap mintáját jelen Szabályzat 7. számú melléklete
        tartalmazza. Ezen nyilatkozatot az ügyféllel, vevővel, szállítóval
        kapcsolatban álló munkavállalónak ismertetnie kell az érintett
        személlyel és a nyilatkozat aláírásával kérnie kell hozzájárulását
        személyes adatai kezeléséhez. A nyilatkozatot az adatkezelés
        időtartamáig meg kell őrízni. 19. § Látogatói adatkezelés a Társaság
        honlapján – Tájékoztatás sütik (cookie) alkalmazásáról (1) A süti
        (angolul cookie) egy olyan adat, amit a meglátogatott weboldal küld a
        látogató böngészőjének (változónév-érték formában), hogy az eltárolja és
        később ugyanaz a weboldal be is tudja tölteni a tartalmát. (2) Egy
        felhasználónak az elektronikus hírközlő végberendezésén csak az érintett
        felhasználó világos és teljes körű – az adatkezelés céljára is kiterjedő
        – tájékoztatását követő hozzájárulása alapján lehet adatot tárolni, vagy
        az ott tárolt adathoz hozzáférni (2003. évi C. törvény 155.§/4/). Ez
        alapján a Társaság honlapján az első látogatáskor egy rövid
        összefoglalót kell adni a látogató számára a sütik alkalmazásáról, és
        egy linken keresztül utalni kell a teljes körű tájékoztató
        elérhetőségére (2. számú melléklet szerinti adatkezelési tájékoztató). E
        tájékoztatóval a Társaság biztosítja hogy a látogató a honlap
        információs társadalommal összefüggő szolgáltatásainak igénybevétele
        előtt és az igénybevétel során bármikor megismerhesse, hogy a Társaság
        mely adatkezelési célokból mely adatfajtákat kezel, ideértve az igénybe
        vevővel közvetlenül kapcsolatba nem hozható adatok kezelését is. (3) Az
        elektronikus kereskedelmi szolgáltatások, valamint az információs
        társadalmi szolgáltatások egyes kérdéseiről szóló 2001. CVIII. törvény
        (Elkertv.) 13/A. § (3) bekezdése szerint a szolgáltató a szolgáltatás
        nyújtása céljából kezelheti azon személyes adatokat, amelyek a
        szolgáltatás nyújtásához technikailag elengedhetetlenül szükségesek. A
        szolgáltatónak az egyéb feltételek azonossága esetén úgy kell
        megválasztania és minden esetben oly módon kell üzemeltetnie az
        információs társadalommal összefüggő szolgáltatás nyújtása során
        alkalmazott eszközöket, hogy személyes adatok kezelésére csak akkor
        kerüljön sor, ha ez a szolgáltatás nyújtásához és az e törvényben
        meghatározott egyéb célok teljesüléséhez feltétlenül szükséges, azonban
        ebben az esetben is csak a szükséges mértékben és ideig. 20. §
        Regisztráció a Társaság honlapján (1) A honlapon a regisztráló
        természetes személy az erre vonatkozó négyzet bejelölésével adhatja meg
        hozzájárulását személyes adatai kezeléséhez. Tilos a négyzet előre
        bejelölése. (2) A kezelhető személyes adatok köre: a természetes személy
        neve (vezetéknév, keresztnév), címe, telefonszáma, e-mail címe, online
        azonosító, számláázsi, postázási név és cím. (3) A személyes adatok
        kezelésének célja: 1. A honlapon nyújtott szolgáltatások teljesítése. 2.
        Kapcsolatfelvétel, elektronikus, telefonos, SMS, és postai
        megkereséssel. 3. Tájékoztatás a Társaság termékeiről,
        szolgáltatásairól, szerződési feltételeiről, akcióiról. 4.
        Reklám-küldemény a tájékoztatás során elektronikusan és postai úton
        küldhető. 5. A honlap használatának elemzése. (4) Az adatkezelés
        jogalapja az érintett hozzájárulása. (5) A személyes adatok címzettjei,
        illetve a címzettek kategóriái: a Társaság ügyfélszolgálattal, marketing
        tevékenységével kapcsolatos feladatokat ellátó munkavállalói,
        adatfeldolgozóként a Társaság IT szolgáltatója tárhelyszolgáltatást
        végző munkavállalói. (6) A személyes adatok tárolásának időtartama: a
        regisztráció / szolgáltatás aktív fennállásáig, vagy az érintett
        hozzájárulása visszavonásáig (törlési kérelméig). 22. § Közösségi
        irányelvek / Adatkezelés a Társaság Facebook oldalán A Társaság nem
        felel a Facebook felhasználók által közzétett jogszabályt sértő
        adattartalmakért, hozzászólásokért. A Társaság nem felel semmilyen, a
        Facebook működéséből adódó hibáért, üzemzavarért vagy a rendszer
        működésének megváltoztatásából fakadó problémáért.
      </p>
      <br />
      <h2>V. FEJEZET JOGI KÖTELEZETTSÉGEN ALAPULÓ ADATKEZELÉSEK</h2>
      <p>
        26. § Adatkezelés adó- és számviteli kötelezettségek teljesítése
        céljából (1) A Társaság jogi kötelezettség teljesítése jogcímén,
        törvényben előírt adó és számviteli kötelezettségek teljesítése
        (könyvelés, adózás) céljából kezeli a vevőként, szállítóként vele üzleti
        kapcsolatba lépő természetes személyek törvényben meghatározott adatait.
        A kezelt adatok az általános forgalmi adóról szóló 2017. évi CXXVII. tv.
        169.§, és 202.§-a alapján különösen: adószám, név, cím, adózási státusz,
        a számvitelről szóló 2000. évi C. törvény 167.§-a alapján: név, cím, a
        gazdasági műveletet elrendelő személy vagy szervezet megjelölése, az
        utalványozó és a rendelkezés végrehajtását igazoló személy, valamint a
        szervezettől függően az ellenőr aláírása; a készletmozgások bizonylatain
        és a pénzkezelési bizonylatokon az átvevő, az ellennyugtákon a befizető
        aláírása, a személyi jövedelemadóról szóló 1995. évi CXVII. törvény
        alapján: vállalkozói igazolvány száma, őstermelői igazolvány száma,
        adóazonosító jel. (2) A személyes adatok tárolásának időtartama a
        jogalapot adó jogviszony megszűnését követő 8 év. (3) A személyes adatok
        címzettjei: a Társaság adózási, könyvviteli, bérszámfejtési,
        társadalombiztosítási feladatait ellátó munkavállalói és
        adatfeldolgozói. 27. § Kifizetői adatkezelés (1) A Társaság jogi
        kötelezettség teljesítése jogcímén, törvényben előírt adó és
        járulékkötelezettségek teljesítése (adó-, adóelőleg, járulékok
        megállapítása, bérszámfejtés, társadalombiztosítási, nyugdíj ügyintézés)
        céljából kezeli azon érintettek – munkavállalók, családtagjaik,
        foglalkoztatottak, egyéb juttatásban részesülők – adótörvényekben előírt
        személyes adatait, akikkel kifizetői (2017:CL. törvény az adózás
        rendjéről (Art.) 7.§ 31.) kapcsolatban áll. A kezelt adatok körét az
        Art. 50.§-a határozza meg, külön is kiemelve ebből: a természetes
        személy természetes személyazonosító adatait (ideértve az előző nevet és
        a titulust is), nemét, állampolgárságát, a természetes személy
        adóazonosító jelét, társadalombiztosítási azonosító jelét (TAJ szám).
        Amennyiben az adótörvények ehhez jogkövetkezményt fűznek, a Társaság
        kezelheti a munkavállalók egészségügyi (Szja tv. 40.§) és szakszervezeti
        (Szja 47.§(2) b./) tagságra vonatkozó adatokat adó és
        járulékkötelezettségek teljésítés (bérszámfejtés, társadalombiztosítási
        ügyintézés) céljából. (2) A személyes adatok tárolásának időtartama a
        jogalapot adó jogviszony megszűnését követő 8 év. (3) A személyes adatok
        címzettjei: a Társaság adózási, bérszámfejtési, társadalombiztosítási
        (kifizetői) feladatait ellátó munkavállalói és adatfeldolgozói. 28. § A
        Levéltári törvény szerint maradandó értékű iratokra vonatkozó
        adatkezelés (1) A Társaság jogi kötelezettsége teljesítése jogcímén
        kezeli a köziratokról, a közlevéltárakról és a magánlevéltári anyag
        védelméről szóló 1995. évi LXVI. törvény (Levéltári törvény) szerint
        maradandó értékűnek minősülő iratait abból a célból, hogy a Társaság
        irattári anyagának maradandó értékű része épségben és használható
        állapotban a jövő nemzedékei számára is fennmaradjon. Az adattárolás
        ideje: a közlevéltár részére történő átadásig. (2) A személyes adatok
        címzettjei: a Társaság vezetője, iratkezelést, irattározást végző
        munkavállalója, a közlevéltár munkatársa.{' '}
      </p>
      <br />
      <h2>VI. FEJEZET ADATBIZONSÁGI INTÉZKEDÉSEK</h2>
      <p>
        30. § Adatbiztonsági intézkedések (1) A Társaság valamennyi célú és
        jogalapú adatkezelése vonatkozásában a személyes adatok biztonsága
        érdekében köteles megtenni azokat a technikai és szervezési
        intézkedéseket és kialakítani azokat az eljárási szabályokat, amelyek a
        Rendelet és az Infotv., érvényre juttatásához szükségesek. (2) Az
        Adatkezelő az adatokat megfelelő intézkedésekkel védi a véletlen vagy
        jogellenes megsemmisítés, elvesztés, megváltoztatás, sérülés,
        jogosulatlan nyilvánosságra hozatal vagy az azokhoz való jogosulatlan
        hozzáférés ellen. (3) A Társaság a személyes adatokat bizalmas adatként
        minősíti és kezeli. A munkavállalókkal a személyes adatok kezelésére
        vonatkozóan titoktartási kötelezettséget ír elő, amelyre a 10. számú
        melléklet szerinti kikötést kell alkalmazni. A személyes adatokhoz való
        hozzáférést a Társaság jogosultsági szintek megadásával korlátozza. (4)
        A Társaság az informatikai rendszereket tűzfallal védi, és
        vírusvédelemmel látja el. (5) A Társaság alkalmazottai a munkahelyi
        gépekhez csatlakoztathatják saját számítástechnikai eszközeiket,
        adattároló és rögzítő eszközeiket. (6) A Társaság az elektronikus
        adatfeldolgozást, nyilvántartást számítógépes program útján végzi, amely
        megfelel az adatbiztonság követelményeinek. A program biztosítja, hogy
        az adatokhoz csak célhoz kötötten, ellenőrzött körülmények között csak
        azon személyek férjenek hozzá, akiknek a feladataik ellátása érdekében
        erre szükségük van. (7) A személyes adatok automatizált feldolgozása
        során az adatkezelő és az adatfeldolgozó további intézkedésekkel
        biztosítja: a) a jogosulatlan adatbevitel megakadályozását; b) az
        automatikus adatfeldolgozó rendszerek jogosulatlan személyek általi,
        adatátviteli berendezés segítségével történő használatának
        megakadályozását; c) annak ellenőrizhetőségét és megállapíthatóságát,
        hogy a személyes adatokat adatátviteli berendezés alkalmazásával mely
        szerveknek továbbították vagy továbbíthatják; d) annak
        ellenőrizhetőségét és megállapíthatóságát, hogy mely személyes adatokat,
        mikor és ki vitte be az automatikus adatfeldolgozó rendszerekbe; e) a
        telepített rendszerek üzemzavar esetén történő helyreállíthatóságát és
        f) azt, hogy az automatizált feldolgozás során fellépő hibákról jelentés
        készüljön. (8) A Társaság a személyes adatok védelme érdekében
        gondoskodik az elektronikus úton folytatott bejövő és kimenő
        kommunikáció ellenőrzéséről. (9) A Társaság által kezelt személyes
        adatok interneten történő megosztása tilos! (10) A munkahelyen és a
        Társaság eszközein fájl letöltő-, játék-, csevegő-, szexuális
        szolgáltatásokat kínáló oldalak látogatása szigorúan tilos! (11) Külső
        forrásból kapott vagy letöltött, nem engedélyezett programok használata
        tilos! (12) A folyamatban levő munkavégzés, feldolgozás alatt levő
        iratokhoz csak az illetékes ügyintézők férhetnek hozzá, a személyzeti, a
        bér- és munkaügyi ás egyéb személyes adatokat tartalmazó iratokat
        biztonságosan elzárva kell tartani. (13) Biztosítani kell az adatok és
        az azokat hordozó eszközök, iratok megfelelő fizikai védelmét.
      </p>
      <br />
      <h2>VIII. FEJEZET ADATVÉDELMI INCIDENSEK KEZELÉSE</h2>
      <p>
        36. § Az adatvédelmi incidens fogalma (1) Adatvédelmi incidens:: a
        biztonság olyan sérülése, amely a továbbított, tárolt vagy más módon
        kezelt személyes adatok véletlen vagy jogellenes megsemmisítését,
        elvesztését, megváltoztatását, jogosulatlan közlését vagy az azokhoz
        való jogosulatlan hozzáférést eredményezi; (Rendelet 4. cikk 12.) (2) A
        leggyakoribb jelentett incidensek lehetnek például: a laptop vagy mobil
        telefon elvesztése, személyes adatok nem biztonságos tárolása (pl.
        szemetesbe dobott fizetési papírok); adatok nem biztonságos továbbítása,
        ügyfél- és vevő- partnerlisták illetéktelen másolása, továbbítása,
        szerver elleni támadások, honlap feltörése. 37. § Adatvédelmi incidensek
        kezelés, orvoslása (1) Adatvédelmi incidensek megelőzése, kezelése, a
        vonatkozó jogi előírások betartása a Társaság vezetőjének feladata. (2)
        Az informatikai rendszereken naplózni kell a hozzáféréseket és
        hozzáférési kisérleteket, és ezeket folyamatosan elemezni kell. (3)
        Amennyiben a társaság ellenőrzésre jogosult munkavállalói a feladataik
        ellátása során adatvédelmi incidenst észlelnek, haladéktalanul
        értesíteniük kell a Társaság vezetőjét. (4) A Társaság munkavállalói
        kötelesek jelenteni a Társaság vezetőjének, vagy a munkáltatói jogok
        gyakorlójának, ha adatvédelmi incidenst, vagy arra utaló eseményt
        észlelnek. (5) Adatvédelmi incidens bejelenthető a Társaság központi
        e-mail címén, telefonszámán, amelyen a munkavállalók, szerződő
        partnerek, érintettek jelenteni tudják az alapul szolgáló eseményeket,
        biztonsági gyengeségeket. (6) Adatvédelmi incidens bejelentése esetén a
        Társaság vezetője – az informatikai, pénzügyi és működési vezető
        bevonásával – haladéktalanul megvizsgálja a bejelentést, ennek során
        azonosítani kell az incidenst, el kell dönteni, hogy valódi incidensről,
        vagy téves riasztásról van szó. Meg kell vizsgálni és meg kell
        állapítani: a. az incidens bekövetkezésének időpontját és helyét, b. az
        incidens leírását, körülményeit, hatásait, c. az incidens során
        kompromittálódott adatok körét, számosságát, d. a kompromittálódott
        adatokkal érintett személyek körét, e. az incidens elhárítása érdekében
        tett intézkedések leírását, f. a kár megelőzése, elhárítása, csökkentése
        érdekében tett intézkedések leírását. (7) Adatvédelmi incidens
        bekövetkezése esetén az érintett rendszereket, személyeket, adatokat be
        kell határolni és el kell különíteni és gondoskodni kell az incidens
        bekövetkezését alátámasztó bizonyítékok begyűjtéséről és megőrzéséről.
        Ezt követően lehet megkezdeni a károk helyreállítását és a jogszerű
        működés visszaállítását. 38. § Adatvédelmi incidensek nyilvántartása (1)
        Az adatvédelmi incidensekről nyilvántartást kell vezetni, amely
        tartalmazza: a) az érintett személyes adatok körét, b) az adatvédelmi
        incidenssel érintettek körét és számát, c) az adatvédelmi incidens
        időpontját, d) az adatvédelmi incidens körülményeit, hatásait, e) az
        adatvédelmi incidens orvoslására megtett intézkedéseket, f) az
        adatkezelést előíró jogszabályban meghatározott egyéb adatokat. (2) A
        nyilvántartásban szereplő adatvédelmi incidensekre vonatkozó adatokat 5
        évig meg kell őrizni.{' '}
      </p>
      <br />
      <h2>IX. FEJEZET ADATVÉDELMI HATÁSVIZSGÁLAT ÉS ELŐZETES KONZULTÁCIÓ</h2>
      <p>
        39. § Adatvédelmi hatásvizsgálat és előzetes konzultáció (1) Ha az
        adatkezelés valamely – különösen új technológiákat alkalmazó – típusa –,
        figyelemmel annak jellegére, hatókörére, körülményére és céljaira,
        valószínűsíthetően magas kockázattal jár a természetes személyek jogaira
        és szabadságaira nézve, akkor az adatkezelő az adatkezelést megelőzően
        hatásvizsgálatot végez arra vonatkozóan, hogy a tervezett adatkezelési
        műveletek a személyes adatok védelmét hogyan érintik. Olyan egymáshoz
        hasonló típusú adatkezelési műveletek, amelyek egymáshoz hasonló magas
        kockázatokat jelentenek, egyetlen hatásvizsgálat keretei között is
        értékelhetőek. (2) Ha az adatvédelmi hatásvizsgálat megállapítja, hogy
        az adatkezelés az adatkezelő által a kockázat mérséklése céljából tett
        intézkedések hiányában valószínűsíthetően magas kockázattal jár, a
        személyes adatok kezelését megelőzően az adatkezelő konzultál a
        felügyeleti hatósággal. (3) Az adatvédelmi hatásvizsgálat és előzetes
        konzultáció részletes szabályaira a rendelet 35-36. ckkei és az Infotv.
        rendelkezései irányadók.
      </p>
      <br />
      <h2>X. FEJEZET AZ ÉRINTETT SZEMÉLY JOGAI</h2>
      <p>
        40.§ Tájékoztatás az érintett jogairól (1) Az érintett jogai röviden
        összefoglalva: 1. Átlátható tájékoztatás, kommunikáció és az érintett
        joggyakorlásának elősegítése 2. Előzetes tájékozódáshoz való jog – ha a
        személyes adatokat az érintettől gyűjtik 3. Az érintett tájékoztatása és
        a rendelkezésére bocsátandó információk, ha a személyes adatokat az
        adatkezelő nem tőle szerezte meg 4. Az érintett hozzáférési joga 5. A
        helyesbítéshez való jog 6. A törléshez való jog („az elfeledtetéshez
        való jog”) 7. Az adatkezelés korlátozásához való jog 8. A személyes
        adatok helyesbítéséhez vagy törléséhez, illetve az adatkezelés
        korlátozásához kapcsolódó értesítési kötelezettség 9. Az
        adathordozhatósághoz való jog 10. A tiltakozáshoz való jog 11.
        Automatizált döntéshozatal egyedi ügyekben, beleértve a profilalkotást
        12. Korlátozások 13. Az érintett tájékoztatása az adatvédelmi
        incidensről 14. A felügyeleti hatóságnál történő panasztételhez való jog
        (hatósági jogorvoslathoz való jog) 15. A felügyeleti hatósággal szembeni
        hatékony bírósági jogorvoslathoz való jog 16. Az adatkezelővel vagy az
        adatfeldolgozóval szembeni hatékony bírósági jogorvoslathoz való jog (2)
        Az érintett jogai részletesen: 1. Átlátható tájékoztatás, kommunikáció
        és az érintett joggyakorlásának elősegítése 1.1. Az adatkezelőnek az
        érintett részére a személyes adatok kezelésére vonatkozó valamennyi
        információt és minden egyes tájékoztatást tömör, átlátható, érthető és
        könnyen hozzáférhető formában, világosan és közérthetően megfogalmazva
        kell nyújtania, különösen a gyermekeknek címzett bármely információ
        esetében. Az információkat írásban vagy más módon – ideértve adott
        esetben az elektronikus utat is – kell megadni. Az érintett kérésére
        szóbeli tájékoztatás is adható, feltéve, hogy más módon igazolták az
        érintett személyazonosságát. 1.2. Az adatkezelőnek elő kell segítenie az
        érintett jogainak a gyakorlását. 1.3. Az adatkezelő indokolatlan
        késedelem nélkül, de mindenféleképpen a kérelem beérkezésétől számított
        egy hónapon belül tájékoztatja az érintettet a jogai gyakorlására
        irányuló kérelme nyomán hozott intézkedésekről. E határidő a Rendeletben
        írt feltételekkel további két hónappal meghosszabbítható. amelyről az
        érintettet tájékoztatni kell. 1.4. Ha az adatkezelő nem tesz
        intézkedéseket az érintett kérelme nyomán, késedelem nélkül, de
        legkésőbb a kérelem beérkezésétől számított egy hónapon belül
        tájékoztatja az érintettet az intézkedés elmaradásának okairól, valamint
        arról, hogy az érintett panaszt nyújthat be valamely felügyeleti
        hatóságnál, és élhet bírósági jogorvoslati jogával. 1.5. Az adatkezelő
        az információkat és az érintett jogairól szóló tájékoztatást és
        intézkedést díjmentesen biztosítja, azonban a Rendeletben írt esetekben
        díj számítható fel. A részletes szabályok a Rendelet 12 cikke alatt
        találhatók.
      </p>
      <p>
        2. Előzetes tájékozódáshoz való jog – ha a személyes adatokat az
        érintettől gyűjtik 2.1. Az érintett jogosult arra, hogy az
        adatkezeléssel összefüggő tényekről és információkról az adatkezelés
        megkezdését megelőzően tájékoztatást kapjon. Ennek keretében az
        érintettet tájékoztatni kell: a) az adatkezelő és képviselője kilétéről
        és elérhetőségeiről, b) az adatvédelmi tisztviselő elérhetőségeiről (ha
        van ilyen), c) a személyes adatok tervezett kezelésének céljáról,
        valamint az adatkezelés jogalapjáról, d) jogos érdek érvényesítésén
        alapuló adatkezelés esetén, az adatkezelő vagy harmadik fél jogos
        érdekeiről, e) a személyes adatok címzettjeiről – akikkel a személyes
        adatot közlik – , illetve a címzettek kategóriáiról, ha van ilyen; e)
        adott esetben annak tényéről, hogy az adatkezelő harmadik országba vagy
        nemzetközi szervezet részére kívánja továbbítani a személyes adatokat.
        2.2. A tisztességes és átlátható adatkezelés biztosítsa érdekében az
        adatkezelőnek az érintettet a következő kiegészítő információkról kell
        tájékoztatnia: a) a személyes adatok tárolásának időtartamáról, vagy ha
        ez nem lehetséges, ezen időtartam meghatározásának szempontjairól; b) az
        érintett azon jogáról, hogy kérelmezheti az adatkezelőtől a rá vonatkozó
        személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy
        kezelésének korlátozását, és tiltakozhat az ilyen személyes adatok
        kezelése ellen, valamint az érintett adathordozhatósághoz való jogáról;
        c) az érintett hozzájárulásán alapuló adatkezelés esetén arról, hogy a
        hozzájárulás bármely időpontban történő visszavonásához való jog, amely
        nem érinti a visszavonás előtt a hozzájárulás alapján végrehajtott
        adatkezelés jogszerűségét; d) a felügyeleti hatósághoz címzett panasz
        benyújtásának jogáról; e) arról, hogy a személyes adat szolgáltatása
        jogszabályon vagy szerződéses kötelezettségen alapul vagy szerződés
        kötésének előfeltétele-e, valamint hogy az érintett köteles-e a
        személyes adatokat megadni, továbbá hogy milyen lehetséges
        következményeikkel járhat az adatszolgáltatás elmaradása; f) az
        automatizált döntéshozatal tényéről, ideértve a profilalkotást is,
        valamint legalább ezekben az esetekben az alkalmazott logikáról, és arra
        vonatkozóan érthető információkról, hogy az ilyen adatkezelés milyen
        jelentőséggel, és az érintettre nézve milyen várható következményekkel
        bír. 2.3. Ha az adatkezelő a személyes adatokon a gyűjtésük céljától
        eltérő célból további adatkezelést kíván végezni, a további adatkezelést
        megelőzően tájékoztatnia kell az érintettet erről az eltérő célról és
        minden releváns kiegészítő információról. Az előzetes tájékozódáshoz
        való jog részletes szabályait a Rendelet 13. cikke tartalmazza.
      </p>
      <p>
        3. Az érintett tájékoztatása és a rendelkezésére bocsátandó információk,
        ha a személyes adatokat az adatkezelő nem tőle szerezte meg 3.1. Ha az
        adatkezelő a személyes adatokat nem az érintettől szerezte meg, az
        érintettet az adatkezelőnek a személyes adatok megszerzésétől számított
        legkésőbb egy hónapon belül; ha a személyes adatokat az érintettel való
        kapcsolattartás céljára használják, legalább az érintettel való első
        kapcsolatfelvétel alkalmával; vagy ha várhatóan más címzettel is közlik
        az adatokat, legkésőbb a személyes adatok első alkalommal való
        közlésekor tájékoztatnia kell az előbbi 2. pontban írt tényekről és
        információkról, továbbá az érintett személyes adatok kategóriáiról,
        valamint a személyes adatok forrásáról és adott esetben arról, hogy az
        adatok nyilvánosan hozzáférhető forrásokból származnak-e. 3.2. A további
        szabályokra az előbbi 2. pontban (Előzetes tájékozódáshoz való jog)
        írtak irányadók. E tájékoztatás részletes szabályait a Rendelet 14.
        cikke tartalmazza.
      </p>
      <p>
        4. Az érintett hozzáférési joga 4.1. Az érintett jogosult arra, hogy az
        adatkezelőtől visszajelzést kapjon arra vonatkozóan, hogy személyes
        adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés
        folyamatban van, jogosult arra, hogy a személyes adatokhoz és az előbbi
        2-3. pontban írt kapcsolódó információkhoz hozzáférést kapjon. (Rendelet
        15. cikk). 4.2. Ha személyes adatoknak harmadik országba vagy nemzetközi
        szervezet részére történő továbbítására kerül sor, az érintett jogosult
        arra, hogy tájékoztatást kapjon a továbbításra vonatkozóan a Rendelet
        46. cikk szerinti megfelelő garanciákról. 4.3. Az adatkezelőnek az
        adatkezelés tárgyát képező személyes adatok másolatát az érintett
        rendelkezésére kell bocsátania. Az érintett által kért további
        másolatokért az adatkezelő az adminisztratív költségeken alapuló,
        észszerű mértékű díjat számíthat fel. Az érintett hozzáférési jogára
        vonatkozó részletes szabályokat a Rendelt 15. cikke tartalmazza.
      </p>
      <p>
        5. A helyesbítéshez való jog 5.1. Az érintett jogosult arra, hogy
        kérésére az Adatkezelő indokolatlan késedelem nélkül helyesbítse a rá
        vonatkozó pontatlan személyes adatokat. 5.2. Figyelembe véve az
        adatkezelés célját, az érintett jogosult arra, hogy kérje a hiányos
        személyes adatok – egyebek mellett kiegészítő nyilatkozat útján történő
        – kiegészítését is. Ezen szabályokat a Rendelet 16. cikke tartalmazza.
      </p>
      <p>
        6. A törléshez való jog („az elfeledtetéshez való jog”) 6.1. Az érintett
        jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül
        törölje a rá vonatkozó személyes adatokat, az adatkezelő pedig köteles
        arra, hogy az érintettre vonatkozó személyes adatokat indokolatlan
        késedelem nélkül törölje ha a) a személyes adatokra már nincs szükség
        abból a célból, amelyből azokat gyűjtötték vagy más módon kezelték; b)
        az érintett visszavonja az adatkezelés alapját képező hozzájárulását, és
        az adatkezelésnek nincs más jogalapja; c) az érintett tiltakozik az
        adatkezelése ellen, és nincs elsőbbséget élvező jogszerű ok az
        adatkezelésre, d) a személyes adatokat jogellenesen kezelték; e) a
        személyes adatokat az adatkezelőre alkalmazandó uniós vagy tagállami
        jogban előírt jogi kötelezettség teljesítéséhez törölni kell; f) a
        személyes adatok gyűjtésére közvetlenül gyermeknek kínált, információs
        társadalommal összefüggő szolgáltatások kínálásával kapcsolatosan került
        sor. 6.2. A törléshez való jog nem érvényesíthető, ha az adatkezelés
        szükséges a) a véleménynyilvánítás szabadságához és a tájékozódáshoz
        való jog gyakorlása céljából; b) az adatkezelőre alkalmazandó uniós vagy
        tagállami jog szerinti kötelezettség teljesítése, illetve közérdekből
        vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása
        keretében végzett feladat végrehajtása céljából; c) a népegészségügy
        területét érintő közérdek alapján; d) a közérdekű archiválás céljából,
        tudományos és történelmi kutatási célból vagy statisztikai célból,
        amennyiben a törléshez való jog valószínűsíthetően lehetetlenné tenné
        vagy komolyan veszélyeztetné ezt az adatkezelést; vagy e) jogi igények
        előterjesztéséhez, érvényesítéséhez, illetve védelméhez. A törléshez
        való jogra vonatkozó részletes szabályokat a Rendelet 17. cikke
        tartalmazza.
      </p>
      <p>
        7. Az adatkezelés korlátozásához való jog 7.1. Az adatkezelés
        korlátozása esetén az ilyen személyes adatokat a tárolás kivételével
        csak az érintett hozzájárulásával, vagy jogi igények előterjesztéséhez,
        érvényesítéséhez vagy védelméhez, vagy más természetes vagy jogi személy
        jogainak védelme érdekében, vagy az Unió, illetve valamely tagállam
        fontos közérdekéből lehet kezelni. 7.2. Az érintett jogosult arra, hogy
        kérésére az Adatkezelő korlátozza az adatkezelést ha ha az alábbiak
        valamelyike teljesül: a) az érintett vitatja a személyes adatok
        pontosságát, ez esetben a korlátozás arra az időtartamra vonatkozik,
        amely lehetővé teszi, hogy az Adatkezelő ellenőrizze a személyes adatok
        pontosságát; b) az adatkezelés jogellenes, és az érintett ellenzi az
        adatok törlését, és ehelyett kéri azok felhasználásának korlátozását; c)
        az Adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés
        céljából, de az érintett igényli azokat jogi igények előterjesztéséhez,
        érvényesítéséhez vagy védelméhez; vagy d) az érintett tiltakozott az
        adatkezelés ellen; ez esetben a korlátozás arra az időtartamra
        vonatkozik, amíg megállapításra nem kerül, hogy az adatkezelő jogos
        indokai elsőbbséget élveznek-e az érintett jogos indokaival szemben.
        7.3. Az adatkezelés korlátozásának feloldásáról az érintettet előzetesen
        tájékoztatni kell. A vonatkozó szabályokat a Rendelet 18. cikke
        tartalmazza.
      </p>
      <p>
        8. A személyes adatok helyesbítéséhez vagy törléséhez, illetve az
        adatkezelés korlátozásához kapcsolódó értesítési kötelezettség Az
        adatkezelő minden olyan címzettet tájékoztat valamennyi helyesbítésről,
        törlésről vagy adatkezelés-korlátozásról, akivel, illetve amellyel a
        személyes adatot közölték, kivéve, ha ez lehetetlennek bizonyul, vagy
        aránytalanul nagy erőfeszítést igényel. Az érintettet kérésére az
        adatkezelő tájékoztatja e címzettekről. E szabályok a Rendelet 19. cikke
        alatt találhatók.
      </p>
      <p>
        9.1. A Rendeletben írt feltételekkel az érintett jogosult arra, hogy a
        rá vonatkozó, általa egy adatkezelő rendelkezésére bocsátott személyes
        adatokat tagolt, széles körben használt, géppel olvasható formátumban
        megkapja, továbbá jogosult arra, hogy ezeket az adatokat egy másik
        adatkezelőnek továbbítsa anélkül, hogy ezt akadályozná az az adatkezelő,
        amelynek a személyes adatokat a rendelkezésére bocsátotta, ha a) az
        adatkezelés hozzájáruláson, vagy szerződésen alapul; és b) az
        adatkezelés automatizált módon történik. 9.2. Az érintett kérheti a
        személyes adatok adatkezelők közötti közvetlen továbbítását is. 9.3. Az
        adathordozhatósághoz való jog gyakorlása nem sértheti a Rendelet 17.
        cikkét (A törléshez való jog („az elfeledtetéshez való jog”). Az
        adtahordozhatósághoz való jog nem alkalmazandó abban az esetben, ha az
        adatkezelés közérdekű vagy az adatkezelőre ruházott közhatalmi
        jogosítványai gyakorlásának keretében végzett feladat végrehajtásához
        szükséges. E jog nem érintheti hátrányosan mások jogait és szabadságait.
        A részletes szabályokat a Rendelet 20. cikke tartalmazza.
      </p>
      <p>
        10. A tiltakozáshoz való jog 10.1. Az érintett jogosult arra, hogy a
        saját helyzetével kapcsolatos okokból bármikor tiltakozzon személyes
        adatainak közérdeken, közfeladat végrehajtásán (6. cikk (1) e)) , vagy
        jogos érdeken (6. cikk f)) alapuló kezelése ellen, ideértve az említett
        rendelkezéseken alapuló profilalkotást is. Ebben az esetben az
        adatkezelő a személyes adatokat nem kezelheti tovább, kivéve, ha az
        adatkezelő bizonyítja, hogy az adatkezelést olyan kényszerítő erejű
        jogos okok indokolják, amelyek elsőbbséget élveznek az érintett
        érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi
        igények előterjesztéséhez, érvényesítéséhez vagy védelméhez
        kapcsolódnak. 10.2. Ha a személyes adatok kezelése közvetlen
        üzletszerzés érdekében történik, az érintett jogosult arra, hogy
        bármikor tiltakozzon a rá vonatkozó személyes adatok e célból történő
        kezelése ellen, ideértve a profilalkotást is, amennyiben az a közvetlen
        üzletszerzéshez kapcsolódik. Ha az érintett tiltakozik a személyes
        adatok közvetlen üzletszerzés érdekében történő kezelése ellen, akkor a
        személyes adatok a továbbiakban e célból nem kezelhetők. 10.3. Ezen
        jogokra legkésőbb az érintettel való első kapcsolatfelvétel során
        kifejezetten fel kell hívni annak figyelmét, és az erre vonatkozó
        tájékoztatást egyértelműen és minden más információtól elkülönítve kell
        megjeleníteni. 10.4. Az érintett a tiltakozáshoz való jogot műszaki
        előírásokon alapuló automatizált eszközökkel is gyakorolhatja. 10.5. Ha
        a személyes adatok kezelésére tudományos és történelmi kutatási célból
        vagy statisztikai célból kerül sor, az érintett jogosult arra, hogy a
        saját helyzetével kapcsolatos okokból tiltakozhasson a rá vonatkozó
        személyes adatok kezelése ellen, kivéve, ha az adatkezelésre közérdekű
        okból végzett feladat végrehajtása érdekében van szükség. A vonatkozó
        szabályokat a Rendelet cikke tartalmazza.
      </p>
      <p>
        11. Automatizált döntéshozatal egyedi ügyekben, beleértve a
        profilalkotást 11.1. Az érintett jogosult arra, hogy ne terjedjen ki rá
        az olyan, kizárólag automatizált adatkezelésen – ideértve a
        profilalkotást is – alapuló döntés hatálya, amely rá nézve joghatással
        járna vagy őt hasonlóképpen jelentős mértékben érintené. 11.2. Ez a
        jogosultság nem alkalmazandó abban az esetben, ha a döntés: a) az
        érintett és az adatkezelő közötti szerződés megkötése vagy teljesítése
        érdekében szükséges; b) meghozatalát az adatkezelőre alkalmazandó olyan
        uniós vagy tagállami jog teszi lehetővé, amely az érintett jogainak és
        szabadságainak, valamint jogos érdekeinek védelmét szolgáló megfelelő
        intézkedéseket is megállapít; vagy c) az érintett kifejezett
        hozzájárulásán alapul. 11.3. Az előbbi a) és c) pontjában említett
        esetekben az adatkezelő köteles megfelelő intézkedéseket tenni az
        érintett jogainak, szabadságainak és jogos érdekeinek védelme érdekében,
        ideértve az érintettnek legalább azt a jogát, hogy az adatkezelő
        részéről emberi beavatkozást kérjen, álláspontját kifejezze, és a
        döntéssel szemben kifogást nyújtson be. A további szabályokat a Rendelet
        22. cikke tartalmazza.
      </p>
      <p>
        12. Korlátozások Az adatkezelőre vagy adatfeldolgozóra alkalmazandó
        uniós vagy tagállami jog jogalkotási intézkedésekkel korlátozhatja jogok
        és kötelezettségek (Rendelet 12-22. cikk, 34. cikk, 5. cikk) hatályát ha
        a korlátozás tiszteletben tartja az alapvető jogok és szabadságok
        lényeges tartalmát. E korlátozás feltételeit a Rendelet 23. cikke
        tartalmazza.
      </p>
      <p>
        13. Az érintett tájékoztatása az adatvédelmi incidensről 13.1. Ha az
        adatvédelmi incidens valószínűsíthetően magas kockázattal jár a
        természetes személyek jogaira és szabadságaira nézve, az adatkezelőnek
        indokolatlan késedelem nélkül tájékoztatnia kell az érintettet az
        adatvédelmi incidensről. E tájékoztatásban világosan és közérthetően
        ismertetni kell az adatvédelmi incidens jellegét, és közölni kell
        legalább a következőket: a) az adatvédelmi tisztviselő vagy a további
        tájékoztatást nyújtó egyéb kapcsolattartó nevét és elérhetőségeit; c)
        ismertetni kell az adatvédelmi incidensből eredő, valószínűsíthető
        következményeket; d) ismertetni kell az adatkezelő által az adatvédelmi
        incidens orvoslására tett vagy tervezett intézkedéseket, beleértve adott
        esetben az adatvédelmi incidensből eredő esetleges hátrányos
        következmények enyhítését célzó intézkedéseket. 13.2. Az érintettet nem
        kell az tájékoztatni, ha a következő feltételek bármelyike teljesül: a)
        az adatkezelő megfelelő technikai és szervezési védelmi intézkedéseket
        hajtott végre, és ezeket az intézkedéseket az adatvédelmi incidens által
        érintett adatok tekintetében alkalmazták, különösen azokat az
        intézkedéseket – mint például a titkosítás alkalmazása –, amelyek a
        személyes adatokhoz való hozzáférésre fel nem jogosított személyek
        számára értelmezhetetlenné teszik az adatokat; b) az adatkezelő az
        adatvédelmi incidenst követően olyan további intézkedéseket tett,
        amelyek biztosítják, hogy az érintett jogaira és szabadságaira
        jelentett, magas kockázat a továbbiakban valószínűsíthetően nem valósul
        meg; c) a tájékoztatás aránytalan erőfeszítést tenne szükségessé. Ilyen
        esetekben az érintetteket nyilvánosan közzétett információk útján kell
        tájékoztatni, vagy olyan hasonló intézkedést kell hozni, amely
        biztosítja az érintettek hasonlóan hatékony tájékoztatását. A további
        szabályokat a Rendelet 34. cikke tartalmazza.
      </p>
      <p>
        14. A felügyeleti hatóságnál történő panasztételhez való jog (hatósági
        jogorvoslathoz való jog) Az érintett jogosult arra, hogy panaszt tegyen
        egy felügyeleti hatóságnál – különösen a szokásos tartózkodási helye, a
        munkahelye vagy a feltételezett jogsértés helye szerinti tagállamban –,
        ha az érintett megítélése szerint a rá vonatkozó személyes adatok
        kezelése megsérti a Rendeletet. Az a felügyeleti hatóság, amelyhez a
        panaszt benyújtották, köteles tájékoztatni az ügyfelet a panasszal
        kapcsolatos eljárási fejleményekről és annak eredményéről, ideértve azt
        is, hogy a az ügyfél jogosult bírósági jogorvoslattal élni. E
        szabályokat a Rendelet 77. cikke tartalmazza.
      </p>
      <p>
        15. A felügyeleti hatósággal szembeni hatékony bírósági jogorvoslathoz
        való jog 15.1. Az egyéb közigazgatási vagy nem bírósági útra tartozó
        jogorvoslatok sérelme nélkül, minden természetes és jogi személy
        jogosult a hatékony bírósági jogorvoslatra a felügyeleti hatóság rá
        vonatkozó, jogilag kötelező erejű döntésével szemben. 15.2. Az egyéb
        közigazgatási vagy nem bírósági útra tartozó jogorvoslatok sérelme
        nélkül, minden érintett jogosult a hatékony bírósági jogorvoslatra, ha
        az illetékes felügyeleti hatóság nem foglalkozik a panasszal, vagy három
        hónapon belül nem tájékoztatja az érintettet a benyújtott panasszal
        kapcsolatos eljárási fejleményekről vagy annak eredményéről. 15.3. A
        felügyeleti hatósággal szembeni eljárást a felügyeleti hatóság székhelye
        szerinti tagállam bírósága előtt kell megindítani. 15.4. Ha a
        felügyeleti hatóság olyan döntése ellen indítanak eljárást, amellyel
        kapcsolatban az egységességi mechanizmus keretében a Testület előzőleg
        véleményt bocsátott ki vagy döntést hozott, a felügyeleti hatóság
        köteles ezt a véleményt vagy döntést a bíróságnak megküldeni. E
        szabályokat a Rendelet 78. cikke tartalmazza.
      </p>
      <p>
        16. Az adatkezelővel vagy az adatfeldolgozóval szembeni hatékony
        bírósági jogorvoslathoz való jog 16.1. A rendelkezésre álló
        közigazgatási vagy nem bírósági útra tartozó jogorvoslatok – köztük a
        felügyeleti hatóságnál történő panasztételhez való jog – sérelme nélkül,
        minden érintett hatékony bírósági jogorvoslatra jogosult, ha megítélése
        szerint a személyes adatainak e rendeletnek nem megfelelő kezelése
        következtében megsértették az e rendelet szerinti jogait. 16.2. Az
        adatkezelővel vagy az adatfeldolgozóval szembeni eljárást az adatkezelő
        vagy az adatfeldolgozó tevékenységi helye szerinti tagállam bírósága
        előtt kell megindítani. Az ilyen eljárás megindítható az érintett
        szokásos tartózkodási helye szerinti tagállam bírósága előtt is, kivéve,
        ha az adatkezelő vagy az adatfeldolgozó valamely tagállamnak a
        közhatalmi jogkörében eljáró közhatalmi szerve. E szabályokat a Rendelet
        79. cikke tartalmazza.
      </p>
      <br />
      <h2>XI. FEJEZET ZÁRÓ RENDELKEZÉSEK</h2>
      <p>
        41. § A Szabályzat megállapítása és módosítása A Szabályzat
        megállapítására és módosítására a Társaság ügyvezetője jogosult. 42. §
        Intézkedések a szabályzat megismertetése E Szabályzat rendelkezéseit meg
        kell ismertetni a Társaság valamennyi munkavállalójával
        (foglalkoztatottjával), és a munkavégzésre irányuló szerződésekben elő
        kell írni, hogy betartása és érvényesítése minden munkavállaló
        (foglalkoztatott) lényeges munkaköri kötelezettsége. A munkaszerződési
        kikötés mintája jelen szabályzat 10. számú melléklete tartalmazza.
      </p>
      <br />
      <h2>TÁJÉKOZTATÓ KAMERÁS MEGFIGYELŐRENDSZER ALKALMAZÁSÁRÓL</h2>
      <p>
        1. Adatkezelő megnevezése: Müller’s Kft. Képviselő megnevezése: Müller
        Dezső Csaba Adatvédelmi tisztviselő megnevezése: Müller Dezső Csaba
        Székhelye: 8600 Siófok, Kálmán Imre sétány 9. Telefonszám: +36 20 4585
        814 E-mail: mullers106@gmail.com Internet: müllers.hu A kamerás rendszer
        üzemeltetőjének megnevezése: Müller’s Kft. Képviselő megnevezése: Müller
        Dezső Csaba Adatvédelmi tisztviselő megnevezése: Müller Dezső Csaba
        Székhelye: 8600 Siófok, Kálmán Imre sétány 9. Telefonszám: +36 20 4585
        814 E-mail: mullers106@gmail.com Internet: müllers.hu 2. Tájékoztatjuk,
        hogy cégünk – mint adatkezelő – az e táblával jelzett helyiségben az
        emberi élet, testi épség, személyi szabadság, az üzleti titok védelme és
        vagyonvédelem céljából elektronikus megfigyelőrendszert alkalmaz, amely
        közvetlen megfigyelést / kép-, hang-, vagy kép- és hangrögzítést és
        tárolást is lehetővé tesz. A kamera rögzíti az Ön magatartását is. 3.
        Ezen adatkezelés jogalapja: az adatkezelő / munkáltató jogos érdekeinek
        érvényesítése. 4. Látogatók, vendégek tájékoztatása: A megfigyelt
        területre belépő harmadik személyekről (ügyfelek, látogatók, vendégek)
        kép és hangfelvétel a hozzájárulásukkal készíthető és kezelhető. A
        hozzájárulás ráutaló magadottnak tekintendő. Ráutaló magatartás
        különösen, ha az ott tartózkodó természetes személy a megfigyelt
        területre e tájékoztatás ellenére a területre bemegy. Ezen adatkezelés
        célját a 1. pont tartalmazza, jogalapja az érintett hozzájárulása. 5.
        Tárolás ideje: A rögzített felvételeket felhasználás hiányában maximum 3
        (három) munkanapig őrizhetők meg. Felhasználásnak az minősül, ha a
        rögzített kép-, hang-, vagy kép- és hangfelvételt, valamint más
        személyes adatot bírósági vagy más hatósági eljárásban bizonyítékként
        kívánják felhasználni. 6. A tárolás helye: az adatkezelő székhelye /
        telephelye. 7. A felvétel megtekintésére jogosultak: Az elektronikus
        megfigyelőrendszerrel rögzített adatok megtekintésére a törvényben erre
        feljogosítottakon kívül a jogsértések feltárása és a rendszer
        működésének ellenőrzés céljából a kezelő személyzet, a munkáltató
        vezetője és helyettese, továbbá a megfigyelt terület munkahelyi vezetője
        jogosult. 8. Adatbiztonsági intézkedések: a, a képfelvételek
        megtekintésére és visszanézésére szolgáló monitor úgy kell elhelyezni,
        hogy a képfelvételek sugárzása alatt azokat a jogosultsági koron kívül
        más személy ne láthassa. b, A megfigyelés és a tárolt képfelvételek
        visszanézése kizárólag a jogsértő cselekmények kiszűrése, az azok
        megszüntetéséhez szükséges intézkedések kezdeményezése céljából
        végezhető. c, A kamerák által sugárzott képekről a központi felvevő
        egységen kívül más eszközzel felvételt készíteni nem lehet. d, A
        felvétel hordozó eszközeit elzárt helyen kell tárolni. e, A tárolt
        képfelvételekhez hozzáférés csak biztonságos módon, és akként történhet,
        hogy az adatkezelő személye azonosítható legyen. f, A tárolt
        képfelvételek visszanézését és a képfelvételekről készített mentést
        dokumentálni kell. g, A jogosultság indokának megszűnése esetén a tárolt
        képfelvételekhez a hozzáférést haladéktalanul meg kell szüntetni. h, A
        rögzítő készülékben elkülönített merevlemezről fut az operációs rendszer
        és a rögzítésre került felvételek. A felvételekről külön biztonsági
        másolat nem készül. i, Jogsértő cselekmény észlelését követően a
        cselekményről készült felvétel tarolása és a szükséges hatósági eljárás
        haladéktalanul kezdeményezése felől intézkedni kell, egyben tájékoztatni
        kell a hatóságot, hogy a cselekményről képfelvétel készült. 9.
        Tájékoztatás az érintett személy jogairól, és a jogérvényesítésről Az,
        akinek jogát vagy jogos érdekét a kép-, hang-, vagy a kép- és
        hangfelvétel adatának rögzítése érinti, a kép-, hang-, valamint kép- és
        hangfelvétel rögzítésétől számított három munkanapon belül jogának vagy
        jogos érdekének igazolásával kérheti, hogy az adatot annak kezelője ne
        semmisítse meg, illetve ne törölje. Az érintett jogait részletesen az
        Adatkezelési tájékoztatónk tartalmazza, amely elérhető a társaság
        honlapján, illetve a székhelyén. Kiemeljük ebből, hogy az érintettnek
        joga van az átlátható tájékoztatáshoz, a kommunikáció és az érintett
        joggyakorlásának elősegítéséhez. A felügyeleti hatóság panaszt tehet.
        Joga van adatkezelővel vagy az adatfeldolgozóval szembeni hatékony
        bírósági jogorvoslathoz. Az adatkezelőnek elő kell segítenie az érintett
        jogainak a gyakorlását. Az adatkezelő indokolatlan késedelem nélkül, de
        mindenféleképpen a kérelem beérkezésétől számított egy hónapon belül
        tájékoztatja az érintettet a jogai gyakorlására irányuló kérelme nyomán
        hozott intézkedésekről. Ha az adatkezelő nem tesz intézkedéseket az
        érintett kérelme nyomán, késedelem nélkül, de legkésőbb a kérelem
        beérkezésétől számított egy hónapon belül tájékoztatja az érintettet az
        intézkedés elmaradásának okairól, valamint arról, hogy az érintett
        panaszt nyújthat be valamely felügyeleti hatóságnál, és élhet bírósági
        jogorvoslati jogával. Az adatkezelő az információkat és az érintett
        jogairól szóló tájékoztatást és intézkedést díjmentesen biztosítja,
        azonban a jogszabályban írt esetekben díj számítható fel. Müller’s Kft.
      </p>
    </div>
  );
};

export default BlogSearch;
