function $(value) {
  return document.querySelector(value);
}
function owned(e) {
  if(e.target.dataset.owned === 'nope') {
    e.target.dataset.owned = 'yep';
  }
}
function saveToCookies(i) {
  document.cookie = `${i}=; expires=Fri, 01 Jan 2337 00:00:00 GMT; path=/`;
  // fillPopUp();
}
function fillPopUp() {
  if(cookies.length >= 1 && cookies[0] !== '') {
    $('#total-cars').textContent = `${cookies.length} cars owned`;
  }
}

const carList = `AC Cars 427 S/C 1966
Acura CL 3.2 Type-S 2001
Acura CL 3.2 Type-S 2003
Acura DN-X 2002
Acura HSC 2004
Acura INTEGRA Type-R 2001
Acura NSX 1991
Acura NSX 2004
Acura NSX Coupe 1997
Acura RSX Type-S 2004
Alfa Romeo 147 2.0 Twinspark 2002
Alfa Romeo 147 GTA 2002
Alfa Romeo 155 2.5 V6 TI 1998
Alfa Romeo 156 2.5 V6 24V 1998
Alfa Romeo 166 2.5 V6 24V Sportronic 1998
Alfa Romeo Giulia Sprint GTA 1600 1965
Alfa Romeo Giulia Sprint Speciale 1963
Alfa Romeo GT 3.2 V6 24V 2004
Alfa Romeo GTV 3.0 V6 24V 2001
Alfa Romeo Spider 1600 Duetto 1966
Alfa Romeo Spider 3.0i V6 24V 2001
Alpine A110 1600S 1973
Alpine A310 1600VE 1973
AMUSE CarbonR (R34) 2004
AMUSE S2000 GT1 2004
AMUSE S2000 R1 2004
AMUSE S2000 Street Version 2004
ASL ARTA Graiya (JGTC) 2003
ASL Garaiya 2002
Aston Martin DB7 Vantage Coupe 2000
Aston Martin DB9 Coupe 2003
Aston Martin V8 Vantage 1999
Aston Martin Vanquish 2004
Audi A2 1.4 2002
Audi A3 3.2 quattro 2003
Audi Abt Audi TT-R Touring Car 2002
Audi A4 Touring Car 2004
Audi quattro 1982
Audi Auto Union V16 Type C Streamline 1937
Audi Le Mans quattro 2003
Audi Nuvolari quattro 2003
Audi Pikes Peak quattro 2003
Audi R8 Race Car 2001
Audi RS 4 2001
Audi RS 6 2002
Audi RS 6 Avant 2002
Audi S3 2002
Audi S4 1998
Audi S4 2003
Audi TT Coupe 1.8T quattro 2000
Audi TT Coupe 3.2 quattro 2003
Autobianchi A112 Abarth 1979
Bentley Speed 8 Race Car 2003
BLITZ ER34 D1 spec 2004 (D1GP) 2004
BMW 120d 2004
BMW 120i 2004
BMW 2002 Turbo 1973
BMW 320i Touring Car 2003
BMW 330i 2005
BMW M Coupe 1998
BMW M3 2004
BMW M3 CSL 2003
BMW M3 GTR 2003
BMW M3 GTR Race Car 2001
BMW M5 2005
BMW McLaren F1 GTR Race Car 1997
BMW V12 LMR Race Car 1999
BMW Z4 2003
BUICK GNX 1987
BUICK Special 1962
Cadillac CIEN 2002
Callaway C12 2003
Caterham Seven Fire Blade 2002
Chaparral 2D Race Car 1967
Chaparral 2J Race Car 1970
Chevrolet Camaro IROC-Z Concept 1988
Chevrolet Camaro LM Race Car
Chevrolet Camaro SS 1969
Chevrolet Camaro SS 2000
Chevrolet Camaro Z28 302 1969
Chevrolet Camaro Z28 Coupe 1997
Chevrolet Chevelle SS 454 1970
Chevrolet Corvette C5R (C5) 2000
Chevrolet Corvette Convertible (C1) 1954
Chevrolet Corvette Coupe (C2) 1963
Chevrolet Corvette GRAND SPORT (C4) 1996
Chevrolet Corvette Stingray L46 350 (C3) 1969
Chevrolet Corvette Z06 (C2) Race Car 1963
Chevrolet Corvette Z06 (C5) 2000
Chevrolet Corvette ZR-1 (C4) 1990
Chevrolet Silverado SST Concept 2002
Chevrolet SSR '03 2003
Chrysler 300C 2005
Chrysler Crossfire 2004
Chrysler Prowler 2002
Chrysler PT-Cruiser 2000
Citroen 2CV Type A 1954
Citroen C3 1.6 2002
Citroen C5 V6 Exclusive 2003
Citroen Xantia 3.0i V6 Exclusive 2000
Citroen Xsara Rally Car 1999
Citroen Xsara VTR 2003
Cizeta V16T 1994
Daihatsu Copen Active Top 2002
Daihatsu Copen Detachable Top 2002
Daihatsu Midget 1963
Daihatsu Midget II D-type 1998
Daihatsu MIRA TR-XX Avanzato R 1997
Daihatsu MOVE Custom RS Limited 2002
Daihatsu MOVE CX 1995
Daihatsu MOVE SR-XX 2WD 1997
Daihatsu MOVE SR-XX 4WD 1997
Daihatsu STORIA CX 2WD 1998
Daihatsu STORIA CX 4WD 1998
Daihatsu STORIA X4 2000
DMC DeLorean S2 2004
Dodge Charger 440 R/T 1970
Dodge Charger Super Bee 426 Hemi 1971
Dodge RAM 1500 LARAMIE Hemi Quad Cab 2004
Dodge SRT4 2003
Dodge VIPER GTS 1999
Dodge VIPER GTSR Concept 2000
Dodge VIPER GTS-R Team Oreca Race Car 2000
Dodge VIPER SRT10 2003
Dome DOME ZERO 1978
EAGLE Talon Esi 1997
Fiat 500F 1965
Fiat 500L 1969
Fiat 500R 1972
Fiat Barchetta Giovane Due 2000
Fiat Coupe Turbo Plus 2000
Fiat Panda Super i.e. 1990
Fiat Punto HGT Abarth 2000
Ford 2000 Ford Falcon XR8 2000
Ford Escort Rally Car 1998
Ford FOCUS Rally Car 1999
Ford FOCUS RS 2002
Ford FOCUS ST170 2003
Ford GT 2002
Ford GT 2005
Ford GT LM Race Car
Ford GT LM Race Car Spec II
Ford GT40 Race Car 1969
Ford Ka 2001
Ford Model T Tourer 1915
Ford Mustang GT 2005
Ford MUSTANG SVT Cobra R 2000
Ford RS200 1984
Ford RS200 Rally Car 1985
Ford SVT F-150 Lightning 2003
Ford Taurus SHO 1998
FPV FPV F6 Typhoon 2004
FPV FPV GT 2004
Gillet Vertigo Race Car 2004
Ginetta G4 1964
HKS GENKI HYPER SILVIA RS2 (D1GP) 2004
Holden Commodore SS 2004
Holden Monaro CV8 2004
Hommell Berlinette R/S Coupe 1999
Honda 1300 Coupe 9 S 1970
Honda ACCORD Coupe 1988
Honda ACCORD Coupe EX 2003
Honda ACCORD Euro-R 2000
Honda ACCORD Euro-R 2002
Honda ARTA NSX (JGTC) 2000
Honda BALLADE SPORTS CR-X 1.5i 1983
Honda BEAT 1991
Honda BEAT Version F 1992
Honda BEAT Version Z 1993
Honda Castrol MUGEN NSX (JGTC) 2000
Honda CITY Turbo II 1983
Honda CIVIC 1500 3door 25i 1983
Honda CIVIC 1500 3door CX 1979
Honda CIVIC SiR-II (EG) 1991
Honda CIVIC SiR-II (EG) 1992
Honda CIVIC SiR-II (EG) 1993
Honda CIVIC SiR-II (EG) 1995
Honda CIVIC TYPE R (EK) 1997
Honda CIVIC TYPE R (EK) 1998
Honda CIVIC TYPE R (EP) 2001
Honda CIVIC TYPE R (EP) 2004
Honda CR-X del Sol SiR 1992
Honda CR-X SiR 1990
Honda ELEMENT 2003
Honda Fit W 2001
Honda Gathers Drider CIVIC Race Car 1998
Honda Insight 1999
Honda INTEGRA TYPE R (DC2) 1995
Honda INTEGRA TYPE R (DC2) 1998
Honda INTEGRA TYPE R (DC2) 1999
Honda INTEGRA TYPE R (DC5) 2003
Honda INTEGRA TYPE R Touring Car
Honda LIFE STEP VAN 1972
Honda LOCTITE MUGEN NSX (JGTC) 2001
Honda Mobil 1 NSX (JGTC) 2001
Honda MUGEN MOTUL CIVIC Si Race Car 1987
Honda N360 1967
Honda NSX 1990
Honda NSX 1993
Honda NSX 1995
Honda NSX 1997
Honda NSX 1999
Honda NSX 2001
Honda NSX Type R 1992
Honda NSX Type R 2002
Honda NSX Type S 1997
Honda NSX Type S 1999
Honda NSX Type S 2001
Honda NSX Type S Zero 1997
Honda NSX Type S Zero 1999
Honda NSX-R Concept 2001
Honda NSX-R Prototype LM Race Car
Honda NSX-R Prototype LM Road Car
Honda Odyssey 2003
Honda PRELUDE Si VTEC 1991
Honda PRELUDE SiR 1996
Honda PRELUDE SiR S spec 1998
Honda PRELUDE Type S 1996
Honda PRELUDE Type S 1998
Honda RAYBRIG NSX (JGTC) 2000
Honda S2000 1999
Honda S2000 2001
Honda S2000 2004
Honda S2000 LM Race Car
Honda S2000 Type V 2000
Honda S2000 Type V 2001
Honda S2000 Type V 2003
Honda S500 1963
Honda S600 1964
Honda S800 1966
Honda S800 RSC Race Car 1968
Honda TAKATA DOME NSX (JGTC) 2003
Honda TODAY G 1985
Honda Z ACT 1970
HPA Motorsports HPA Motorsports Stage II R32 2004
Hyundai Accent Rally Car 2001
Hyundai Clix 2001
Hyundai HCD6 2001
Hyundai Tiburon GT 2001
Infiniti FX45 Concept 2002
Infiniti G20 1990
Infiniti G35 COUPE 2003
Infiniti G35 SEDAN 2003
Isuzu 117 Coupe 1968
Isuzu Bellett 1600 GT-R 1969
Isuzu PIAZZA XE 1981
Jaguar E-Type Coupe 1961
Jaguar S-Type R 2002
Jaguar XJ220 1992
Jaguar XJ220 LM Race Car
Jaguar XJR-9 Race Car 1988
Jaguar XKR Coupe 1999
Jaguar XKR R-Performance 2002
Jay Leno Tank Car 2003
Jensen Interceptor MkIII 1974
Lancia DELTA HF Integrale Evolutione 1991
Lancia DELTA HF Integrale Rally Car 1992
Lancia Delta S4 Rally Car 1985
Lancia STRATOS 1973
Lancia STRATOS Rally Car 1977
Land Rover Range Stormer Concept 2004
Lexus GS300 1991
Lexus GS300 2000
Lexus GS300 Vertex Edition (J) 2000
Lexus IS 200 1998
Lexus IS 200 (J) 1998
Lexus IS300 Sport Cross 2001
Lexus SC 300 1997
Lexus SC430 2001
Lister Storm V12 Race Car 1999
Lotus Elan S1 1962
Lotus Elise 2000
Lotus Elise 111R 2004
Lotus Elise 111S 2003
Lotus Elise Sport 190 1998
Lotus Elise Type 72 2001
Lotus Esprit Sport 350 2000
Lotus Esprit Turbo HC 1987
Lotus Esprit V8 2002
Lotus Esprit V8 GT 1998
Lotus Esprit V8 SE 1998
Lotus Europa Special 1971
Lotus Lotus Carlton 1990
Lotus Motor Sport Elise 1999
Marcos Mini Marcos GT 1970
Mazda 110S (L10A) 1967
Mazda 110S (L10B) 1968
Mazda 787B Race Car 1991
Mazda Autozam AZ-1 1992
Mazda BP FALKEN RX-7 (D1GP) 2003
Mazda Carol 360 Deluxe 1962
Mazda DEMIO (1st, J) 1999
Mazda DEMIO SPORT (2nd) 2003
Mazda KBI 2003
Mazda Mazda 323F 1993
Mazda Mazda6 5-door 2003
Mazda Mazda6 Concept 2001
Mazda Mazda6 Touring Car
Mazda Mazdaspeed 6 2005
Mazda MX-5 Miata (NA) 1989
Mazda MX-5 Miata 1.8 RS (NB, J) 1998
Mazda MX-5 Miata 1600 NR-A (NB, J) 2004
Mazda MX-5 Miata 1800 RS (NB, J) 2000
Mazda MX-5 Miata 1800 RS (NB, J) 2004
Mazda MX-5 Miata J-Limited (NA, J) 1991
Mazda MX-5 Miata J-Limited II (NA, J) 1993
Mazda MX-5 Miata SR-Limited (NA, J) 1997
Mazda MX-5 Miata S-Special Type I (NA, J) 1995
Mazda MX-5 Miata VR-Limited (NA, J) 1995
Mazda MX-5 Miata V-Special Type II (NA, J) 1993
Mazda MX-Crossport 2005
Mazda Protege 2002
Mazda RX-7 GT-Limited (FC, J) 1985
Mazda RX-7 GT-X (FC, J) 1990
Mazda RX-7 INFINI III (FC, J) 1990
Mazda RX-7 LM Race Car
Mazda RX-7 Spirit R Type A (FD) 2002
Mazda RX-7 Type R (FD, J) 1991
Mazda RX-7 Type R (FD, J) 1993
Mazda RX-7 Type R Bathurst R (FD) 2001
Mazda RX-7 Type RS (FD) 1998
Mazda RX-7 Type RS (FD) 2000
Mazda RX-7 Type RS (FD, J) 1996
Mazda RX-7 Type R-S (FD, J) 1995
Mazda RX-7 Type RS-R (FD) 1997
Mazda RX-7 Type RZ (FD) 2000
Mazda RX-7 Type RZ (FD, J) 1992
Mazda RX-7 Type RZ (FD, J) 1993
Mazda RX-7 Type RZ (FD, J) 1995
Mazda RX-7 Type RZ (FD, J) 1996
Mazda RX-8 2003
Mazda RX-8 Concept (Type-I) 2001
Mazda RX-8 Concept (Type-II) 2001
Mazda RX-8 Concept LM Race Car
Mazda RX-8 Type E (J) 2003
Mazda RX-8 Type S (J) 2003
Mercedes-Benz 190 E 2.5 - 16 Evolution II 1991
Mercedes-Benz 300 SL Coupe 1954
Mercedes-Benz A 160 Avantgarde 1998
Mercedes-Benz AMG Mercedes 190 E 2.5 - 16 Evolution II Touring Car 1992
Mercedes-Benz AMG Mercedes CLK-GTR Race Car 1998
Mercedes-Benz Benz Patent Motor Wagen 1886
Mercedes-Benz CL 600 2000
Mercedes-Benz CLK 55 AMG 2000
Mercedes-Benz CLK Touring Car 2000
Mercedes-Benz Daimler Motor Carriage 1886
Mercedes-Benz E 55 AMG 2002
Mercedes-Benz Sauber Mercedes C 9 Race Car 1989
Mercedes-Benz SL 500 (R129) 1998
Mercedes-Benz SL 500 (R230) 2002
Mercedes-Benz SL 55 AMG (R230) 2002
Mercedes-Benz SL 600 (R129) 1998
Mercedes-Benz SL 600 (R230) 2004
Mercedes-Benz SL 65 AMG (R230) 2004
Mercedes-Benz SLK 230 Kompressor 1998
Mercedes-Benz SLR McLaren 2003
Mercury Cougar XR-7 1967
MG TF160 2003
MG MGF 1997
Mine's Lancer Evolution VI 2000
Mine's Skyline GT-R? N1 V? spec (R34) 2000
MINI COOPER 2002
MINI COOPER-S 2002
MINI ONE 2002
Mitsubishi 3000GT MR (J) 1995
Mitsubishi 3000GT MR (J) 1998
Mitsubishi 3000GT SL (J) 1995
Mitsubishi 3000GT SL (J) 1996
Mitsubishi 3000GT SL (J) 1998
Mitsubishi 3000GT VR-4 (J) 1998
Mitsubishi 3000GT VR-4 Turbo (J) 1995
Mitsubishi 3000GT VR-4 Turbo (J) 1996
Mitsubishi AIRTREK Turbo-R 2002
Mitsubishi COLT 1.5 Sport X Version 2002
Mitsubishi CZ-3 Tarmac 2001
Mitsubishi CZ-3 Tarmac Rally Car
Mitsubishi ECLIPSE GT 1995
Mitsubishi Eclipse GT 2006
Mitsubishi ECLIPSE Spyder GTS 2003
Mitsubishi FTO GP Version R 1997
Mitsubishi FTO GP Version R 1999
Mitsubishi FTO GPX 1994
Mitsubishi FTO GPX 1997
Mitsubishi FTO GPX 1999
Mitsubishi FTO GR 1994
Mitsubishi FTO GR 1997
Mitsubishi FTO Super Touring Car
Mitsubishi Galant 2.0 DOHC Turbo VR-4 1989
Mitsubishi GALANT GTO MR 1970
Mitsubishi HSR-II Concept 1989
Mitsubishi i 2003
Mitsubishi Lancer 1600 GSR 1974
Mitsubishi Lancer 1600 GSR Rally Car 1974
Mitsubishi Lancer EX 1800GSR IC Turbo 1983
Mitsubishi Lancer Evlution II GSR 1994
Mitsubishi Lancer Evolution GSR 1992
Mitsubishi Lancer Evolution Super Rally Car 2003
Mitsubishi Lancer Evolution III GSR 1995
Mitsubishi Lancer Evolution IV GSR 1996
Mitsubishi Lancer Evolution IV Rally Car 1997
Mitsubishi Lancer Evolution V GSR 1998
Mitsubishi Lancer Evolution VI GSR 1999
Mitsubishi Lancer Evolution VI GSR TOMMI MAKINEN Edition 2000
Mitsubishi Lancer Evolution VI Rally Car 1999
Mitsubishi Lancer Evolution VI RS TOMMI MAKINEN Edition 2000
Mitsubishi Lancer Evolution VI RS 1999
Mitsubishi Lancer Evolution VII GSR 2001
Mitsubishi Lancer Evolution VII GT-A 2002
Mitsubishi Lancer Evolution VII RS 2001
Mitsubishi Lancer Evolution VIII GSR 2003
Mitsubishi Lancer Evolution VIII RS 2003
Mitsubishi Lancer Evolution VIII MR GSR 2004
Mitsubishi LEGNUM VR-4 Type V 1998
Mitsubishi MINICA DUNGUN ZZ 1989
Mitsubishi MIRAGE 1400GLX 1987
Mitsubishi MIRAGE CYBORG ZR 1997
Mitsubishi PAJERO Evolution Rally Raid Car 2003
Mitsubishi PAJERO Rally Raid Car 1985
Mitsubishi STARION 4WD Rally Car 1984
MUGEN S2000 2000
NIKE One 2022
NISMO 270R 1994
NISMO 400R 1996
NISMO Fairlady Z S-tune concept by GRANTURISMO (Z33) 2002
NISMO Fairlady Z Z-tune (Z33) 2003
NISMO GT-R LM Road Going Version 1995
NISMO Skyline GT-R R-tune (R34) 1999
NISMO Skyline GT-R S-tune (R32) 2000
Nissan 240RS Rally Car 1985
Nissan 240SX 1996
Nissan 240SX (S14) 1996
Nissan 240ZG (HS30) 1971
Nissan 300ZX 2by2 (Z32) 1998
Nissan 300ZX 2seater (Z32) 1989
Nissan 300ZX 2seater (Z32) 1998
Nissan 350Z (Z33) 2003
Nissan 350Z Concept LM Race Car
Nissan 350Z Gran Turismo 4 Limited Edition (Z33) 2005
Nissan 350Z Roadster (Z33) 2003
Nissan Be-1 1987
Nissan BLUEBIRD 1600 Deluxe (510) 1969
Nissan BLUEBIRD Hardtop 1800SSS (910) 1979
Nissan BLUEBIRD Rally Car (510) 1969
Nissan CALSONIC SKYLINE (JGTC) 2000
Nissan CALSONIC SKYLINE GT-R Race Car 1993
Nissan CUBE EX (FF/CVT) 2002
Nissan CUBE X 1998
Nissan C-WEST RAZO SILVIA (JGTC) 2001
Nissan EXA CANOPY L.A.Version Type S (N13) 1988
Nissan Fairlady 2000 (SR311) 1968
Nissan Fairlady Z 280Z-L 2seater (S130) 1978
Nissan Fairlady Z 300ZX (Z31) 1983
Nissan Fairlady Z Version ST (Z33) Option Wheel 2002
Nissan FALKEN? GT-R Race Car 2004
Nissan GRAN TURISMO SKYLINE GT-R 2001
Nissan GRAN TURISMO SKYLINE GT-R (PaceCar) 2001
Nissan GT-R Concept (TokyoShow'01) 2001
Nissan GT-R Concept LM Race Car
Nissan LOCTITE ZEXEL GT-R (JGTC) 2000
Nissan March G# 1999
Nissan MICRA 2003
Nissan mm-R Cup Car 2001
Nissan MOTUL PITWORK Z (JGTC) 2004
Nissan OPTION Stream Z 2004
Nissan PAO 1989
Nissan PENNZOIL Nismo GT-R (JGTC) 1999
Nissan PENNZOIL ZEXEL GT-R (JGTC) 2001
Nissan PRIMERA 20V 2001
Nissan R390 GT1 Race Car 1998
Nissan R390 GT1 Road Car 1998
Nissan R89C Race Car 1989
Nissan R92CP Race Car 1992
Nissan SILVIA (CSP311) 1965
Nissan SILVIA 240RS (S100) 1983
Nissan SILVIA K's (S13) 1988
Nissan SILVIA K's (S13) 1991
Nissan SILVIA K's AERO (S14) 1993
Nissan SILVIA Q's (S13) 1988
Nissan SILVIA Q's (S13) 1991
Nissan SILVIA Q's AERO (S14) 1993
Nissan SILVIA Q's AERO (S14) 1996
Nissan SILVIA Spec R AERO (S15) 1999
Nissan SILVIA Spec S AERO (S15) 1999
Nissan SILVIA Varietta (S15) 2000
Nissan SKYLINE 1500Deluxe (S50D-1) 1963
Nissan SKYLINE 2000GT-B (S54A) 1967
Nissan SKYLINE 2000GT-R (KPGC110) 1973
Nissan SKYLINE GT-R (R32) 1989
Nissan SKYLINE GT-R (R32) 1991
Nissan SKYLINE GT-R (R33) 1995
Nissan SKYLINE GT-R (R33) 1996
Nissan SKYLINE GT-R (R33) 1997
Nissan SKYLINE GT-R (R34) 1999
Nissan SKYLINE GT-R (R34) 2000
Nissan SKYLINE GT-R M-spec (R34) 2001
Nissan SKYLINE GT-R M-spec Nur (R34) 2002
Nissan SKYLINE GT-R N1 (R32) 1991
Nissan SKYLINE GT-R N1 (R33) 1995
Nissan SKYLINE GT-R Special Color Midnight Purple II (R34) 1999
Nissan SKYLINE GT-R Special Color Midnight Purple III (R34) 2000
Nissan SKYLINE GT-R Vspec (R32) 1993
Nissan SKYLINE GT-R Vspec (R33) 1995
Nissan SKYLINE GT-R Vspec (R33) 1996
Nissan SKYLINE GT-R Vspec (R33) 1997
Nissan SKYLINE GT-R V-spec (R34) 1999
Nissan SKYLINE GT-R Vspec II (R32) 1994
Nissan SKYLINE GT-R V-spec II (R34) 2000
Nissan SKYLINE GT-R V-spec II N1 (R34) 2000
Nissan SKYLINE GT-R V-spec II Nur (R34) 2002
Nissan SKYLINE GT-R Vspec LM Limited (R33) 1996
Nissan SKYLINE GT-R Vspec N1 (R32) 1993
Nissan SKYLINE GT-R V-spec N1 (R34) 1999
Nissan SKYLINE GTS25 Type S (R32) 1991
Nissan SKYLINE GTS-R (R31) 1987
Nissan SKYLINE GTS-t Type M (R32) 1989
Nissan SKYLINE GTS-t Type M (R32) 1991
Nissan SKYLINE Hard Top 2000 RS-X Turbo C (R30) 1984
Nissan SKYLINE Hard Top 2000 Turbo RS (R30) 1983
Nissan SKYLINE Hard Top 2000GT-R (KPGC10) 1970
Nissan SKYLINE SEDAN 300GT 2001
Nissan SKYLINE SEDAN 350GT-8 2002
Nissan SKYLINE Sport Coupe (BLRA-3) 1962
Nissan STAGEA 25t RS FOUR S 1998
Nissan STAGEA 260RS AutechVersion 1998
Nissan XANAVI HIROTO GT-R (JGTC) 2001
Nissan XANAVI NISMO GT-R (JGTC) 2003
Opel Astra Touring Car (Opel Team Phoenix) 2000
Opel Calibra Touring Car 1995
Opel Corsa Comfort 1.4 2001
Opel Speedster 2000
Opel Speedster Turbo 2000
Opel Tigra 1.6i 1999
Opel Vectra 3.2 V6 2003
Opera Performance 350Z 2004
Opera Performance S2000 2004
Pagani Zonda C12 2000
Pagani Zonda C12S 2000
Pagani Zonda C12S 7.3 2002
Pagani Zonda LM Race Car
Panoz Esperante GTR-1 Race Car 1998
Pescarolo Pescarolo Courage C60/Peugeot Race Car 2003
Pescarolo PlayStation Pescarolo C60/Judd Race Car 2004
Peugeot 106 Rallye 2003
Peugeot 106 S16 2003
Peugeot 205 Turbo 16 1985
Peugeot 205 Turbo 16 Evolution 2 Rally Car 1986
Peugeot 205 Turbo 16 Rally Car 1985
Peugeot 206 Rally Car 1999
Peugeot 206 RC 2003
Peugeot 206 S16 1999
Peugeot 206cc 2001
Peugeot 307 XSi 2004
Peugeot 406 3.0 V6 Coupe 1998
Peugeot 905 Race Car 1992
Plymouth Cuda 440 Six Pack 1971
Plymouth Super Bird 1970
Polyphony Digital Formula Gran Turismo
Pontiac GTO 5.7 Coupe 2004
Pontiac Solstice Coupe Concept 2002
Pontiac Sunfire GXP Concept 2002
Pontiac Tempest Le Mans GTO 1964
Pontiac Vibe GT 2003
Proto Motors SPIRRA 4.6 V8 2004
RE Amemiya AMEMIYA ASPARADRINK RX7 (JGTC) 2004
Renault 5 Maxi Turbo Rally Car 1985
Renault 5 Turbo 1980
Renault AVANTIME 2002
Renault Clio Renault Sport 2.0 16V 2002
Renault Clio Renault Sport Trophy V6 24V Race Car 2000
Renault Clio Renault Sport V6 24V 2000
Renault Clio Renault Sport V6 Phase 2 2003
Renault Megane 2.0 16V 2003
Renault Megane 2.0 IDE Coupe 2000
RUF 3400S 2000
RUF BTR 1986
RUF CTR "Yellow Bird" 1987
RUF CTR2 1996
RUF RGT 2000
Saleen S7 2002
SCION xA 2003
SCION xB 2003
Seat Ibiza Cupra 2004
Shelby Cobra 427 1965
Shelby Mustang G.T. 350R 1965
Shelby Series 1 Super Charged 2003
Spoon CIVIC TYPE R (EK) 2000
Spoon Fit Race Car 2003
Spoon INTEGRA TYPE R (DC2) 1999
Spoon S2000 2000
Spoon S2000 Race Car 2000
Spyker C8 Laviolette 2001
Subaru CUSCO SUBARU ADVAN IMPREZA (JGTC) 2003
Subaru IMPREZA Coupe WRXtypeR STi Version VI (GC) 1999
Subaru IMPREZA Premium Sport Coupe 22B-STi Version (GC) 1998
Subaru IMPREZA Rally Car 1999
Subaru IMPREZA Rally Car 2001
Subaru IMPREZA Rally Car 2003
Subaru IMPREZA Rally Car Prototype 2001
Subaru IMPREZA Sedan WRX STi (GC) 1994
Subaru IMPREZA Sedan WRX STi (GD, Type-II) 2002
Subaru IMPREZA Sedan WRX STi spec C (GD, Type-II) 2004
Subaru IMPREZA Sedan WRX STi Version (GD, Type-I) 2000
Subaru IMPREZA Sedan WRX STi Version II (GC) 1995
Subaru IMPREZA Sedan WRX STi Version III (GC) 1996
Subaru IMPREZA Sedan WRX STi Version IV (GC) 1997
Subaru IMPREZA Sedan WRX STi Version V (GC) 1998
Subaru IMPREZA Sedan WRX STi Version VI (GC) 1999
Subaru IMPREZA Sport Wagon STi (GG, Type-I) 2000
Subaru IMPREZA Sport Wagon WRX STi Version VI (GF) 1999
Subaru IMPREZA Super Touring Car
Subaru IMPREZA WRX STi Prodrive Style (GD, Type-I) 2001
Subaru LEGACY B4 2.0GT (4th) 2003
Subaru LEGACY B4 2.0GT specB (4th) 2003
Subaru LEGACY B4 3.0R (4th) 2003
Subaru LEGACY B4 Blitzen (3rd) 2000
Subaru LEGACY B4 RSK (3rd) 1998
Subaru LEGACY Touring Wagon 2.0GT (4th) 2003
Subaru LEGACY Touring Wagon 2.0GT specB (4th) 2003
Subaru LEGACY Touring Wagon 3.0R (4th) 2003
Subaru LEGACY Touring Wagon GT-B (2nd) 1996
Subaru SUBARU 360 1958
Suzuki ALTO LAPIN Turbo 2002
Suzuki ALTO WORKS RS-Z 1997
Suzuki ALTO WORKS SUZUKI SPORT LIMITED 1997
Suzuki Cappuccino (EA11R) 1991
Suzuki Cappuccino (EA21R) 1995
Suzuki CONCEPT-S2 2003
Suzuki ESCUDO Dirt Trial Car 1998
Suzuki GSX-R/4 2001
Suzuki Kei WORKS 2002
Suzuki MR Wagon Sport 2004
Suzuki WAGON R RR 1998
Tommy kaira ZZII 2000
Tommy kaira ZZ-S 2000
Tom's X540 CHASER 2000
Toyota 2000GT 1967
Toyota ALTEZZA Touring Car
Toyota au CERUMO Supra (JGTC) 2001
Toyota CALDINA GT-FOUR 2002
Toyota CARINA ED 2.0 X 4WS 1989
Toyota Castrol Tom's Supra (JGTC) 2000
Toyota Castrol Tom's Supra (JGTC) 2001
Toyota CELICA 1600GT (TA22) 1970
Toyota CELICA 2000GT-FOUR (ST165) 1986
Toyota CELICA 2000GT-R (ST162) 1986
Toyota CELICA GT-FOUR (ST205) 1998
Toyota CELICA GT-FOUR Rally Car (ST185) 1995
Toyota CELICA GT-FOUR Rally Car (ST205) 1995
Toyota CELICA GT-FOUR RC (ST185) 1991
Toyota CELICA GT-R (ST183, 4WS) 1991
Toyota CELICA SS-II (ST202) 1997
Toyota CELICA SS-II (ZZT231) 1999
Toyota CELICA XX 2800GT 1981
Toyota COROLLA LEVIN BZ-R 1998
Toyota COROLLA LEVIN GT-APEX (AE86) 1983
Toyota COROLLA Rally Car 1998
Toyota COROLLA RUNX Z AEROTOURER 2002
Toyota DENSO SARD SUPRA GT (JGTC) 2000
Toyota GT-ONE Race Car (TS020) 1999
Toyota MINOLTA Toyota 88C-V Race Car 1989
Toyota Motor Triathlon Race Car 2004
Toyota MR2 1600 G 1986
Toyota MR2 1600 G-Limited Super Charger 1986
Toyota MR2 G-Limited 1997
Toyota MR2 GT-S 1997
Toyota MR2 Spyder 1999
Toyota MR2 Spyder (6-speed sequential manual transmission) 2002
Toyota PRIUS G (J) 2002
Toyota PRIUS G Touring Selection (J) 2003
Toyota RSC 2001
Toyota RSC Rally Raid Car
Toyota SERA 1992
Toyota SPORTS 800 1965
Toyota SPRINTER TRUENO BZ-R 1998
Toyota SPRINTER TRUENO GT-APEX (AE86) 1983
Toyota SPRINTER TRUENO GT-APEX (AE86) Shuichi Shigeno 2000
Toyota STARLET Glanza V 1997
Toyota SUPERAUTOBACS APEX MR-S (JGTC) 2000
Toyota SUPRA 2.5GT Twin Turbo R 1990
Toyota SUPRA 3.0GT Turbo A 1988
Toyota SUPRA RZ 1997
Toyota SUPRA SZ-R 1997
Toyota Tacoma X-Runner 2004
Toyota Toyota 7 Race Car 1970
Toyota VITZ F 1999
Toyota VITZ RS 1.5 2000
Toyota VITZ RS Turbo 2002
Toyota VITZ U Euro Sport Edition 2000
Toyota VOLTZ S 2002
Toyota WEDSSPORT CELICA (JGTC) 2003
Toyota WiLL VS 2001
Toyota WOODONE Tom's Supra (JGTC) 2003
Toyota Modellista CELICA TRD Sports M (ZZT231) 2000
TRIAL CELICA SS-II (ZZT231) 2003
Triumph Spitfire 1500 1974
TVR Cerbera Speed 12 2000
TVR Cerbera Speed Six 1997
TVR Griffith 500 1994
TVR T350C 2003
TVR Tamora 2002
TVR Tuscan Speed 6 2000
TVR V8S 1991
Volkswagen Beetle 1100 Standard (Type-11) 1949
Volkswagen Bora V6 4MOTION 2001
Volkswagen Golf I GTI 1976
Volkswagen Golf IV GTI 2001
Volkswagen Golf IV R32 2003
Volkswagen Golf V GTI 2005
Volkswagen Karmann Ghia Coupe (Type-1) 1968
Volkswagen Lupo Cup Car 2000
Volkswagen Lupo GTI 2001
Volkswagen Lupo GTI Cup Car (J) 2003
Volkswagen Lupo1.4 2002
Volkswagen New Beetle 2.0 2000
Volkswagen New Beetle Cup Car 2000
Volkswagen New Beetle RSi 2000
Volkswagen Polo GTI 2001
Volkswagen W12 Nardo Concept 2001
Volvo 240 GLT Estate 1988
Volvo S60 T 5 Sport 2003
SILEIGHTY 1998`;

const cookies = document.cookie.split('; ');

const cars = carList.split('\n');

for(let i = 0; i < cars.length; i++) {
  const div = document.createElement('div');

  div.classList = 'cars';
  div.textContent = cars[i];
  div.dataset.owned = 'nope';
  div.addEventListener('click', function(e) {
    owned(e);
    saveToCookies(i);
  });

  $('#cars').appendChild(div);
}

function loadCookies() {

  for(let i = 0; i < cars.length; i++) {
    for(let j = 0; j < cookies.length; j++) {
      if(i.toString() === cookies[j].substring(0, cookies[j].length - 1)) 
        $('#cars').childNodes[i].dataset.owned = 'yep';
    }
  }
  fillPopUp();
}

loadCookies();