/**
 * 최치원 오언시 눈도장 한시 암기 - 전체 시 데이터베이스
 * 시를 추가하려면 아래 ALL_POEMS 객체에 새로운 키(예: 'bongun' 등)와 시 데이터를 추가하기만 하면 됩니다.
 * UI의 시 선택 서랍(Drawer) 및 상단 칩, 퀴즈, 챈트, 이야기가 자동으로 생성·연동됩니다.
 */
window.ALL_POEMS = {
      wooheung: {
        id: "wooheung",
        title: "우흥 (寓興)",
        sealChar: "寓",
        subtitle: "오언율시(五言律詩) · 시각 연상과 리듬 챈트",
        storyHeader: "최치원 선생과 <우흥(寓興)> 이야기",
        storySubheader: "이익의 문을 잠그고 맑은 마음을 지키는 올곧은 지혜",
        storyBackground: "<strong>'붙일 우(寓)'</strong>에 <strong>'흥겨울 흥(興)'</strong>을 써서, 마음속 깊은 생각이나 감흥을 사물이나 풍경에 빗대어 읊은 시를 뜻해요. 직접적으로 훈계하는 대신, <strong>바다 깊이 뛰어드는 진주잡이</strong>나 <strong>단술에 취한 세상 사람들</strong>의 모습을 생생하게 보여줌으로써 스스로 깨닫게 해준답니다.",
        storyLesson: "1. <strong>문 걸어 잠그기:</strong> 나쁜 유혹과 해로운 욕심 앞에서는 단단히 문빗장을 걸어 잠그고 내 몸을 아껴요.<br>2. <strong>진주잡이의 위험:</strong> 번쩍이는 보물을 얻으려다 가장 소중한 생명을 잃으면 아무 소용이 없어요.<br>3. <strong>마음의 때 씻기:</strong> 예쁜 옷에 묻은 먼지는 털면 되지만, 마음에 묻은 욕심의 때는 씻어내기 힘드니 애초에 맑음을 지켜요.<br>4. <strong>맑은 차의 향기:</strong> 순간의 달콤한 유혹(단술)에 현혹되지 않고, 은은하고 맑은 차처럼 담백하고 씩씩하게 자라나요.",
        steps: [
          {
            step: 1,
            title: "제1연 (수련 首聯)",
            subtitle: "욕심의 문을 잠그고 부모님께 받은 몸을 온전히 지키다",
            keyword: "문 잠그기 & 몸 지키기",
            image: "assets/images/scene1.jpg",
            soundLine: "원언경리문 불사손유체",
            line1: {
              hanja: "願言扃利門",
              sound: "원언경리문",
              words: [
                { char: "願", sound: "원", hun: "원할 원", desc: "진심으로 바라건대, 소원하건대", role: "간절한 소망을 담은 첫 글자" },
                { char: "言", sound: "언", hun: "말씀 언", desc: "발어사 (말을 꺼내며 마음을 가다듬는 어조사)", role: "시의 운치를 돋우는 말" },
                { char: "扃", sound: "경", hun: "빗장 걸 경", desc: "빗장을 단단히 닫아 걸다", role: "유혹을 차단하는 굳은 결심" },
                { char: "利", sound: "리", hun: "이로울 리", desc: "눈앞의 이익, 사리사욕과 유혹", role: "멀리해야 할 탐욕" },
                { char: "門", sound: "문", hun: "문 문", desc: "세상 유혹으로 통하는 대문", role: "욕심의 세계로 들어가는 문" }
              ],
              meaning: "바라건대 이익의 문을 단단히 걸어 잠그고,"
            },
            line2: {
              hanja: "不使損遺體",
              sound: "불사손유체",
              words: [
                { char: "不", sound: "불", hun: "아니 불", desc: "결코 ~하지 않다, 못하게 하다", role: "강한 부정과 다짐" },
                { char: "使", sound: "사", hun: "하여금 사", desc: "~로 하여금 ~하게 만들다", role: "원인과 결과를 잇는 말" },
                { char: "損", sound: "손", hun: "덜 손 / 상할 손", desc: "상처 입거나 다치게 하다", role: "몸과 마음의 훼손" },
                { char: "遺", sound: "유", hun: "끼칠 유 / 남길 유", desc: "부모님께서 물려주신, 전해주신", role: "부모님의 은혜" },
                { char: "體", sound: "체", hun: "몸 체", desc: "소중한 몸과 생명 (신체)", role: "효도의 시작인 소중한 몸" }
              ],
              meaning: "부모님께 물려받은 소중한 몸을 다치지 않게 하리라."
            },
            fullMeaning: "바라건대 이익의 문을 걸어 잠그고, 부모님께 물려받은 몸을 다치지 않게 하리라.",
            storyExplanation: "<strong>🔑 눈도장 장면 연상 포인트:</strong> 튼튼한 나무 대문에 묵직한 빗장이 걸려 있고, 마당의 화사한 매화나무 아래에서 도련님이 평화롭게 책을 읽고 있는 모습이에요! 욕심의 문을 잠그면 부모님이 주신 몸과 마음을 평화롭게 지킬 수 있답니다.",
            prompt: "Cozy, warm traditional East Asian ink-wash illustration, storybook style. A peaceful walled courtyard with a firmly latched heavy wooden gate. A young Korean scholar boy sitting safely under a blooming plum tree reading a book with a calm smile. Soft muted colors, textured paper effect, spacious empty sky at the top for text overlay --ar 16:9"
          },
          {
            step: 2,
            title: "제2연 (함련 頷聯)",
            subtitle: "위태로운 바닷속으로 진주를 캐러 뛰어드는 어리석음",
            keyword: "위태로운 진주잡이",
            image: "assets/images/scene2.jpg",
            soundLine: "쟁내탐주자 경생입해저",
            line1: {
              hanja: "爭奈探珠者",
              sound: "쟁내탐주자",
              words: [
                { char: "爭", sound: "쟁", hun: "어찌 쟁 / 다툴 쟁", desc: "어찌하여 (爭奈: 어찌하리오)", role: "안타까움을 나타내는 감탄사" },
                { char: "奈", sound: "내", hun: "어찌 내", desc: "어떻게 감당하려고", role: "걱정스러운 마음을 담은 말" },
                { char: "探", sound: "탐", hun: "찾을 탐", desc: "보물을 찾다, 캐내려 하다", role: "욕망을 좇아 탐색함" },
                { char: "珠", sound: "주", hun: "구슬 주", desc: "빛나는 보석, 값비싼 진주", role: "눈부신 재물의 상징" },
                { char: "者", sound: "자", hun: "놈 자 / 사람 자", desc: "사람들, ~하는 사람들", role: "욕심에 눈먼 이들" }
              ],
              meaning: "어찌하여 값비싼 진주를 캐려는 자들은,"
            },
            line2: {
              hanja: "輕生入海底",
              sound: "경생입해저",
              words: [
                { char: "輕", sound: "경", hun: "가벼울 경", desc: "가볍게 여기다, 하찮게 다루다", role: "목숨을 소홀히 함" },
                { char: "生", sound: "생", hun: "목숨 생 / 날 생", desc: "하나뿐인 소중한 생명", role: "무엇과도 바꿀 수 없는 목숨" },
                { char: "入", sound: "입", hun: "들 입", desc: "깊은 곳으로 들어가다", role: "위험 속으로 뛰어듦" },
                { char: "海", sound: "해", hun: "바다 해", desc: "거센 파도가 이는 바다", role: "위험천만한 세속의 험난함" },
                { char: "底", sound: "저", hun: "밑 저", desc: "깊고 어두운 바닥, 해저", role: "헤어나오기 힘든 위험" }
              ],
              meaning: "하나뿐인 목숨을 가볍게 여기고 깊은 바닷속으로 들어가는가."
            },
            fullMeaning: "어찌하여 진주를 캐려는 자들은, 목숨을 가볍게 여기고 깊은 바닷속으로 들어가는가.",
            storyExplanation: "<strong>🌊 눈도장 장면 연상 포인트:</strong> 거친 먹구름과 소용돌이치는 어두운 심해, 번쩍이는 조그만 진주를 줍겠다고 차가운 바다 밑바닥으로 헤엄쳐 들어가는 잠수부의 위태로운 모습이에요! 작은 보석(재물)을 탐내다 목숨을 잃는 안타까움을 떠올려 보세요.",
            prompt: "Cozy yet dramatic East Asian ink-wash illustration, warm storybook style. A deep, swirling dark blue ocean where a lone diver is swimming down toward a tiny glowing pearl on the dark seabed, risking danger. A small wooden boat braving rolling waves above. Atmospheric lighting, contrast between dark water and glowing pearl, spacious upper area for text --ar 16:9"
          },
          {
            step: 3,
            title: "제3연 (경련 頸聯)",
            subtitle: "화려한 벼슬옷의 먼지와 씻기 어려운 마음의 때",
            keyword: "옷의 먼지 & 마음의 때",
            image: "assets/images/scene3.jpg",
            soundLine: "신영진이염 심구수난세",
            line1: {
              hanja: "身榮塵易染",
              sound: "신영진이염",
              words: [
                { char: "身", sound: "신", hun: "몸 신", desc: "나의 몸과 신분", role: "외면의 껍데기" },
                { char: "榮", sound: "영", hun: "영화 영 / 꽃 영", desc: "화려한 부귀영화, 높은 벼슬", role: "눈부신 세상의 성공" },
                { char: "塵", sound: "진", hun: "티끌 진", desc: "세속의 흙먼지, 유혹의 때", role: "나도 모르게 묻는 오염" },
                { char: "易", sound: "이", hun: "쉬울 이", desc: "쉽게, 너무나도 간단히", role: "경계해야 할 취약함" },
                { char: "染", sound: "염", hun: "물들 염", desc: "얼룩지고 물들다", role: "순수함을 잃어버림" }
              ],
              meaning: "몸의 영화는 세속의 티끌에 물들기 쉽고,"
            },
            line2: {
              hanja: "心垢水難洗",
              sound: "심구수난세",
              words: [
                { char: "心", sound: "심", hun: "마음 심", desc: "티 없이 맑아야 할 마음", role: "가장 소중한 내면" },
                { char: "垢", sound: "구", hun: "때 구", desc: "욕심과 탐욕의 찌든 때", role: "씻기 힘든 영혼의 오점" },
                { char: "水", sound: "수", hun: "물 수", desc: "맑게 흐르는 시냇물", role: "깨끗한 겉의 정화" },
                { char: "難", sound: "난", hun: "어려울 난", desc: "참으로 어렵고 힘들다", role: "내면 정화의 어려움" },
                { char: "洗", sound: "세", hun: "씻을 세", desc: "말끔하게 씻어내다", role: "마음 닦기의 중요성" }
              ],
              meaning: "마음의 때는 맑은 물로도 씻어내기 어렵다네."
            },
            fullMeaning: "몸의 영화는 티끌에 물들기 쉽고, 마음의 때는 맑은 물로도 씻기 어렵다네.",
            storyExplanation: "<strong>💧 눈도장 장면 연상 포인트:</strong> 화려한 비단 벼슬옷을 입은 선비가 맑은 산골 계곡물 곁에 서서 자기 옷에 달라붙은 황금 먼지를 물끄러미 바라보는 장면이에요! 옷의 먼지는 물로 씻을 수 있지만 마음에 스며든 욕심은 맑은 물로도 씻기 어렵다는 점을 시각화했어요.",
            prompt: "Reflective, warm traditional East Asian storybook illustration. A young scholar dressed in a fine, colorful silk official robe standing beside a crystal-clear mountain stream. Visible golden dust specks cling to his fancy robe as he pauses, looking thoughtfully into the water with a reflective, serene expression. Subtle ink-wash textures, upper negative space for text --ar 16:9"
          },
          {
            step: 4,
            title: "제4연 (미련 尾聯)",
            subtitle: "맑은 차 한 잔의 담박함과 달콤한 유혹에 취한 세상",
            keyword: "맑은 차 & 달콤한 술",
            image: "assets/images/scene4.jpg",
            soundLine: "담박여수론 세로시감례",
            line1: {
              hanja: "澹泊與誰論",
              sound: "담박여수론",
              words: [
                { char: "澹", sound: "담", hun: "담박할 담 / 맑을 담", desc: "욕심 없이 맑고 담백함", role: "순수한 지혜의 경지" },
                { char: "泊", sound: "박", hun: "담박할 박 / 머무를 박", desc: "고요하고 깨끗함", role: "평온한 은은함" },
                { char: "與", sound: "여", hun: "더불어 여", desc: "~와 함께, 누구와", role: "친구를 찾는 마음" },
                { char: "誰", sound: "수", hun: "누구 수", desc: "그 누구와 더불어", role: "외롭고 그윽한 질문" },
                { char: "論", sound: "론", hun: "논할 론", desc: "깊은 뜻을 이야기하다", role: "진정한 교감" }
              ],
              meaning: "맑고 담백한 이 멋을 그 누구와 함께 논하겠는가,"
            },
            line2: {
              hanja: "世路嗜甘醴",
              sound: "세로시감례",
              words: [
                { char: "世", sound: "세", hun: "인간 세 / 세상 세", desc: "우리가 사는 세상", role: "세속의 무대" },
                { char: "路", sound: "로", hun: "길 로", desc: "세상 사람들, 인생길", role: "세속 사람들의 발길" },
                { char: "嗜", sound: "시", hun: "즐길 시 / 즐길 기", desc: "몹시 좋아하고 탐닉하다", role: "유혹에 빠져듦" },
                { char: "甘", sound: "감", hun: "달 감", desc: "입에만 달콤한", role: "겉만 유혹적인 쾌락" },
                { char: "醴", sound: "례", hun: "단술 례", desc: "어지럽게 취하는 단술", role: "세속의 달콤한 덫" }
              ],
              meaning: "세상 사람들은 오직 달콤한 단술만 좋아하는 것을."
            },
            fullMeaning: "맑고 담박함을 누구와 논하겠는가, 세상 사람들은 오직 달콤한 단술만 좋아하는 것을.",
            storyExplanation: "<strong>🍵 눈도장 장면 연상 포인트:</strong> 고요한 호숫가 정자에서 따뜻하고 맑은 녹차 한 잔을 들고 사색에 잠긴 현명한 선비와, 저 멀리 화려한 등불 아래 달콤한 술잔을 기울이며 흥청망청 소란을 피우는 마을 사람들의 대비예요! 달콤한 유혹에 흔들리지 않는 맑은 차의 향기를 기억하세요.",
            prompt: "Peaceful and contemplative East Asian ink-wash illustration, warm storybook style. A solitary scholar seated quietly in a quiet pavilion holding a simple, steaming cup of clear green tea. Across the misty lake in the far background, a hazy, glowing festive village with lively lanterns is softly visible. Peaceful contrast between quiet serenity and busy worldly desires, soft watercolor wash, clear sky area for text --ar 16:9"
          }
        ]
      },

      chokgyu: {
        id: "chokgyu",
        title: "촉규화 (蜀葵花)",
        sealChar: "葵",
        subtitle: "오언율시(五言律詩) · 거친 밭가에 피어난 외로운 접시꽃",
        storyHeader: "최치원 선생과 <촉규화(蜀葵花)> 이야기",
        storySubheader: "세상이 몰라주어도 나만의 빛과 향기를 피워내는 참된 자존감",
        storyBackground: "최치원 선생이 당나라 유학 시절, 뛰어난 학문과 문장력을 지녔음에도 신라 출신 외국인이라는 신분적 한계와 혼란한 정세 속에서 인정받지 못했던 자신의 처지를 거친 시골길에 외로이 핀 <strong>'접시꽃(촉규화)'</strong>에 빗대어 노래한 대표적인 자전적 한시예요.",
        storyLesson: "1. <strong>거친 환경 속에서도 피어나는 아름다움:</strong> 아무도 돌보지 않는 거친 밭둑이라도 스스로 아름다운 꽃을 피워 올려요.<br>2. <strong>묵묵한 품격과 향기:</strong> 장맛비가 그친 뒤 시원한 보리바람을 맞으며 은은한 향기를 잃지 않아요.<br>3. <strong>겉치레보다 진정한 가치:</strong> 화려한 수레를 탄 이들이 눈길을 주지 않아도, 자연의 벌과 나비와 벗하며 내면의 순수를 지켜요.<br>4. <strong>희망과 자존감:</strong> 세상에 홀로 남겨진 것처럼 외로울 때에도, 밤하늘의 샛별처럼 나만의 가치를 소중히 여겨요.",
        steps: [
          {
            step: 1,
            title: "제1연 (수련 首聯)",
            subtitle: "쓸쓸하고 거친 밭가에 피어난 탐스러운 접시꽃",
            keyword: "거친 밭가의 탐스러운 접시꽃",
            image: "assets/images/chokgyu1.jpg",
            soundLine: "적막황전측 번화압유지",
            line1: {
              hanja: "寂寞荒田側",
              sound: "적막황전측",
              words: [
                { char: "寂", sound: "적", hun: "고요할 적", desc: "사람 소리 없이 고요하고 쓸쓸함", role: "외딴곳의 고요함" },
                { char: "寞", sound: "막", hun: "쓸쓸할 막", desc: "적막하고 인적이 드묾", role: "외로운 정취" },
                { char: "荒", sound: "황", hun: "거칠 황", desc: "돌보는 이 없이 거칠고 황폐함", role: "누추하고 거친 환경" },
                { char: "田", sound: "전", hun: "밭 전", desc: "시골의 거친 밭", role: "화려한 정원이 아닌 곳" },
                { char: "側", sound: "측", hun: "곁 측", desc: "길모퉁이, 밭두둑 가장자리", role: "주목받지 못하는 구석" }
              ],
              meaning: "쓸쓸하고 거친 밭두둑 한구석에,"
            },
            line2: {
              hanja: "繁花壓柔枝",
              sound: "번화압유지",
              words: [
                { char: "繁", sound: "번", hun: "번성할 번 / 많을 번", desc: "송이송이 무성하고 풍성함", role: "풍성한 재능의 상징" },
                { char: "花", sound: "화", hun: "꽃 화", desc: "붉고 탐스러운 접시꽃", role: "아름다운 결실" },
                { char: "壓", sound: "압", hun: "누를 압", desc: "꽃송이의 무게로 지그시 누르다", role: "풍성함의 무게" },
                { char: "柔", sound: "유", hun: "부드러울 유", desc: "가냘프고 부드러움", role: "여리고 순수한 마음" },
                { char: "枝", sound: "지", hun: "가지 지", desc: "초록빛 연약한 꽃가지", role: "꽃을 받치는 줄기" }
              ],
              meaning: "탐스러운 꽃송이가 여린 가지를 짓누르고 있네."
            },
            fullMeaning: "쓸쓸하고 거친 밭두둑 가에, 탐스럽게 핀 꽃송이가 여린 가지를 짓누르고 있네.",
            storyExplanation: "<strong>🌸 눈도장 장면 연상 포인트:</strong> 아무도 돌보지 않는 시골 잡초밭 귀퉁이에, 누구보다 크고 붉은 꽃송이를 가득 피워 올린 접시꽃 가지가 그 무게로 살포시 휘어 있는 모습이에요! 험난한 환경 속에서도 찬란한 재능을 활짝 꽃피운 모습을 떠올려 보세요.",
            prompt: "Traditional East Asian ink-wash illustration, storybook style. Beside a desolate, weed-covered rough countryside field, a tall, vibrant crimson and pink hollyhock flower (접시꽃) is blooming abundantly with heavy, gorgeous blossoms gently weighing down its slender green stem. Soft misty background, warm nostalgic mood, spacious sky above --ar 16:9"
          },
          {
            step: 2,
            title: "제2연 (함련 頷聯)",
            subtitle: "장맛비 갠 뒤의 은은한 향기와 바람에 기우는 그림자",
            keyword: "비 갠 뒤 바람과 그림자",
            image: "assets/images/chokgyu2.jpg",
            soundLine: "향경매우헐 영대맥풍의",
            line1: {
              hanja: "香輕梅雨歇",
              sound: "향경매우헐",
              words: [
                { char: "香", sound: "향", hun: "향기 향", desc: "은은하고 맑은 꽃향기", role: "품격 있는 내면의 향기" },
                { char: "輕", sound: "경", hun: "가벼울 경", desc: "자극적이지 않고 은은하게 퍼짐", role: "그윽한 은은함" },
                { char: "梅", sound: "매", hun: "매화 매", desc: "梅雨(매우): 매실 익을 무렵의 장맛비", role: "초여름 계절의 비" },
                { char: "雨", sound: "우", hun: "비 우", desc: "대지를 적시는 빗줄기", role: "시련과 씻김" },
                { char: "歇", sound: "헐", hun: "쉴 헐 / 그칠 헐", desc: "비가 멎고 활짝 개다", role: "비 온 뒤의 맑음" }
              ],
              meaning: "매실 익는 초여름 장맛비 그치자 은은한 향기 감돌고,"
            },
            line2: {
              hanja: "影帶麥風欹",
              sound: "영대맥풍의",
              words: [
                { char: "影", sound: "영", hun: "그림자 영", desc: "꽃송이와 잎사귀의 그림자", role: "외로운 자취" },
                { char: "帶", sound: "대", hun: "띨 대 / 찰 대", desc: "바람결을 온몸으로 머금다", role: "자연과 교감함" },
                { char: "麥", sound: "맥", hun: "보리 맥", desc: "황금빛으로 익어가는 보리", role: "풍요로운 들판" },
                { char: "風", sound: "풍", hun: "바람 풍", desc: "보리밭을 스치는 보리바람(麥風)", role: "초여름 산들바람" },
                { char: "欹", sound: "의", hun: "기울 의", desc: "바람 따라 비스듬히 기울어지다", role: "유연하게 흔들림" }
              ],
              meaning: "보리 익어 부는 바람에 꽃 그림자 비스듬히 기울어지네."
            },
            fullMeaning: "장맛비 그치자 그윽한 향기 감돌고, 보리 익어 부는 바람에 그림자 비스듬히 기울어지네.",
            storyExplanation: "<strong>🌾 눈도장 장면 연상 포인트:</strong> 촉촉하게 비가 갠 오후, 꽃잎에 맺힌 맑은 빗방울이 보석처럼 반짝이고, 황금빛 보리밭을 스쳐 불어오는 산들바람에 키 큰 접시꽃과 꽃 그림자가 비스듬히 살랑살랑 흔들리는 풍경이에요!",
            prompt: "Cozy East Asian storybook illustration. Golden summer afternoon right after a gentle summer rain has stopped, soft rain droplets glistening on delicate blooming hollyhock flower petals. A gentle breeze sweeps across golden ripening barley fields in the background, making the tall blooming flower and its soft shadow sway gracefully sideways. Gentle warm sunlight, pastel ink-wash style --ar 16:9"
          },
          {
            step: 3,
            title: "제3연 (경련 頸聯)",
            subtitle: "화려한 수레는 지나치고 벌과 나비만 기웃거리다",
            keyword: "지나치는 수레 & 맴도는 나비",
            image: "assets/images/chokgyu3.jpg",
            soundLine: "거마수견상 봉접도상규",
            line1: {
              hanja: "車馬誰見賞",
              sound: "거마수견상",
              words: [
                { char: "車", sound: "거", hun: "수레 거 / 차 차", desc: "화려한 귀족들이 타는 수레", role: "높은 권력과 세속" },
                { char: "馬", sound: "마", hun: "말 마", desc: "빠르게 달리는 말", role: "바쁜 세상 걸음" },
                { char: "誰", sound: "수", hun: "누구 수", desc: "과연 그 어떤 사람이", role: "무관심에 대한 탄식" },
                { char: "見", sound: "견", hun: "볼 견", desc: "눈길을 주어 알아보다", role: "발견과 인정" },
                { char: "賞", sound: "상", hun: "감상할 상 / 기릴 상", desc: "아름다움을 칭찬하고 기리다", role: "참된 가치 인정" }
              ],
              meaning: "수레와 말 탄 고관귀족들 그 누가 보아주리오,"
            },
            line2: {
              hanja: "蜂蝶徒相窺",
              sound: "봉접도상규",
              words: [
                { char: "蜂", sound: "봉", hun: "벌 봉", desc: "달콤한 꿀을 찾는 꿀벌", role: "작은 곤충들" },
                { char: "蝶", sound: "접", hun: "나비 접", desc: "나풀나풀 날아드는 나비", role: "꽃의 작은 이웃" },
                { char: "徒", sound: "도", hun: "헛될 도 / 무리 도", desc: "꽃의 큰 뜻을 모른 채 부질없이", role: "아쉬운 헛수고" },
                { char: "相", sound: "상", hun: "서로 상", desc: "서로서로 맴돌며", role: "꽃 주위를 돎" },
                { char: "窺", sound: "규", hun: "엿볼 규 / 엿볼 기", desc: "주위를 기웃거리며 엿보다", role: "단순한 호기심" }
              ],
              meaning: "벌과 나비들만 부질없이 서로 기웃거리네."
            },
            fullMeaning: "수레 탄 귀족들 그 누가 보아주리오, 벌과 나비들만 부질없이 기웃거리네.",
            storyExplanation: "<strong>🐎 눈도장 장면 연상 포인트:</strong> 넓은 큰길로 화려한 수레와 말을 탄 높은 벼슬아치들은 흙길가의 꽃을 쳐다보지도 않고 바쁘게 지나쳐 버리고, 오직 조그만 벌과 나비들만 향기를 맡으려 꽃송이 주변을 맴도는 모습이에요!",
            prompt: "Atmospheric East Asian watercolor illustration, storybook style. In the distance on a wide highway, an ornate ancient horse-drawn carriage with noble passengers rushes by without looking. In the foreground by the quiet dirt road, colorful bees and butterflies hover gently around tall blooming wild hollyhock blossoms. Contrast between worldly indifference and sweet nature, soft watercolor ink texture --ar 16:9"
          },
          {
            step: 4,
            title: "제4연 (미련 尾聯)",
            subtitle: "천한 땅에 태어난 부끄러움과 버려짐의 안타까움",
            keyword: "외로운 꽃의 한탄과 소망",
            image: "assets/images/chokgyu4.jpg",
            soundLine: "자참생천지 감흔인기유",
            line1: {
              hanja: "自慚生賤地",
              sound: "자참생천지",
              words: [
                { char: "自", sound: "자", hun: "스스로 자", desc: "자기 자신을 돌아보며", role: "내면의 성찰" },
                { char: "慚", sound: "참", hun: "부끄러울 참", desc: "마음속 깊이 부끄러워함", role: "처지에 대한 겸양" },
                { char: "生", sound: "생", hun: "태어날 생", desc: "태어나 자라나다", role: "타고난 운명" },
                { char: "賤", sound: "천", hun: "천할 천", desc: "보잘것없고 거친 땅, 소외된 곳", role: "신라라는 먼 변방" },
                { char: "地", sound: "지", hun: "땅 지", desc: "황량한 흙땅", role: "외딴 환경" }
              ],
              meaning: "천하고 거친 땅에 태어난 것을 스스로 부끄러워하며,"
            },
            line2: {
              hanja: "堪恨人棄遺",
              sound: "감흔인기유",
              words: [
                { char: "堪", sound: "감", hun: "견딜 감 / 참으로 감", desc: "어찌 감당하리오, 참으로", role: "깊은 감정의 표현" },
                { char: "恨", sound: "한", hun: "한탄할 한", desc: "가슴 깊이 안타까워하고 한탄함", role: "서러운 슬픔" },
                { char: "人", sound: "인", hun: "사람 인", desc: "세상의 모든 사람들", role: "알아주지 않는 세상" },
                { char: "棄", sound: "기", hun: "버릴 기", desc: "돌아보지 않고 내버려 두다", role: "외면과 소외" },
                { char: "遺", sound: "유", hun: "남길 유 / 버릴 유", desc: "버림받아 쓸쓸히 남겨지다", role: "홀로 남겨진 외로움" }
              ],
              meaning: "세상 사람들이 나를 버려두는 것을 깊이 한탄하누나."
            },
            fullMeaning: "천한 땅에 태어난 것을 스스로 부끄러워하고, 세상 사람들이 나를 버려두는 것을 한탄하누나.",
            storyExplanation: "<strong>🌙 눈도장 장면 연상 포인트:</strong> 붉은 노을이 내려앉은 고요한 시골 저녁, 초승달과 첫 별이 뜬 하늘 아래 접시꽃 홀로 환하게 피어 있고, 먼 곳에서 선비가 이 꽃을 따스한 눈빛으로 바라보며 마음을 나누는 장면이에요! 비록 세상이 몰라주어도 진정한 아름다움은 영원히 빛난다는 깊은 울림을 전해줍니다.",
            prompt: "Emotional, poetic East Asian ink-wash illustration, storybook style. Beautiful purple sunset twilight over a quiet Korean countryside. A single graceful blooming hollyhock flower standing tall in the foreground beside gravel, glowing softly in the twilight under an evening crescent moon and first evening star. A gentle Korean scholar boy sitting quietly in the distance looking at the flower with deep empathy and warmth. Soft watercolor paper texture --ar 16:9"
          }
        ]
      },

      gangnam: {
        id: "gangnam",
        title: "강남녀 (江南女)",
        sealChar: "女",
        subtitle: "오언고시(五言古詩) · 사치와 허영을 꼬집는 최치원의 날카로운 풍자시",
        storyHeader: "최치원 선생과 <강남녀(江南女)> 이야기",
        storySubheader: "순간의 겉치레와 허영을 경계하고 땀 흘려 일하는 참된 가치를 배우다",
        storyBackground: "최치원 선생이 당나라 강남 지방에 머물던 시절, 강남의 사치스럽고 방탕한 풍조에 젖어 땀 흘려 길쌈(베틀)하는 이웃집 가난한 처녀를 비웃는 부잣집 아가씨의 헛된 허영심을 날카롭게 꼬집은 대표적인 풍자 명시예요.",
        storyLesson: "1. <strong>응석과 사치의 덫:</strong> 어릴 때부터 귀엽게만 떠받들려 자라면 스스로 노력하는 법을 잊고 게을러져요.<br>2. <strong>정직한 노동의 소중함:</strong> 겉은 소박해도 땀 흘려 베틀을 짜는 이웃 처녀의 손길이 훨씬 정직하고 숭고해요.<br>3. <strong>순간의 청춘과 겉모습:</strong> 꽃다운 젊음과 예쁜 화장은 봄바람처럼 금방 지나가니 영원하지 않아요.<br>4. <strong>남을 비웃지 않는 겸손:</strong> 남의 가난이나 수고를 비웃는 마음은 결국 자기 자신을 부끄럽게 만들어요.",
        steps: [
          {
            step: 1,
            title: "제1연 (도입)",
            subtitle: "사치스러운 강남 풍속과 응석받이로 자란 딸",
            keyword: "응석받이 강남의 딸",
            image: "assets/images/gangnam1.jpg",
            soundLine: "강남탕풍속 양녀교차련",
            line1: {
              hanja: "江南蕩風俗",
              sound: "강남탕풍속",
              words: [
                { char: "江", sound: "강", hun: "강 강", desc: "양쯔강 남쪽의 풍요로운 강남 땅", role: "화려한 배경 공간" },
                { char: "南", sound: "남", hun: "남녘 남", desc: "따뜻하고 번화한 남쪽", role: "풍요로운 고장" },
                { char: "蕩", sound: "탕", hun: "방탕할 탕", desc: "사치스럽고 방탕하다", role: "경계해야 할 풍조" },
                { char: "風", sound: "풍", hun: "바람 풍", desc: "세상의 기운과 분위기", role: "세태의 흐름" },
                { char: "俗", sound: "속", hun: "풍속 속", desc: "사람들이 따르는 풍습", role: "물질만능의 분위기" }
              ],
              meaning: "강남 땅은 풍속이 사치스럽고 방탕하여,"
            },
            line2: {
              hanja: "養女嬌且憐",
              sound: "양녀교차련",
              words: [
                { char: "養", sound: "양", hun: "기를 양", desc: "자식을 애지중지 기르다", role: "부모의 양육 태도" },
                { char: "女", sound: "녀", hun: "딸 녀 / 계집 녀", desc: "집안의 귀한 딸아이", role: "주인공 강남녀" },
                { char: "嬌", sound: "교", hun: "아양떨 교 / 아리따울 교", desc: "응석을 다 받아주며 곱게만", role: "응석받이의 모습" },
                { char: "且", sound: "차", hun: "또 차", desc: "또한, 더불어", role: "강조의 말" },
                { char: "憐", sound: "련", hun: "아낄 련 / 어여쁠 련", desc: "금지옥엽으로 귀엽게만 아끼다", role: "지나친 편애" }
              ],
              meaning: "딸을 기를 때 귀엽게만 떠받들며 응석받이로 키운다네."
            },
            fullMeaning: "강남 땅은 풍속이 방탕하여, 딸을 기를 때 귀엽게만 떠받들며 애지중지 기른다네.",
            storyExplanation: "<strong>🎀 눈도장 장면 연상 포인트:</strong> 화려한 누각에서 어머니와 아버지가 고운 비단옷을 입은 어린 딸에게 온갖 장난감과 과자를 안겨주며 뭐든지 원하는 대로 응석을 다 받아주는 모습이에요!",
            prompt: "Cozy East Asian storybook illustration, warm watercolor style. In a lavish, opulent traditional house in ancient Jiangnan water town, an indulgent mother and father pamper their spoiled, pampered young daughter wearing pastel silks and flower hairpins, surrounded by toys and sweets, with misty canal outside the window --ar 16:9"
          },
          {
            step: 2,
            title: "제2연 (생활)",
            subtitle: "바느질을 부끄러워하고 화장과 악기만 즐기다",
            keyword: "거문고 타는 화려한 여인",
            image: "assets/images/gangnam2.jpg",
            soundLine: "성야치침선 장성조관현",
            line1: {
              hanja: "性冶恥針線",
              sound: "성야치침선",
              words: [
                { char: "性", sound: "성", hun: "성품 성", desc: "타고난 성격과 버릇", role: "내면의 태도" },
                { char: "冶", sound: "야", hun: "요염할 야", desc: "겉치레만 좋아하고 요염함", role: "사치스러운 마음" },
                { char: "恥", sound: "치", hun: "부끄러울 치", desc: "부끄럽게 여겨 피하다", role: "노동을 얕봄" },
                { char: "針", sound: "침", hun: "바늘 침", desc: "바느질 바늘", role: "성실한 일" },
                { char: "線", sound: "선", hun: "실 선", desc: "바느질 실 (針線: 바느질과 일)", role: "살림의 기본" }
              ],
              meaning: "성품이 사치스러워 바느질하는 것을 부끄럽게 여기고,"
            },
            line2: {
              hanja: "粧成調管絃",
              sound: "장성조관현",
              words: [
                { char: "粧", sound: "장", hun: "단장할 장", desc: "얼굴을 곱게 화장하다", role: "외모 치장" },
                { char: "成", sound: "성", hun: "이룰 성", desc: "화장을 다 마치고 나서는", role: "치장의 완성" },
                { char: "調", sound: "조", hun: "고를 조", desc: "악기의 음을 맞추다, 조율하다", role: "놀이에만 열중함" },
                { char: "管", sound: "관", hun: "피리 관", desc: "대나무 관악기", role: "풍류 악기" },
                { char: "絃", sound: "현", hun: "줄 현", desc: "거문고나 가야금 줄", role: "악기 연주" }
              ],
              meaning: "곱게 단장을 마치고는 피리와 거문고 줄만 고른다네."
            },
            fullMeaning: "성품이 사치스러워 바느질을 부끄러워하고, 화장 곱게 마치고는 피리와 거문고만 고르네.",
            storyExplanation: "<strong>🪞 눈도장 장면 연상 포인트:</strong> 거울 앞에서 얼굴을 곱게 치장한 여인이 바느질 바구니는 방구석에 팽개쳐 둔 채, 우아한 척 거문고 줄만 퉁기며 시간을 보내는 모습이에요!",
            prompt: "Charming traditional East Asian ink-wash illustration, storybook style. An elegantly dressed young Jiangnan woman sitting in front of a bronze vanity mirror, admiring her delicate makeup, gently plucking strings of a wooden zither (guzheng). An untouched sewing basket with needles and thread pushed aside on the floor --ar 16:9"
          },
          {
            step: 3,
            title: "제3연 (음악)",
            subtitle: "바른 음악 대신 들뜬 봄바람 유행가에 이끌리다",
            keyword: "들뜬 봄날의 유행가",
            image: "assets/images/gangnam3.jpg",
            soundLine: "소학비아음 다피춘심견",
            line1: {
              hanja: "所學非雅音",
              sound: "소학비아음",
              words: [
                { char: "所", sound: "소", hun: "바 소", desc: "배우는 바, 그 배움이", role: "학습의 대상" },
                { char: "學", sound: "학", hun: "배울 학", desc: "열심히 익히고 배우다", role: "배움의 행위" },
                { char: "非", sound: "비", hun: "아닐 비", desc: "올바른 것이 아니다", role: "비판적 시각" },
                { char: "雅", sound: "아", hun: "바를 아 / 우아할 아", desc: "품격 있고 바른 음악(雅音)", role: "바른 덕목" },
                { char: "音", sound: "음", hun: "소리 음", desc: "음악과 소리", role: "소리의 본질" }
              ],
              meaning: "배우는 음악은 바르고 점잖은 음악이 아니요,"
            },
            line2: {
              hanja: "多被春心牽",
              sound: "다피춘심견",
              words: [
                { char: "多", sound: "다", hun: "많을 다", desc: "대부분, 거의 다", role: "압도적인 비중" },
                { char: "被", sound: "피", hun: "입을 피 / 당할 피", desc: "~에 휩쓸리고 이끌리다", role: "수동적 유혹" },
                { char: "春", sound: "춘", hun: "봄 춘", desc: "살랑이는 봄바람, 춘정", role: "들뜬 감정" },
                { char: "心", sound: "심", hun: "마음 심", desc: "가벼운 마음", role: "흔들리는 마음" },
                { char: "牽", sound: "견", hun: "끌 견", desc: "유혹에 푹 끌려가다", role: "이끌림" }
              ],
              meaning: "대부분 들뜬 봄바람 같은 마음에 이끌린 곡조라네."
            },
            fullMeaning: "배우는 것은 바른 음악이 아니요, 대부분 들뜬 봄바람에 이끌린 가벼운 곡조라네.",
            storyExplanation: "<strong>🌸 눈도장 장면 연상 포인트:</strong> 꽃잎이 날리는 화사한 봄날, 마음을 닦는 진지한 음악 대신 사람들의 기분을 들뜨게 만드는 유행가에 취해 하늘하늘 춤추며 피리를 부는 모습이에요!",
            prompt: "Atmospheric East Asian storybook illustration, soft pastel watercolor. In an open garden pavilion overlooking a spring courtyard with pink peach blossoms, the young woman plays a coquettish lively tune on her flute, swaying with fluttery silk ribbons, surrounded by swirling petals carried by spring breeze --ar 16:9"
          },
          {
            step: 4,
            title: "제4연 (자만)",
            subtitle: "스스로 꽃다운 미모를 믿고 영원한 청춘을 착각하다",
            keyword: "영원할 줄 아는 청춘",
            image: "assets/images/gangnam4.jpg",
            soundLine: "자위방화색 장점염양년",
            line1: {
              hanja: "自謂芳華色",
              sound: "자위방화색",
              words: [
                { char: "自", sound: "자", hun: "스스로 자", desc: "자기 자신 스스로", role: "자만의 주체" },
                { char: "謂", sound: "위", hun: "이를 위 / 생각할 위", desc: "생각하다, 자부하다", role: "착각의 시작" },
                { char: "芳", sound: "방", hun: "꽃다울 방", desc: "향기롭고 싱그러움", role: "젊음의 상징" },
                { char: "華", sound: "화", hun: "빛날 화 / 꽃 화", desc: "화려하고 눈부신 꽃", role: "화려한 외모" },
                { char: "色", sound: "색", hun: "빛 색 / 얼굴빛 색", desc: "아름다운 얼굴 모습", role: "겉모습" }
              ],
              meaning: "스스로 꽃다운 아름다운 미모를 지녔다고 믿으며,"
            },
            line2: {
              hanja: "長占艶陽年",
              sound: "장점염양년",
              words: [
                { char: "長", sound: "장", hun: "길 장", desc: "언제까지나 영원히", role: "영속에 대한 맹신" },
                { char: "占", sound: "점", hun: "차지할 점", desc: "혼자 독차지하다", role: "욕심" },
                { char: "艶", sound: "염", hun: "고울 염", desc: "눈부시게 곱고 따스함", role: "찬란함" },
                { char: "陽", sound: "양", hun: "볕 양", desc: "따사로운 봄볕", role: "봄날의 청춘" },
                { char: "年", sound: "년", hun: "해 년 / 나이 년", desc: "청춘의 젊은 세월", role: "인생의 봄날" }
              ],
              meaning: "눈부신 봄날의 젊음을 길이길이 누릴 것이라 여기네."
            },
            fullMeaning: "스스로 꽃다운 미모를 믿고, 따사로운 젊은 청춘 시절을 길이길이 차지하리라 여기네.",
            storyExplanation: "<strong>🪞 눈도장 장면 연상 포인트:</strong> 모란꽃 만발한 정원에서 손거울을 들여다보며 '내 아름다움과 젊음은 영원할 거야!' 하고 으스대는 도도한 표정을 지어 보이는 모습이에요!",
            prompt: "Warm and reflective East Asian storybook illustration. The haughty young woman admiring her radiant reflection in a small golden hand mirror, smiling complacently surrounded by luxuriant blooming peony bouquets under bright golden afternoon sunshine, feeling herself eternally young --ar 16:9"
          },
          {
            step: 5,
            title: "제5연 (조롱)",
            subtitle: "하루 종일 베틀을 짜는 가난한 이웃 처녀를 비웃다",
            keyword: "부지런한 이웃집 길쌈 처녀",
            image: "assets/images/gangnam5.jpg",
            soundLine: "각소인사녀 종조롱기저",
            line1: {
              hanja: "却笑隣舍女",
              sound: "각소인사녀",
              words: [
                { char: "却", sound: "각", hun: "도리어 각", desc: "자신의 처지는 모르고 도리어", role: "반전의 어조" },
                { char: "笑", sound: "소", hun: "웃을 소", desc: "비웃다, 조롱하다", role: "오만한 비웃음" },
                { char: "隣", sound: "인", hun: "이웃 린 / 이웃 인", desc: "가까운 이웃집", role: "대비되는 상대" },
                { char: "舍", sound: "사", hun: "집 사", desc: "이웃집", role: "가난한 오두막" },
                { char: "女", sound: "녀", hun: "처녀 녀 / 딸 녀", desc: "부지런하고 성실한 처녀", role: "성실한 모범" }
              ],
              meaning: "도리어 곁에 사는 이웃집 처녀를 비웃나니,"
            },
            line2: {
              hanja: "終朝弄機杼",
              sound: "종조롱기저",
              words: [
                { char: "終", sound: "종", hun: "마칠 종", desc: "끝날 때까지, 온종일", role: "꾸준한 노력" },
                { char: "朝", sound: "조", hun: "아침 조", desc: "아침부터 저녁까지", role: "쉼 없는 시간" },
                { char: "弄", sound: "롱", hun: "만질 롱 / 놀릴 롱", desc: "부지런히 손을 놀리다", role: "바쁜 손놀림" },
                { char: "機", sound: "기", hun: "베틀 기", desc: "옷감을 짜는 베틀", role: "노동의 도구" },
                { char: "杼", sound: "저", hun: "북 저", desc: "베틀에 실을 넣는 북", role: "베틀 북" }
              ],
              meaning: "아침부터 날이 저물도록 베틀 북만 짤깍대며 일한다고 놀리네."
            },
            fullMeaning: "도리어 이웃집 처녀를 비웃나니, 아침이 다 가도록 베틀만 짤깍대며 일한다고 놀리네.",
            storyExplanation: "<strong>🧵 눈도장 장면 연상 포인트:</strong> 소박한 오두막 창가에서 굵은 땀방울을 흘리며 정직하게 베틀을 짜고 있는 착한 이웃집 처녀를, 담장 너머에서 손가락질하며 깔깔대고 비웃는 모습이에요!",
            prompt: "Storybook East Asian watercolor illustration, thoughtful contrast. In the foreground, through a modest open window of a simple rustic cottage, a humble, diligent young girl in plain hemp clothes is working steadily at a wooden hand weaving loom (베틀). Nearby, the vain wealthy neighbor girl peeks over the fence, pointing and snickering --ar 16:9"
          },
          {
            step: 6,
            title: "제6연 (결말 & 풍자)",
            subtitle: "고생해도 비단옷은 네 것이 되지 못한다는 비웃음과 최치원의 일침",
            keyword: "사치에 대한 풍자와 일침",
            image: "assets/images/gangnam6.jpg",
            soundLine: "기저종노신 나의부도여",
            line1: {
              hanja: "機杼縱勞身",
              sound: "기저종노신",
              words: [
                { char: "機", sound: "기", hun: "베틀 기", desc: "베를 짜는 베틀", role: "노동의 상징" },
                { char: "杼", sound: "저", hun: "북 저", desc: "베틀 북", role: "쉴 새 없는 손길" },
                { char: "縱", sound: "종", hun: "비록 종", desc: "비록 ~할지라도", role: "가정의 말" },
                { char: "勞", sound: "노", hun: "수고로울 로 / 노", desc: "몸이 고달프고 힘듦", role: "고된 수고" },
                { char: "身", sound: "신", hun: "몸 신", desc: "나의 육체와 건강", role: "땀 흘리는 몸" }
              ],
              meaning: "'베틀을 짜느라 비록 네 몸은 고달프지만,"
            },
            line2: {
              hanja: "羅衣不到汝",
              sound: "나의부도여",
              words: [
                { char: "羅", sound: "라", hun: "비단 라 / 나", desc: "곱고 얇은 고급 깁 비단", role: "화려한 사치품" },
                { char: "衣", sound: "의", hun: "옷 의", desc: "눈부신 비단옷", role: "결과물" },
                { char: "不", sound: "부", hun: "아니 부", desc: "결코 되지 못하다", role: "비정한 현실" },
                { char: "到", sound: "도", hun: "이를 도", desc: "손에 들어가다, 도달하다", role: "소유권" },
                { char: "汝", sound: "여", hun: "너 여", desc: "너 같은 가난한 처녀에게", role: "조롱의 대상" }
              ],
              meaning: "그 고운 비단옷은 결코 네 차지가 되지 못할 텐데!' 하고 비웃누나."
            },
            fullMeaning: "베틀 짜느라 비록 몸은 고달프지만, 그 고운 비단옷은 결코 네 차지가 되지 못할 텐데!",
            storyExplanation: "<strong>✨ 눈도장 장면 연상 포인트:</strong> '열심히 비단을 짜봤자 부자들에게 빼앗기고 정작 네 옷은 되지 못해!'라며 빈정거리는 강남녀의 차가운 말이지만, 최치원 선생은 남의 땀을 비웃는 강남녀의 텅 빈 영혼을 날카롭게 비판하며 정직한 노동의 가치를 되새겨줍니다.",
            prompt: "Thoughtful and poetic East Asian ink-wash illustration. Twilight settling over the town. The humble weaving girl looks up from her wooden loom toward the evening stars with a serene, proud, dignified smile, her hands honest and hardworking. In the background, the shadowy outline of the proud girl realizing the fleeting nature of vanity --ar 16:9"
          }
        ]
      },
      wunbong: {
        id: "wunbong",
        title: "제운봉사 (題雲峯寺)",
        sealChar: "峯",
        subtitle: "오언율시(五言律詩) · 시각 연상과 리듬 챈트",
        storyHeader: "최치원 선생과 <제운봉사(題雲峯寺)> 이야기",
        storySubheader: "구름 솟은 산사에서 바라본 맑은 세상과 호연지기(浩然之氣)",
        storyBackground: "<strong>'제목 제(題)'</strong>, <strong>'구름 운(雲)'</strong>, <strong>'봉우리 봉(峯)'</strong>, <strong>'절 사(寺)'</strong>를 써서, '구름에 닿을 듯 드높은 운봉사 절벽에 올라 지은 시'라는 뜻이에요. 가파른 칡넝쿨을 잡고 천 길 벼랑 끝에 올라 <strong>끝없이 펼쳐진 산봉우리(千山)</strong>를 손바닥 위에 올려놓듯 내려다보며, 가슴속의 온갖 번뇌를 시원하게 씻어내는 선비의 호방한 기상을 담고 있답니다.",
        storyLesson: "1. <strong>포기하지 않고 오르기(捫葛):</strong> 가파른 비탈길도 튼튼한 칡넝쿨을 잡고 땀 흘려 오르면, 마침내 구름보다 높은 멋진 세상을 만날 수 있어요.<br>2. <strong>넓은 마음 갖기(萬事豁):</strong> 높은 곳에서 내려다보면 아등바등 다투던 일들이 손바닥만 한 작은 일에 불과해요. 넓고 시원한 호연지기를 품어요.<br>3. <strong>맑은 소리와 눈빛(塔影·松聲):</strong> 눈부신 햇살 속의 단아한 탑과 하늘을 울리는 솔바람 소리처럼, 내 마음도 언제나 맑고 씩씩하게 가꿔요.<br>4. <strong>일상의 책임(廻步):</strong> 자연의 아름다움을 마음 깊이 새기되, 다시 일상으로 돌아와 내게 주어진 소중한 하루하루를 성실하게 살아가요.",
        steps: [
          {
            step: 1,
            title: "제1연 (수련 首聯)",
            subtitle: "칡넝쿨 잡고 구름 봉우리에 오르니 온 세상이 텅 비어 맑다",
            keyword: "칡넝쿨 & 구름 봉우리",
            image: "assets/images/wunbong1.svg",
            prompt: "Traditional East Asian ink-wash illustration, storybook style for children. A high misty mountain peak above sea of clouds with ancient Korean Buddhist temple Cloud Peak Temple, a young Korean scholar boy climbing holding wild ivy vines. Soft warm atmospheric colors, poetic, gentle light, high quality picture book illustration.",
            storyExplanation: "<strong>🔑 눈도장 장면 연상 포인트:</strong> 굵은 칡넝쿨을 밧줄처럼 굳세게 휘어잡고 구름 솟은 절벽을 오르는 선비 아이의 모습이에요! 마침내 운봉사에 올라 세상을 내려다보니, 구름바다 아래 온갖 잡념이 맑은 허공처럼 깨끗하게 비워집니다.",
            fullMeaning: "칡넝쿨을 휘어잡고 구름 봉우리에 오르니, 평평하게 바라보는 온 세상이 텅 비어 맑구나.",
            soundLine: "문갈상운봉 평관세계공",
            line1: {
              hanja: "捫葛上雲峯",
              sound: "문갈상운봉",
              words: [
                { char: "捫", sound: "문", hun: "어루만질 문", desc: "손으로 어루만지다, 단단히 잡다", role: "넝쿨을 잡는 손길" },
                { char: "葛", sound: "갈", hun: "칡 갈", desc: "바위에 드리운 굵은 칡넝쿨", role: "오르는 밧줄" },
                { char: "上", sound: "상", hun: "오를 상", desc: "높은 곳으로 힘차게 오르다", role: "정상을 향한 전진" },
                { char: "雲", sound: "운", hun: "구름 운", desc: "하늘에 뭉게뭉게 피어난 흰 구름", role: "아득한 높이" },
                { char: "峯", sound: "봉", hun: "봉우리 봉", desc: "구름을 뚫고 솟은 드높은 묏부리", role: "목적지 산봉우리" }
              ],
              meaning: "굵은 칡넝쿨을 휘어잡고 구름 솟은 봉우리에 오르니,"
            },
            line2: {
              hanja: "平觀世界空",
              sound: "평관세계공",
              words: [
                { char: "平", sound: "평", hun: "평평할 평", desc: "눈높이를 나란히 하여 넓게", role: "탁 트인 시선" },
                { char: "觀", sound: "관", hun: "볼 관", desc: "자세히 바라보고 관찰하다", role: "세상을 관조함" },
                { char: "世", sound: "세", hun: "세상 세", desc: "인간 세상, 온 누리", role: "우리가 사는 세상" },
                { char: "界", sound: "계", hun: "지경 계", desc: "경계, 지평선 너머의 공간", role: "넓은 대지" },
                { char: "空", sound: "공", hun: "빌 공", desc: "맑고 텅 비어 집착이 없다", role: "비워진 맑은 마음" }
              ],
              meaning: "탁 트인 시선으로 내려다보는 온 세상이 텅 비어 고요하구나."
            }
          },
          {
            step: 2,
            title: "제2연 (함련 頷聯)",
            subtitle: "천 개의 산봉우리는 손바닥 위요, 세상 만사 가슴속에서 시원하게 트이다",
            keyword: "손바닥 위의 산들 & 가슴 트임",
            image: "assets/images/wunbong2.svg",
            prompt: "Traditional East Asian ink-wash illustration, storybook style for children. Panoramic view from high mountain peak, endless rolling mountain ridges resembling miniature hills on a giant open palm in deep blue sky. Scholar boy with open arms exhales freely in pure mountain breeze.",
            storyExplanation: "<strong>🔑 눈도장 장면 연상 포인트:</strong> 첩첩이 이어진 천 개의 산봉우리들이 마치 내 손바닥 위에 올려놓은 미니어처처럼 한눈에 보이고, 팔을 활짝 벌린 소년의 가슴속에서 세상의 모든 번뇌와 답답함이 시원하게 탁 트이는 통쾌한 장면이에요!",
            fullMeaning: "수많은 산봉우리 손바닥 위처럼 한눈에 나뉘어 보이고, 세상의 온갖 복잡한 일 가슴속에서 시원하게 트이네.",
            soundLine: "천산분장상 만사활흉중",
            line1: {
              hanja: "千山分掌上",
              sound: "천산분장상",
              words: [
                { char: "千", sound: "천", hun: "일천 천", desc: "수많은, 겹겹이 이어진", role: "수많은 산세" },
                { char: "山", sound: "산", hun: "뫼 산", desc: "산봉우리와 험한 능선들", role: "자연의 웅장함" },
                { char: "分", sound: "분", hun: "나눌 분", desc: "뚜렷하게 갈라져 훤히 보이다", role: "명확한 조망" },
                { char: "掌", sound: "장", hun: "손바닥 장", desc: "사람의 손바닥", role: "비유의 대상" },
                { char: "上", sound: "상", hun: "위 상", desc: "손바닥의 훤한 위", role: "한눈에 들어옴" }
              ],
              meaning: "천 개의 겹겹 산봉우리 손바닥 위에 올려놓은 듯 훤히 나뉘고,"
            },
            line2: {
              hanja: "萬事豁胷中",
              sound: "만사활흉중",
              words: [
                { char: "萬", sound: "만", hun: "일만 만", desc: "세상의 수많은, 모든", role: "세간의 모든 번뇌" },
                { char: "事", sound: "사", hun: "일 사", desc: "온갖 일과 걱정거리", role: "속세의 일들" },
                { char: "豁", sound: "활", hun: "트일 활", desc: "시원하게 뻥 뚫리고 활짝 열리다", role: "시원한 해방감" },
                { char: "胷", sound: "흉", hun: "가슴 흉", desc: "가슴 (흉'胸'의 옛 글자)", role: "마음의 중심" },
                { char: "中", sound: "중", hun: "가운데 중", desc: "가슴속, 마음 깊은 곳", role: "내면의 평화" }
              ],
              meaning: "세상의 모든 복잡한 일들이 가슴속에서 시원하게 탁 트이네."
            }
          },
          {
            step: 3,
            title: "제3연 (경련 頸聯)",
            subtitle: "탑 그림자는 햇살 가에 흰 눈 같고, 솔바람 소리는 높은 하늘 바람 같네",
            keyword: "눈빛 탑 그림자 & 하늘 솔바람",
            image: "assets/images/wunbong3.svg",
            prompt: "Traditional East Asian ink-wash illustration, storybook style for children. Ancient Korean stone pagoda glowing brilliantly white like snow near radiant sun on a mountain summit, majestic ancient pine tree singing with sweeping mountain wind under high blue sky.",
            storyExplanation: "<strong>🔑 눈도장 장면 연상 포인트:</strong> 절 마당의 하얀 석탑이 높은 산의 찬란한 햇살을 받아 순백의 눈처럼 반짝이고, 천 길 바위틈에 선 늙은 소나무가 바람을 맞아 마치 하늘 한가운데서 천상의 음악을 연주하듯 '솨아-' 소리를 내는 신비로운 풍경이에요!",
            fullMeaning: "탑 그림자는 햇살 가에 흰 눈처럼 서려 있고, 솔바람 소리는 하늘 한가운데 바람처럼 울리네.",
            soundLine: "탑영일변설 송성천반풍",
            line1: {
              hanja: "塔影日邊雪",
              sound: "탑영일변설",
              words: [
                { char: "塔", sound: "탑", hun: "탑 탑", desc: "절 마당의 고요한 석탑", role: "사찰의 상징" },
                { char: "影", sound: "영", hun: "그림자 영", desc: "탑의 모습과 비치는 그림자", role: "맑은 형상" },
                { char: "日", sound: "일", hun: "날 일 / 해 일", desc: "하늘 높이 비치는 밝은 해", role: "빛의 근원" },
                { char: "邊", sound: "변", hun: "가 변", desc: "해 언저리, 햇살 닿는 곳", role: "빛나는 위치" },
                { char: "雪", sound: "설", hun: "눈 설", desc: "순백의 눈처럼 깨끗하고 희다", role: "눈부신 순백" }
              ],
              meaning: "높은 탑의 그림자는 햇살 가에 흰 눈처럼 빛나고,"
            },
            line2: {
              hanja: "松聲天半風",
              sound: "송성천반풍",
              words: [
                { char: "松", sound: "송", hun: "소나무 송", desc: "바위틈에 우뚝 선 푸른 노송", role: "꿋꿋한 기상" },
                { char: "聲", sound: "성", hun: "소리 성", desc: "바람결에 스치는 솔잎 소리", role: "자연의 음악" },
                { char: "天", sound: "천", hun: "하늘 천", desc: "푸르고 드높은 하늘", role: "광활한 공간" },
                { char: "半", sound: "반", hun: "반 반", desc: "하늘 한가운데, 높은 공중", role: "드높은 위치" },
                { char: "風", sound: "풍", hun: "바람 풍", desc: "시원하고 웅장한 천상의 바람", role: "솔바람의 울림" }
              ],
              meaning: "우듬지 솔바람 소리는 하늘 한가운데서 부는 바람처럼 웅장하네."
            }
          },
          {
            step: 4,
            title: "제4연 (미련 尾聯)",
            subtitle: "안개와 노을은 응당 나를 비웃으리, 걸음 돌려 다시 속세의 새장으로 들어가니",
            keyword: "노을의 웃음 & 속세의 새장",
            image: "assets/images/wunbong4.svg",
            prompt: "Traditional East Asian ink-wash illustration, storybook style for children. Beautiful purple-rose twilight sunset mist over mountains, young Korean scholar with travel pack pausing on mountain path looking back with gentle smile, valley below with distant town roofs in soft dust.",
            storyExplanation: "<strong>🔑 눈도장 장면 연상 포인트:</strong> 구름 위 신선 같은 운봉사를 떠나 다시 속세의 일상으로 발길을 돌리는 소년 선비의 모습이에요. 저녁노을과 산안개가 '왜 그 맑은 산을 두고 다시 먼지투성이 새장(속세)으로 가니?'라며 웃는 듯한 깊은 시적 여운을 전해줍니다.",
            fullMeaning: "산안개와 저녁노을은 응당 나를 비웃겠지, 걸음 돌려 다시 속세의 티끌 새장 속으로 들어가니.",
            soundLine: "연하응소아 회보입진롱",
            line1: {
              hanja: "煙霞應笑我",
              sound: "연하응소아",
              words: [
                { char: "煙", sound: "연", hun: "연기 연", desc: "산골짜기에 피어오르는 안개", role: "신비로운 자연" },
                { char: "霞", sound: "하", hun: "노을 하", desc: "하늘을 붉게 물들이는 저녁노을", role: "아름다운 풍광" },
                { char: "應", sound: "응", hun: "응할 응 / 마땅 응", desc: "마땅히, 응당 ~하리라", role: "자연의 마음 짐작" },
                { char: "笑", sound: "소", hun: "웃을 소", desc: "빙그레 미소 짓다, 비웃다", role: "자연의 다정한 꾸짖음" },
                { char: "我", sound: "아", hun: "나 아", desc: "시인 최치원 자신", role: "성찰하는 주체" }
              ],
              meaning: "곱게 물든 산안개와 저녁노을은 응당 나를 비웃으리라,"
            },
            line2: {
              hanja: "廻步入塵籠",
              sound: "회보입진롱",
              words: [
                { char: "廻", sound: "회", hun: "돌 회", desc: "발길을 돌리다 (돌아올 回의 본자)", role: "하산하는 발걸음" },
                { char: "步", sound: "보", hun: "걸음 보", desc: "천천히 딛는 걸음걸이", role: "아쉬운 하산" },
                { char: "入", sound: "입", hun: "들 입", desc: "다시 안으로 들어가다", role: "현실로 복귀" },
                { char: "塵", sound: "진", hun: "티끌 진", desc: "번잡하고 어지러운 속세의 먼지", role: "인간 세상의 티끌" },
                { char: "籠", sound: "롱", hun: "새장 롱 / 대바구니 롱", desc: "새장, 굴레 (塵籠: 속세의 굴레)", role: "답답한 현실 세상" }
              ],
              meaning: "발걸음 돌려 다시 먼지 자욱한 속세의 새장 속으로 들어가니."
            }
          }
        ]
      }
    };
