window.addEventListener("load", function(){
    let swiper=new Swiper(".mySwiper", {
        slidesPerView: 4,
        // spaceBetween: 30,
        // loop: true,
        // loopedSlides: 1,
        pagination: { 
            el: ".swiper-pagination",
            type: "fraction",
        },
        
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         hide:false
        },
        
        navigation: {
        nextEl: ".swiper .controller ul li a.next",
        prevEl: ".swiper .controller ul li a.prev",
        },
        
        // autoplay: {
        // delay: 2000,
        //    },
        breakpoints: { 
            100:{
                slidesPerView: 1,
            },
            800:{
                slidesPerView: 2,
            },
            1300:{
                slidesPerView: 3,
            },
        }
        });
        // 메인프로젝트 슬라이더
            // const crmProjectData = [
            //     {
            //         name: "CRM 고객관리 시스템",
            //         role: "역할 : 프론트엔드 개발, UI 구현, API 연동",
            //         desc: "고객 및 프로젝트 현황을 확인할 수 있는 메인 화면입니다.<br>주요 정보 접근 구조와 상태 흐름을 확인할 수 있도록 구성했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/white_sass_1.png", alt: "SCSS" },
            //             { src: "./image/Layer_1.png", alt: "Git" }
            //         ]
            //     },
            //     {
            //         name: "고객 / 프로젝트 리스트",
            //         role: "역할 : 리스트 UI 구현, 상태 분기 처리",
            //         desc: "고객 및 프로젝트 목록을 조회하고 항목 클릭 시<br>상세 화면 및 단계별 모달 흐름으로 연결되도록 구성했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/white_js_1.png", alt: "JavaScript" },
            //             { src: "./image/next.png", alt: "Next.js" }
            //         ]
            //     },
            //     {
            //         name: "상세 / 수정 화면",
            //         role: "역할 : 상세 조회, 수정 폼 상태 관리",
            //         desc: "상세 데이터 조회 및 수정 기능을 구현한 화면입니다.<br>초기 데이터 매핑과 select 상태 동기화 이슈를 처리했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/white_sass_1.png", alt: "SCSS" },
            //             { src: "./image/Group_10.png", alt: "Redux Toolkit" }
            //         ]
            //     },
            //     {
            //         name: "파일 업로드 / 다운로드",
            //         role: "역할 : 파일 처리 UI, API 반영",
            //         desc: "파일 업로드, 다운로드, 삭제 흐름을 구현했습니다.<br>fileSeq 기반 수정 API 로직을 반영해 동작하도록 구성했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/mysql.png", alt: "MySQL" },
            //             { src: "./image/Layer_2.png", alt: "GitHub" }
            //         ]
            //     },
            //     {
            //         name: "단계별 모달 분기",
            //         role: "역할 : 조건 분기 로직 구현",
            //         desc: "프로젝트 단계와 deliveryDTOList 유무에 따라<br>서로 다른 모달이 열리도록 분기 로직을 구성했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/white_js_1.png", alt: "JavaScript" },
            //             { src: "./image/white_gitlab_1.png", alt: "GitLab" }
            //         ]
            //     },
            //     {
            //         name: "문제 해결 / 유지보수",
            //         role: "역할 : 상태 관리 개선, 유지보수",
            //         desc: "리스트 클릭 흐름, 상태 전환, 예외 케이스 대응 등<br>실무 유지보수 과정에서 발생한 문제를 개선했습니다.",
            //         stack: [
            //             { src: "./image/white_React_1.png", alt: "React" },
            //             { src: "./image/white_ts_1.png", alt: "TypeScript" },
            //             { src: "./image/white_sass_1.png", alt: "SCSS" },
            //             { src: "./image/python.png", alt: "Python" }
            //         ]
            //     }
            // ];
        
            // const crmProjectName = document.getElementById("crmProjectName");
            // const crmProjectRole = document.getElementById("crmProjectRole");
            // const crmProjectDesc = document.getElementById("crmProjectDesc");
            // const crmProjectStack = document.getElementById("crmProjectStack");
        
            // function updateCrmText(index){
            //     const data = crmProjectData[index];
        
            //     crmProjectName.textContent = data.name;
            //     crmProjectRole.textContent = data.role;
            //     crmProjectDesc.innerHTML = data.desc;
        
            //     crmProjectStack.innerHTML = "";
            //     data.stack.forEach((item) => {
            //         const img = document.createElement("img");
            //         img.src = item.src;
            //         img.alt = item.alt;
            //         crmProjectStack.appendChild(img);
            //     });
            // }
        
            // const crmSwiper = new Swiper(".crmSwiper", {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            //     speed: 700,
            //     loop: false,
            //     pagination: {
            //         el: ".crm_pagination",
            //         clickable: true,
            //     },
            //     navigation: {
            //         nextEl: ".crm_next",
            //         prevEl: ".crm_prev",
            //     },
            //     on: {
            //         init: function(){
            //             updateCrmText(this.activeIndex);
            //         },
            //         slideChange: function(){
            //             updateCrmText(this.activeIndex);
            //         }
            //     }
            // });
        // ----------------

        // 메인 슬라이드 - 텍스트형
let collaborationSwiper = new Swiper(".collaborationSwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    // loop: true,
    // loopedSlides: 1,
    pagination: { 
        el: ".collaboration-pagination",
        type: "fraction",
    },
    
    scrollbar: {
        el: '.collaboration-scrollbar',
        draggable: true,
        hide: false
    },
    
    navigation: {
        nextEl: ".collaborationSwiper .controller ul li a.next",
        prevEl: ".collaborationSwiper .controller ul li a.prev",
    },
    // autoplay: {
    // delay: 2000,
    // },
    breakpoints: { 
        100:{
            slidesPerView: 1,
        },
        800:{
            slidesPerView: 1,
        },
        1300:{
            slidesPerView: 1,
        },
    }
});
        // 
})
