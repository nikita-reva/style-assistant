colorsContainer = document.querySelector('.colors-container');
gradientsContainer = document.querySelector('.gradients-container');
fontsContainer = document.querySelector('.fonts-container');

colors = [
  '#c8c4b9',
  '#b0292c',
  '#48426d',
  '#f0c38e',
  '#9bc4f1',
  '#252339',
  '#315468',
  '#12525e',
  '#55717d',
  '#1d1b28',
  '#0e0402',
  '#456289',
  '#a3c3d8',
  '#d0e2eb',
  '#80a4c0',
  '#cd4945',
  '#6b4341',
  '#d4c1d2',
  '#1a1c16',
  '#453b36',
  '#322773',
  '#2b3745',
  '#4e445c',
  '#8e8f89',
  '#efa822',
  '#e74c3c',
  '#03a9f4',
  '#e22e49',
  '#bec7d7',
  '#eff2f7',
  '#e1e6ec',
  '#06020f',
  '#00bcd4',
  '#c7eeff',
  '#03a9f4',
  '#05386b',
  '#389583',
  '#5cd694',
  '#8de4af',
  '#edf5e0',
  '#242582',
  '#563d67',
  '#f54f74',
  '#99728d',
  '#3e3eb3',
  '#e27d5f',
  '#85cdca',
  '#eba87c',
  '#d97694',
  '#40b3a2',
  '#5d5c61',
  '#938e9f',
  '#7395ae',
  '#557a95',
  '#b0a295',
  '#0b0c10',
  '#202833',
  '#c5c6c8',
  '#66fcf1',
  '#46a29f',
  '#5d001d',
  '#e3e2de',
  '#e3afbc',
  '#981750',
  '#ee4c7d',
  '#d79922',
  '#efe1ba',
  '#ed3b17',
  '#4056a1',
  '#c5cbe3',
  '#fc4444',
  '#40eee5',
  '#55bdca',
  '#96caef',
  '#cafafe',
  '#6568f4',
  '#3acbf7',
  '#425c5a',
  '#a2bfbd',
  '#ffcea2',
  '#418dff',
  '#35cda7',
  '#1f1f1f',
  '#8d68fa',
  '#ee7d76',
  '#071d47',
  '#4c79b5',
  '#bba095',
  '#ce7f48',
];
fonts = [
  'Poppins',
  'Muli',
  'Roboto',
  'Pirata One',
  'Heebo',
  'Montserrat',
  'Lato',
  'Squada One',
  'Oswald',
  'Bodoni Moda',
  'Merriweather',
  'Merriweather Sans',
  'Ubuntu',
  'Teko',
  'Anton',
  'Inter',
  'Hind',
  'Dosis',
  'Dancing Script',
  'Fjalla One',
  'Varela Round',
  'Comfortaa',
  'Pacifico',
  'Arvo',
  'Lobster',
  'Indie Flower',
  'Abril Fatface',
  'Fredoka One',
  'Bree Serif',
  'Signica',
  'Domine',
  'Exo',
  'Righteous',
  'Courgette',
  'Russo One',
  'Kaushan Script',
  'Archivo Black',
  'Nunito',
  'Titillium Web',
  'Raleway',
  'Open Sans',
];

gradients = [
  'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))',
  'radial-gradient(circle at top right, rgb(36, 9, 119) 0%, rgb(36, 9, 119) 48%,rgb(72, 7, 149) 48%, rgb(72, 7, 149) 53%,rgb(109, 5, 178) 53%, rgb(109, 5, 178) 56%,rgb(145, 2, 208) 56%, rgb(145, 2, 208) 69%,rgb(181, 0, 237) 69%, rgb(181, 0, 237) 100%)',
  'repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))',
  'repeating-linear-gradient(45deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 16px,transparent 16px, transparent 32px,rgba(0,0,0,0.08) 32px, rgba(0,0,0,0.08) 48px,rgba(0,0,0,0.14) 48px, rgba(0,0,0,0.14) 64px,rgba(0,0,0,0.05) 64px, rgba(0,0,0,0.05) 80px,transparent 80px, transparent 96px,rgba(0,0,0,0.21) 96px, rgba(0,0,0,0.21) 112px,rgba(0,0,0,0.18) 112px, rgba(0,0,0,0.18) 128px,rgba(0,0,0,0.21) 128px, rgba(0,0,0,0.21) 144px,rgba(0,0,0,0.29) 144px, rgba(0,0,0,0.29) 160px,rgba(0,0,0,0.08) 160px, rgba(0,0,0,0.08) 176px,rgba(0,0,0,0.3) 176px, rgba(0,0,0,0.3) 192px,rgba(0,0,0,0.23) 192px, rgba(0,0,0,0.23) 208px),repeating-linear-gradient(135deg, transparent 0px, transparent 3px,rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px,rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 9px,rgba(0,0,0,0.09) 9px, rgba(0,0,0,0.09) 12px,rgba(0,0,0,0.08) 12px, rgba(0,0,0,0.08) 15px,rgba(0,0,0,0.1) 15px, rgba(0,0,0,0.1) 18px,rgba(0,0,0,0.1) 18px, rgba(0,0,0,0.1) 21px,rgba(0,0,0,0.04) 21px, rgba(0,0,0,0.04) 24px,transparent 24px, transparent 27px,rgba(0,0,0,0.03) 27px, rgba(0,0,0,0.03) 30px,rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 33px,rgba(0,0,0,0.01) 33px, rgba(0,0,0,0.01) 36px,rgba(0,0,0,0.1) 36px, rgba(0,0,0,0.1) 39px,rgba(0,0,0,0.06) 39px, rgba(0,0,0,0.06) 42px,transparent 42px, transparent 45px,rgba(0,0,0,0.03) 45px, rgba(0,0,0,0.03) 48px,rgba(0,0,0,0.05) 48px, rgba(0,0,0,0.05) 51px,rgba(0,0,0,0.03) 51px, rgba(0,0,0,0.03) 54px),repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 14px,transparent 14px, transparent 28px,rgba(0,0,0,0.3) 28px, rgba(0,0,0,0.3) 42px,rgba(0,0,0,0.25) 42px, rgba(0,0,0,0.25) 56px,rgba(0,0,0,0.07) 56px, rgba(0,0,0,0.07) 70px,rgba(0,0,0,0.23) 70px, rgba(0,0,0,0.23) 84px,rgba(0,0,0,0.02) 84px, rgba(0,0,0,0.02) 98px,rgba(0,0,0,0.04) 98px, rgba(0,0,0,0.04) 112px,rgba(0,0,0,0.07) 112px, rgba(0,0,0,0.07) 126px,rgba(0,0,0,0.21) 126px, rgba(0,0,0,0.21) 140px,rgba(0,0,0,0.15) 140px, rgba(0,0,0,0.15) 154px,transparent 154px, transparent 168px,rgba(0,0,0,0.12) 168px, rgba(0,0,0,0.12) 182px,rgba(0,0,0,0.13) 182px, rgba(0,0,0,0.13) 196px,rgba(0,0,0,0.27) 196px, rgba(0,0,0,0.27) 210px),repeating-linear-gradient(0deg, rgba(0,0,0,0.17) 0px, rgba(0,0,0,0.17) 14px,rgba(0,0,0,0.26) 14px, rgba(0,0,0,0.26) 28px,rgba(0,0,0,0.06) 28px, rgba(0,0,0,0.06) 42px,rgba(0,0,0,0.14) 42px, rgba(0,0,0,0.14) 56px,transparent 56px, transparent 70px,rgba(0,0,0,0.22) 70px, rgba(0,0,0,0.22) 84px,rgba(0,0,0,0.1) 84px, rgba(0,0,0,0.1) 98px,transparent 98px, transparent 112px,rgba(0,0,0,0.15) 112px, rgba(0,0,0,0.15) 126px,transparent 126px, transparent 140px,rgba(0,0,0,0.03) 140px, rgba(0,0,0,0.03) 154px,rgba(0,0,0,0.03) 154px, rgba(0,0,0,0.03) 168px,rgba(0,0,0,0.06) 168px, rgba(0,0,0,0.06) 182px,rgba(0,0,0,0.17) 182px, rgba(0,0,0,0.17) 196px,rgba(0,0,0,0.2) 196px, rgba(0,0,0,0.2) 210px),linear-gradient(135deg, rgb(252, 16, 76),rgb(244, 3, 176))',
  'radial-gradient(circle at 40% 91%, rgba(251, 251, 251,0.04) 0%, rgba(251, 251, 251,0.04) 50%,rgba(229, 229, 229,0.04) 50%, rgba(229, 229, 229,0.04) 100%),radial-gradient(circle at 66% 97%, rgba(36, 36, 36,0.04) 0%, rgba(36, 36, 36,0.04) 50%,rgba(46, 46, 46,0.04) 50%, rgba(46, 46, 46,0.04) 100%),radial-gradient(circle at 86% 7%, rgba(40, 40, 40,0.04) 0%, rgba(40, 40, 40,0.04) 50%,rgba(200, 200, 200,0.04) 50%, rgba(200, 200, 200,0.04) 100%),radial-gradient(circle at 15% 16%, rgba(99, 99, 99,0.04) 0%, rgba(99, 99, 99,0.04) 50%,rgba(45, 45, 45,0.04) 50%, rgba(45, 45, 45,0.04) 100%),radial-gradient(circle at 75% 99%, rgba(243, 243, 243,0.04) 0%, rgba(243, 243, 243,0.04) 50%,rgba(37, 37, 37,0.04) 50%, rgba(37, 37, 37,0.04) 100%),linear-gradient(90deg, rgb(34, 222, 237),rgb(135, 89, 215))',
  'repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3))',
  'linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, rgb(9, 201, 186),rgb(18, 131, 221))',
  'linear-gradient(330deg, rgba(225, 225, 225, 0.05) 0%, rgba(225, 225, 225, 0.05) 33.333%,rgba(114, 114, 114, 0.05) 33.333%, rgba(114, 114, 114, 0.05) 66.666%,rgba(52, 52, 52, 0.05) 66.666%, rgba(52, 52, 52, 0.05) 99.999%),linear-gradient(66deg, rgba(181, 181, 181, 0.05) 0%, rgba(181, 181, 181, 0.05) 33.333%,rgba(27, 27, 27, 0.05) 33.333%, rgba(27, 27, 27, 0.05) 66.666%,rgba(251, 251, 251, 0.05) 66.666%, rgba(251, 251, 251, 0.05) 99.999%),linear-gradient(225deg, rgba(98, 98, 98, 0.05) 0%, rgba(98, 98, 98, 0.05) 33.333%,rgba(222, 222, 222, 0.05) 33.333%, rgba(222, 222, 222, 0.05) 66.666%,rgba(228, 228, 228, 0.05) 66.666%, rgba(228, 228, 228, 0.05) 99.999%),linear-gradient(90deg, rgb(28, 20, 63),rgb(40, 160, 253))',
  'linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128))',
  'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
  'linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff)',
  'linear-gradient(246deg, rgba(234, 234, 234, 0.04) 0%, rgba(234, 234, 234, 0.04) 33.3%,rgba(69, 69, 69, 0.04) 33.3%, rgba(69, 69, 69, 0.04) 66.6%,rgba(189, 189, 189, 0.04) 66.6%, rgba(189, 189, 189, 0.04) 99.89999999999999%),linear-gradient(81deg, rgba(126, 126, 126, 0.05) 0%, rgba(126, 126, 126, 0.05) 33.3%,rgba(237, 237, 237, 0.05) 33.3%, rgba(237, 237, 237, 0.05) 66.6%,rgba(74, 74, 74, 0.05) 66.6%, rgba(74, 74, 74, 0.05) 99.89999999999999%),linear-gradient(14deg, rgba(3, 3, 3, 0.08) 0%, rgba(3, 3, 3, 0.08) 33.3%,rgba(156, 156, 156, 0.08) 33.3%, rgba(156, 156, 156, 0.08) 66.6%,rgba(199, 199, 199, 0.08) 66.6%, rgba(199, 199, 199, 0.08) 99.89999999999999%),linear-gradient(323deg, rgba(82, 82, 82, 0.06) 0%, rgba(82, 82, 82, 0.06) 33.3%,rgba(179, 179, 179, 0.06) 33.3%, rgba(179, 179, 179, 0.06) 66.6%,rgba(212, 212, 212, 0.06) 66.6%, rgba(212, 212, 212, 0.06) 99.89999999999999%),linear-gradient(32deg, rgba(70, 70, 70, 0.02) 0%, rgba(70, 70, 70, 0.02) 33.3%,rgba(166, 166, 166, 0.02) 33.3%, rgba(166, 166, 166, 0.02) 66.6%,rgba(53, 53, 53, 0.02) 66.6%, rgba(53, 53, 53, 0.02) 99.89999999999999%),linear-gradient(38deg, rgba(129, 129, 129, 0.09) 0%, rgba(129, 129, 129, 0.09) 33.3%,rgba(38, 38, 38, 0.09) 33.3%, rgba(38, 38, 38, 0.09) 66.6%,rgba(153, 153, 153, 0.09) 66.6%, rgba(153, 153, 153, 0.09) 99.89999999999999%),linear-gradient(63deg, rgba(51, 51, 51, 0.02) 0%, rgba(51, 51, 51, 0.02) 33.3%,rgba(12, 12, 12, 0.02) 33.3%, rgba(12, 12, 12, 0.02) 66.6%,rgba(158, 158, 158, 0.02) 66.6%, rgba(158, 158, 158, 0.02) 99.89999999999999%),linear-gradient(227deg, rgba(63, 63, 63, 0.03) 0%, rgba(63, 63, 63, 0.03) 33.3%,rgba(9, 9, 9, 0.03) 33.3%, rgba(9, 9, 9, 0.03) 66.6%,rgba(85, 85, 85, 0.03) 66.6%, rgba(85, 85, 85, 0.03) 99.89999999999999%),linear-gradient(103deg, rgba(247, 247, 247, 0.07) 0%, rgba(247, 247, 247, 0.07) 33.3%,rgba(93, 93, 93, 0.07) 33.3%, rgba(93, 93, 93, 0.07) 66.6%,rgba(208, 208, 208, 0.07) 66.6%, rgba(208, 208, 208, 0.07) 99%),linear-gradient(0deg, #0b91d7,#6efc29)',
  'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
  'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)',
  'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
  'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
  'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
  'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
  'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)',
  'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',
  'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
  'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
  'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  'linear-gradient(161deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%,rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%),linear-gradient(59deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%,rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%),linear-gradient(286deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%,rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%),linear-gradient(123deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%,rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%),linear-gradient(170deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%,rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%),linear-gradient(210deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%,rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(90deg, rgb(249, 17, 190),rgb(100, 28, 213))',
  'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
  'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
  'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
];

colors.forEach((color) => {
  createColorELement(color);
});

gradients.forEach((gradient) => {
  createGradientELement(gradient);
});

fonts.forEach((font) => {
  createFontELement(font);
});

function createColorELement(color) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  colorBox.innerHTML = `<button class="copy"></button>`;
  colorBox.style.backgroundColor = color;

  colorBox.onclick = () => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', color);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');

    inputElement.remove();
  };

  colorsContainer.appendChild(colorBox);
}

function createGradientELement(gradient) {
  const gradientBox = document.createElement('div');
  gradientBox.classList.add('gradient-box');
  gradientBox.innerHTML = `<button class="copy"></button>`;
  gradientBox.style.backgroundImage = gradient;

  gradientBox.onclick = () => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', `background-image: ${gradient};`);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');

    inputElement.remove();
  };

  gradientsContainer.appendChild(gradientBox);
}

function createFontELement(font) {
  const fontBox = document.createElement('div');
  fontBox.classList.add('font-box');
  fontBox.innerHTML = `
		<p style="font-family: inherit">This font is called '${font}'.</>
		<button class="copy"></button>
		`;
  fontBox.style.fontFamily = `'${font}'`;

  fontBox.onclick = () => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute(
      'value',
      `@import url('https://fonts.googleapis.com/css2?family=${font.replace(
        ' ',
        '+'
      )}:ital,wght@0,400;1,400&display=swap');`
    );
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');

    inputElement.remove();
  };

  fontsContainer.appendChild(fontBox);
}
