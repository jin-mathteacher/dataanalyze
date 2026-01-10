// 학생 케이스 데이터베이스
const studentCases = [
    {
        id: 'A',
        name: '김도현',
        grade: '중2',
        gender: '남',
        background: '게임을 좋아하고 머리는 좋으나 학습 동기가 낮음. 수학 시간에 엎드려 있는 경우가 많음.',
        concern: '학습 동기 부족으로 인한 성적 하락이 우려됨.',
        quantitative: {
            lms_access: { value: 40, average: 85, unit: '%' },
            assignment_submit: { value: 20, average: 85, unit: '%' },
            formative_scores: [
                { month: '3월', score: 80 },
                { month: '4월', score: 70 },
                { month: '5월', score: 55 },
                { month: '6월', score: 45 }
            ]
        },
        qualitative: [
            { type: '관찰', content: '"수학은 왜 배우는지 모르겠어요"라고 자주 말함.' },
            { type: '동료 평가', content: '게임 이야기할 때는 눈이 반짝임.' },
            { type: '상담 기록', content: '부모님이 맞벌이라 방과 후 관리가 안 됨.' }
        ]
    },
    {
        id: 'B',
        name: '이수진',
        grade: '중2',
        gender: '여',
        background: '성실하고 착하지만, 시험 불안이 높고 자신감이 부족함. 질문을 거의 하지 않음.',
        concern: '완벽주의 성향과 시험 불안으로 인한 학습 효율 저하.',
        quantitative: {
            lms_access: { value: 100, average: 85, unit: '%' },
            assignment_submit: { value: 100, average: 85, unit: '%' },
            problem_time: { value: '2배', average: '평균', note: '느림' },
            accuracy: { value: 60, average: 75, unit: '%' }
        },
        qualitative: [
            { type: '관찰', content: '문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.' },
            { type: 'AI 분석', content: '개념 이해도는 높으나 응용 문제에서 막힘.' }
        ]
    },
    {
        id: 'C',
        name: '박민준',
        grade: '중2',
        gender: '남',
        background: '친구들과 어울리기를 좋아하지만 수업 집중도가 낮음. 발표는 잘하지만 개별 학습이 약함.',
        concern: '협업 능력은 뛰어나나 개별 학습 습관 부족.',
        quantitative: {
            lms_access: { value: 65, average: 85, unit: '%' },
            assignment_submit: { value: 50, average: 85, unit: '%' },
            group_activity: { value: 95, average: 80, unit: '%' },
            individual_test: { value: 55, average: 75, unit: '%' }
        },
        qualitative: [
            { type: '관찰', content: '조별 활동에서는 리더십을 발휘하지만, 개별 과제는 미루는 경향.' },
            { type: '동료 평가', content: '친구들과 함께 할 때는 적극적이고 창의적임.' },
            { type: '상담 기록', content: '"혼자 공부하는 게 재미없어요"라고 표현.' }
        ]
    },
    {
        id: 'D',
        name: '최서연',
        grade: '중2',
        gender: '여',
        background: '예술 분야에 관심이 많고 창의적 사고가 뛰어남. 하지만 전통적인 평가 방식에서 어려움을 겪음.',
        concern: '창의적 재능과 전통적 평가 체계 간의 괴리.',
        quantitative: {
            lms_access: { value: 70, average: 85, unit: '%' },
            assignment_submit: { value: 60, average: 85, unit: '%' },
            creative_project: { value: 95, average: 75, unit: '%' },
            written_test: { value: 50, average: 75, unit: '%' }
        },
        qualitative: [
            { type: '관찰', content: '포트폴리오나 프로젝트 과제에서는 뛰어난 창의성 발휘.' },
            { type: 'AI 분석', content: '다양한 관점에서 문제를 접근하지만, 정형화된 답안 작성에 어려움.' },
            { type: '상담 기록', content: '"제 방식으로 표현하고 싶은데 점수가 안 나와요"라고 말함.' }
        ]
    },
    {
        id: 'E',
        name: '정태우',
        grade: '중2',
        gender: '남',
        background: '학습 의욕은 높지만 학습 방법을 모르는 상태. 시간을 많이 투자하지만 효율이 낮음.',
        concern: '학습 전략 부재로 인한 학습 효율성 저하.',
        quantitative: {
            lms_access: { value: 90, average: 85, unit: '%' },
            assignment_submit: { value: 95, average: 85, unit: '%' },
            study_time: { value: '3시간', average: '1.5시간', note: '일일 평균' },
            test_score: { value: 65, average: 75, unit: '%' }
        },
        qualitative: [
            { type: '관찰', content: '노트 필기를 매우 상세하게 하지만 핵심을 파악하지 못함.' },
            { type: 'AI 분석', content: '반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.' },
            { type: '상담 기록', content: '"열심히 하는데 왜 점수가 안 오를까요?"라고 고민함.' }
        ]
    },
    {
        id: 'F',
        name: '한지은',
        grade: '중2',
        gender: '여',
        background: '온라인 학습에 적응하지 못하고 오프라인 수업을 선호함. 디지털 기기 사용에 서툼.',
        concern: '디지털 리터러시 부족으로 인한 학습 격차 발생.',
        quantitative: {
            lms_access: { value: 30, average: 85, unit: '%' },
            assignment_submit: { value: 25, average: 85, unit: '%' },
            online_attendance: { value: 50, average: 90, unit: '%' },
            offline_participation: { value: 85, average: 75, unit: '%' }
        },
        qualitative: [
            { type: '관찰', content: '온라인 수업 중 질문을 하지 않고 수동적으로 참여.' },
            { type: '상담 기록', content: '"컴퓨터를 잘 못 다뤄서 과제 제출이 어려워요"라고 말함.' },
            { type: '동료 평가', content: '오프라인에서는 적극적으로 발표하고 참여함.' }
        ]
    }
];

// 현재 상태
let currentCase = null;
let currentStep = 0;
let teamSize = 4;
let teacherNames = [];
let selectedSubject = null; // 랜덤으로 선택된 과목

// 과목 목록
const subjects = ['국어', '수학', '영어', '사회', '과학'];

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// 이벤트 리스너 설정
function setupEventListeners() {
    document.getElementById('setup-btn').addEventListener('click', setupTeam);
    document.getElementById('spin-roulette-btn').addEventListener('click', spinRoulette);
    document.getElementById('start-practice-btn').addEventListener('click', startPractice);
    document.getElementById('next-step1').addEventListener('click', () => goToStep(2));
    document.getElementById('next-step2').addEventListener('click', () => goToStep(3));
    document.getElementById('submit-analysis').addEventListener('click', submitAnalysis);
}

let selectedLeader = null;

// 모둠 설정 확인
function setupTeam() {
    teamSize = parseInt(document.getElementById('team-size').value) || 4;
    
    // 선생님 이름 파싱
    const namesInput = document.getElementById('teacher-names').value.trim();
    if (namesInput) {
        teacherNames = namesInput.split(',').map(name => name.trim()).filter(name => name.length > 0);
    } else {
        // 이름이 없으면 기본 이름 생성
        teacherNames = Array.from({ length: teamSize }, (_, i) => `선생님${i + 1}`);
    }
    
    // 인원 수와 이름 수가 맞지 않으면 경고
    if (teacherNames.length !== teamSize) {
        alert(`입력하신 이름 수(${teacherNames.length}명)와 모둠 인원 수(${teamSize}명)가 일치하지 않습니다.\n이름이 부족하면 기본 이름으로 채워집니다.`);
        // 부족한 이름 채우기
        while (teacherNames.length < teamSize) {
            teacherNames.push(`선생님${teacherNames.length + 1}`);
        }
        // 초과하면 자르기
        teacherNames = teacherNames.slice(0, teamSize);
    }
    
    // 룰렛 생성 및 표시
    createRoulette();
    document.getElementById('setup-phase').querySelector('.input-group').style.display = 'none';
    document.getElementById('roulette-section').classList.remove('hidden');
}

// 룰렛 생성
function createRoulette() {
    const roulette = document.getElementById('roulette-wheel');
    roulette.innerHTML = '';
    
    const numSegments = teacherNames.length;
    const anglePerSegment = 360 / numSegments;
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
        '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#82E0AA',
        '#F1948A', '#85C1E9', '#F7DC6F', '#A8E6CF', '#FFD3A5'
    ];
    
    teacherNames.forEach((name, index) => {
        const segment = document.createElement('div');
        segment.className = 'roulette-segment';
        
        const startAngle = anglePerSegment * index;
        const midAngle = startAngle + anglePerSegment / 2;
        
        // 배경색 설정
        segment.style.backgroundColor = colors[index % colors.length];
        
        // 각 세그먼트를 원형으로 배치하기 위한 계산
        const radius = 50; // 퍼센트
        const centerAngle = midAngle * Math.PI / 180;
        
        // 텍스트 위치 계산 (원의 65% 지점)
        const textX = 50 + 35 * Math.cos(centerAngle - Math.PI / 2);
        const textY = 50 + 35 * Math.sin(centerAngle - Math.PI / 2);
        
        segment.style.background = `conic-gradient(from ${startAngle}deg, ${colors[index % colors.length]} 0deg, ${colors[index % colors.length]} ${anglePerSegment}deg, transparent ${anglePerSegment}deg)`;
        segment.innerHTML = `<span style="position: absolute; left: ${textX}%; top: ${textY}%; transform: translate(-50%, -50%) rotate(${midAngle + 90}deg);">${name}</span>`;
        
        roulette.appendChild(segment);
    });
    
    // 모든 세그먼트를 하나로 합치기 위해 conic-gradient 사용
    const conicColors = teacherNames.map((name, i) => {
        const color = colors[i % colors.length];
        const start = (360 / numSegments) * i;
        const end = (360 / numSegments) * (i + 1);
        return `${color} ${start}deg ${end}deg`;
    }).join(', ');
    
    roulette.style.background = `conic-gradient(${conicColors})`;
    roulette.innerHTML = '';
    
    // 텍스트 오버레이 추가
    teacherNames.forEach((name, index) => {
        const text = document.createElement('div');
        text.className = 'roulette-text';
        const midAngle = (360 / numSegments) * index + (360 / numSegments) / 2;
        const textAngle = (midAngle - 90) * Math.PI / 180;
        const textX = 50 + 35 * Math.cos(textAngle);
        const textY = 50 + 35 * Math.sin(textAngle);
        text.style.left = `${textX}%`;
        text.style.top = `${textY}%`;
        text.style.transform = `translate(-50%, -50%) rotate(${midAngle + 90}deg)`;
        text.textContent = name;
        roulette.appendChild(text);
    });
}

// 룰렛 돌리기
async function spinRoulette() {
    const spinBtn = document.getElementById('spin-roulette-btn');
    const roulette = document.getElementById('roulette-wheel');
    const resultDiv = document.getElementById('roulette-result');
    const startBtn = document.getElementById('start-practice-btn');
    
    spinBtn.disabled = true;
    spinBtn.textContent = '돌리는 중...';
    
    // 랜덤 각도 계산 (최소 3바퀴 이상)
    const spins = 3 + Math.random() * 3;
    const randomIndex = Math.floor(Math.random() * teacherNames.length);
    const angle = 360 / teacherNames.length;
    const finalAngle = spins * 360 + (360 - randomIndex * angle - angle / 2);
    
    // 애니메이션
    roulette.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    roulette.style.transform = `rotate(${finalAngle}deg)`;
    
    await sleep(3000);
    
    selectedLeader = teacherNames[randomIndex];
    
    resultDiv.innerHTML = `
        <div class="leader-result">
            <h3>🎉 조장 선정 완료!</h3>
            <p class="leader-name">조장: <strong>${selectedLeader}</strong> 선생님</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    spinBtn.disabled = false;
    spinBtn.textContent = '룰렛 다시 돌리기 🎰';
}

// 실습 시작
function startPractice() {
    // 랜덤 케이스 선택
    currentCase = studentCases[Math.floor(Math.random() * studentCases.length)];
    
    // 랜덤 과목 선택
    selectedSubject = subjects[Math.floor(Math.random() * subjects.length)];
    
    currentStep = 1;

    // 화면 전환
    document.getElementById('setup-phase').classList.add('hidden');
    document.getElementById('main-phase').classList.remove('hidden');

    // 배경 변경 (1단계: 교실 느낌)
    document.body.className = 'step-1';

    // 1단계 표시
    displayStep1();
    updateProgressBar(1);
}

// 1단계: CASE 설명 읽기
function displayStep1() {
    const content = document.getElementById('case-description');
    content.innerHTML = `
        <h3>Case ${currentCase.id}. ${currentCase.name} (${currentCase.grade}, ${currentCase.gender})</h3>
        <p><strong>배경:</strong> ${currentCase.background}</p>
        <p><strong>교사의 주요 고민:</strong> ${currentCase.concern}</p>
    `;
}

// 2단계: 데이터 살펴보기
function displayStep2() {
    // 제목 옆에 과목명 표시
    const subjectBadge = document.getElementById('step2-subject');
    if (subjectBadge && selectedSubject) {
        subjectBadge.textContent = `[${selectedSubject}]`;
    }
    
    const content = document.getElementById('data-content');
    
    let quantitativeHTML = `<div class="data-section"><h3>📈 정량 데이터</h3><table class="data-table"><thead><tr><th>항목</th><th>학생 수치</th><th>평균</th></tr></thead><tbody>`;
    
    // LMS 접속률
    if (currentCase.quantitative.lms_access) {
        quantitativeHTML += `<tr><td>LMS 접속률</td><td><span class="highlight">${currentCase.quantitative.lms_access.value}${currentCase.quantitative.lms_access.unit}</span></td><td>${currentCase.quantitative.lms_access.average}${currentCase.quantitative.lms_access.unit}</td></tr>`;
    }
    
    // 과제 제출률
    if (currentCase.quantitative.assignment_submit) {
        quantitativeHTML += `<tr><td>과제 제출률</td><td><span class="highlight">${currentCase.quantitative.assignment_submit.value}${currentCase.quantitative.assignment_submit.unit}</span></td><td>${currentCase.quantitative.assignment_submit.average}${currentCase.quantitative.assignment_submit.unit}</td></tr>`;
    }
    
    // 형성평가 점수 추이
    if (currentCase.quantitative.formative_scores) {
        quantitativeHTML += `<tr><td colspan="3"><strong>형성평가 점수 추이:</strong></td></tr>`;
        currentCase.quantitative.formative_scores.forEach(item => {
            quantitativeHTML += `<tr><td>${item.month}</td><td><span class="highlight">${item.score}점</span></td><td>-</td></tr>`;
        });
    }
    
    // 기타 정량 데이터
    if (currentCase.quantitative.problem_time) {
        quantitativeHTML += `<tr><td>문제 풀이 소요 시간</td><td><span class="highlight">${currentCase.quantitative.problem_time.value}</span></td><td>${currentCase.quantitative.problem_time.average}</td></tr>`;
    }
    if (currentCase.quantitative.accuracy) {
        quantitativeHTML += `<tr><td>정답률</td><td><span class="highlight">${currentCase.quantitative.accuracy.value}${currentCase.quantitative.accuracy.unit}</span></td><td>${currentCase.quantitative.accuracy.average}${currentCase.quantitative.accuracy.unit}</td></tr>`;
    }
    if (currentCase.quantitative.group_activity) {
        quantitativeHTML += `<tr><td>조별 활동 참여도</td><td><span class="highlight">${currentCase.quantitative.group_activity.value}${currentCase.quantitative.group_activity.unit}</span></td><td>${currentCase.quantitative.group_activity.average}${currentCase.quantitative.group_activity.unit}</td></tr>`;
    }
    if (currentCase.quantitative.individual_test) {
        quantitativeHTML += `<tr><td>개별 평가 점수</td><td><span class="highlight">${currentCase.quantitative.individual_test.value}${currentCase.quantitative.individual_test.unit}</span></td><td>${currentCase.quantitative.individual_test.average}${currentCase.quantitative.individual_test.unit}</td></tr>`;
    }
    if (currentCase.quantitative.creative_project) {
        quantitativeHTML += `<tr><td>창의 프로젝트 점수</td><td><span class="highlight">${currentCase.quantitative.creative_project.value}${currentCase.quantitative.creative_project.unit}</span></td><td>${currentCase.quantitative.creative_project.average}${currentCase.quantitative.creative_project.unit}</td></tr>`;
    }
    if (currentCase.quantitative.written_test) {
        quantitativeHTML += `<tr><td>필기 평가 점수</td><td><span class="highlight">${currentCase.quantitative.written_test.value}${currentCase.quantitative.written_test.unit}</span></td><td>${currentCase.quantitative.written_test.average}${currentCase.quantitative.written_test.unit}</td></tr>`;
    }
    if (currentCase.quantitative.study_time) {
        quantitativeHTML += `<tr><td>일일 학습 시간</td><td><span class="highlight">${currentCase.quantitative.study_time.value}</span></td><td>${currentCase.quantitative.study_time.average}</td></tr>`;
    }
    if (currentCase.quantitative.test_score) {
        quantitativeHTML += `<tr><td>평가 점수</td><td><span class="highlight">${currentCase.quantitative.test_score.value}${currentCase.quantitative.test_score.unit}</span></td><td>${currentCase.quantitative.test_score.average}${currentCase.quantitative.test_score.unit}</td></tr>`;
    }
    if (currentCase.quantitative.online_attendance) {
        quantitativeHTML += `<tr><td>온라인 수업 출석률</td><td><span class="highlight">${currentCase.quantitative.online_attendance.value}${currentCase.quantitative.online_attendance.unit}</span></td><td>${currentCase.quantitative.online_attendance.average}${currentCase.quantitative.online_attendance.unit}</td></tr>`;
    }
    if (currentCase.quantitative.offline_participation) {
        quantitativeHTML += `<tr><td>오프라인 수업 참여도</td><td><span class="highlight">${currentCase.quantitative.offline_participation.value}${currentCase.quantitative.offline_participation.unit}</span></td><td>${currentCase.quantitative.offline_participation.average}${currentCase.quantitative.offline_participation.unit}</td></tr>`;
    }
    
    quantitativeHTML += '</tbody></table></div>';
    
    // 과목별 정성 데이터 생성
    const qualitativeData = getQualitativeDataBySubject(currentCase, selectedSubject);
    
    let qualitativeHTML = '<div class="data-section"><h3>📝 정성 데이터</h3><ul class="data-list">';
    qualitativeData.forEach(item => {
        qualitativeHTML += `<li><strong>(${item.type})</strong> ${item.content}</li>`;
    });
    qualitativeHTML += '</ul></div>';
    
    content.innerHTML = quantitativeHTML + qualitativeHTML;
}

// 과목별 정성 데이터 생성 함수
function getQualitativeDataBySubject(caseData, subject) {
    const originalQualitative = caseData.qualitative;
    const subjectQualitative = [];
    
    // 각 정성 데이터 항목을 과목에 맞게 변환
    originalQualitative.forEach((item, index) => {
        let newContent = item.content;
        
        // 케이스별, 과목별 변환 로직
        if (caseData.id === 'A') {
            if (index === 0) { // 관찰
                const subjectExpressions = {
                    '국어': '"국어는 왜 배우는지 모르겠어요"라고 자주 말함.',
                    '수학': '"수학은 왜 배우는지 모르겠어요"라고 자주 말함.',
                    '영어': '"영어는 왜 배우는지 모르겠어요"라고 자주 말함.',
                    '사회': '"사회는 왜 배우는지 모르겠어요"라고 자주 말함.',
                    '과학': '"과학은 왜 배우는지 모르겠어요"라고 자주 말함.'
                };
                newContent = subjectExpressions[subject] || item.content;
            }
        } else if (caseData.id === 'B') {
            if (index === 0) { // 관찰
                const subjectExpressions = {
                    '국어': '작문이나 문법 문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.',
                    '수학': '문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.',
                    '영어': '영작이나 문법 문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.',
                    '사회': '서술형 문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.',
                    '과학': '실험 문제나 계산 문제를 틀리면 얼굴이 빨개지고 당황함. 필기는 완벽함.'
                };
                newContent = subjectExpressions[subject] || item.content;
            } else if (index === 1) { // AI 분석
                const subjectExpressions = {
                    '국어': `${subject} 과목의 기본 개념 이해도는 높으나 응용 문제(문학 작품 해석, 서술형)에서 막힘.`,
                    '수학': `${subject} 과목의 기본 개념 이해도는 높으나 응용 문제에서 막힘.`,
                    '영어': `${subject} 과목의 기본 개념 이해도는 높으나 응용 문제(영작, 독해)에서 막힘.`,
                    '사회': `${subject} 과목의 기본 개념 이해도는 높으나 응용 문제(서술형, 자료 해석)에서 막힘.`,
                    '과학': `${subject} 과목의 기본 개념 이해도는 높으나 응용 문제(실험 분석, 문제 해결)에서 막힘.`
                };
                newContent = subjectExpressions[subject] || item.content;
            }
        } else if (caseData.id === 'C') {
            if (index === 0) { // 관찰
                const subjectExpressions = {
                    '국어': `${subject} 과목 조별 활동(토론, 발표)에서는 리더십을 발휘하지만, 개별 과제(독서록, 작문)는 미루는 경향.`,
                    '수학': `${subject} 과목 조별 활동(문제 해결 프로젝트)에서는 리더십을 발휘하지만, 개별 과제(문제 풀이)는 미루는 경향.`,
                    '영어': `${subject} 과목 조별 활동(회화, 역할극)에서는 리더십을 발휘하지만, 개별 과제(영작, 단어 암기)는 미루는 경향.`,
                    '사회': `${subject} 과목 조별 활동(발표, 토론)에서는 리더십을 발휘하지만, 개별 과제(보고서 작성)는 미루는 경향.`,
                    '과학': `${subject} 과목 조별 활동(실험, 프로젝트)에서는 리더십을 발휘하지만, 개별 과제(실험 보고서)는 미루는 경향.`
                };
                newContent = subjectExpressions[subject] || item.content;
            }
        } else if (caseData.id === 'D') {
            if (index === 0) { // 관찰
                const subjectExpressions = {
                    '국어': `${subject} 과목의 창의적 글쓰기나 독후활동에서는 뛰어난 창의성 발휘.`,
                    '수학': `${subject} 과목의 프로젝트나 탐구 과제에서는 뛰어난 창의성 발휘.`,
                    '영어': `${subject} 과목의 창의적 영작이나 역할극에서는 뛰어난 창의성 발휘.`,
                    '사회': `${subject} 과목의 프로젝트나 발표 과제에서는 뛰어난 창의성 발휘.`,
                    '과학': `${subject} 과목의 실험 설계나 탐구 프로젝트에서는 뛰어난 창의성 발휘.`
                };
                newContent = subjectExpressions[subject] || item.content;
            } else if (index === 1) { // AI 분석
                const subjectExpressions = {
                    '국어': `${subject} 과목에서 다양한 관점에서 접근하지만, 정형화된 답안(문법, 문학 해석) 작성에 어려움.`,
                    '수학': `${subject} 과목에서 다양한 해결 방법을 시도하지만, 정형화된 답안(공식 적용) 작성에 어려움.`,
                    '영어': `${subject} 과목에서 다양한 표현을 시도하지만, 정형화된 답안(문법, 번역) 작성에 어려움.`,
                    '사회': `${subject} 과목에서 다양한 관점으로 분석하지만, 정형화된 답안(서술형) 작성에 어려움.`,
                    '과학': `${subject} 과목에서 다양한 실험 방법을 고려하지만, 정형화된 답안(계산 문제) 작성에 어려움.`
                };
                newContent = subjectExpressions[subject] || item.content;
            } else if (index === 2) { // 상담 기록
                newContent = `"${subject} 과제에서 제 방식으로 표현하고 싶은데 점수가 안 나와요"라고 말함.`;
            }
        } else if (caseData.id === 'E') {
            if (index === 0) { // 관찰
                const subjectExpressions = {
                    '국어': `${subject} 과목 노트 필기를 매우 상세하게 하지만 핵심 개념(문법, 작문 기법)을 파악하지 못함.`,
                    '수학': `${subject} 과목 노트 필기를 매우 상세하게 하지만 핵심 개념(공식, 문제 해결 전략)을 파악하지 못함.`,
                    '영어': `${subject} 과목 노트 필기를 매우 상세하게 하지만 핵심 개념(문법, 어휘 활용)을 파악하지 못함.`,
                    '사회': `${subject} 과목 노트 필기를 매우 상세하게 하지만 핵심 개념(개념 이해, 서술형 답안 작성법)을 파악하지 못함.`,
                    '과학': `${subject} 과목 노트 필기를 매우 상세하게 하지만 핵심 개념(개념, 실험 원리)을 파악하지 못함.`
                };
                newContent = subjectExpressions[subject] || item.content;
            } else if (index === 1) { // AI 분석
                const subjectExpressions = {
                    '국어': `${subject} 과목에서 반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.`,
                    '수학': `${subject} 과목에서 반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.`,
                    '영어': `${subject} 과목에서 반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.`,
                    '사회': `${subject} 과목에서 반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.`,
                    '과학': `${subject} 과목에서 반복 학습은 많으나 이해도는 낮음. 학습 패턴 최적화 필요.`
                };
                newContent = subjectExpressions[subject] || item.content;
            } else if (index === 2) { // 상담 기록
                newContent = `"${subject} 과목을 열심히 하는데 왜 점수가 안 오를까요?"라고 고민함.`;
            }
        } else if (caseData.id === 'F') {
            if (index === 0) { // 관찰
                newContent = `${subject} 과목 온라인 수업 중 질문을 하지 않고 수동적으로 참여.`;
            } else if (index === 1) { // 상담 기록
                newContent = `"${subject} 과목 과제를 컴퓨터로 제출하는 게 어려워요"라고 말함.`;
            }
        }
        
        subjectQualitative.push({
            type: item.type,
            content: newContent
        });
    });
    
    return subjectQualitative;
}

// 답변 품질 평가 함수
function evaluateAnswerQuality(answer, questionType) {
    const trimmed = answer.trim();
    
    // 기본 검증
    if (!trimmed || trimmed.length < 3) {
        return { quality: 'poor', reason: '답변이 너무 짧거나 비어있습니다.' };
    }
    
    // 의미 없는 답변 패턴 체크
    const meaninglessPatterns = [
        /^[ㄱ-ㅎㅏ-ㅣ\s]+$/, // 자음/모음만
        /^[a-zA-Z\s]+$/, // 영문만
        /^[0-9\s]+$/, // 숫자만
        /^(몰라|모름|없음|글쎄|잘모르겠|삐용|ㅇㄹ|ㅋㅋ|ㅎㅎ|헤헤|하하|ㅠㅠ|ㅜㅜ|\.\.\.|ㅁ|ㅇ|ㄴ|ㄱ)+$/i, // 의미 없는 단어들
        /^.{1,2}$/ // 1-2자만
    ];
    
    for (let pattern of meaninglessPatterns) {
        if (pattern.test(trimmed)) {
            return { quality: 'poor', reason: '의미 있는 답변을 작성해주세요.' };
        }
    }
    
    // 키워드 기반 품질 평가
    const qualityKeywords = {
        question1: ['동기', '흥미', '집중', '참여', '학습', '태도', '관심', '노력', '습관', '환경', '가정', '부모', '관리', '지원'],
        question2: ['강점', '잠재력', '능력', '재능', '특기', '관심', '호기심', '창의', '협업', '리더십', '긍정', '긍정적'],
        question3: ['일치', '모순', '일관', '연결', '관련', '데이터', '수치', '관찰', '정량', '정성', '일치하', '모순되', '일관되']
    };
    
    const keywords = qualityKeywords[questionType] || [];
    const hasRelevantKeywords = keywords.some(keyword => trimmed.includes(keyword));
    
    // 길이와 키워드 기반 평가
    if (trimmed.length < 10) {
        return { quality: 'poor', reason: '답변이 너무 짧습니다. 구체적인 분석을 작성해주세요.' };
    } else if (trimmed.length < 20 && !hasRelevantKeywords) {
        return { quality: 'fair', reason: '답변을 더 구체화하면 좋겠습니다.' };
    } else if (trimmed.length >= 20 && hasRelevantKeywords) {
        return { quality: 'good', reason: '' };
    } else if (trimmed.length >= 30) {
        return { quality: 'good', reason: '' };
    } else {
        return { quality: 'fair', reason: '답변을 더 구체화하면 좋겠습니다.' };
    }
}

// 케이스별 분석 가이드 제공
function getAnalysisGuide(questionNum) {
    const guides = {
        1: {
            poor: '데이터를 다시 살펴보세요. 예를 들어, LMS 접속률, 과제 제출률, 평가 점수 추이 등을 종합하여 학습을 방해하는 요인을 찾아보세요. (예: 학습 동기 부족, 가정 환경, 학습 습관 등)',
            fair: '좋은 시작입니다. 구체적인 데이터 수치를 언급하면서 저해 요인을 명확히 설명해보세요.',
            good: ''
        },
        2: {
            poor: '정성 데이터를 주의 깊게 살펴보세요. 학생이 관심 있어 하는 것, 잘하는 것, 긍정적으로 보이는 행동 등을 찾아보세요. (예: 게임에 대한 관심, 협업 능력, 창의성 등)',
            fair: '강점을 찾으셨네요. 그 강점이 어떻게 학습에 연결될 수 있는지 구체적으로 설명해보세요.',
            good: ''
        },
        3: {
            poor: '정량 데이터(수치)와 정성 데이터(관찰, 상담 기록 등)를 비교해보세요. 서로 일치하는지, 아니면 다른 면을 보여주는지 분석해보세요.',
            fair: '데이터 연결성을 파악하려는 시도가 보입니다. 구체적인 예시를 들어 설명해보세요.',
            good: ''
        }
    };
    
    return guides[questionNum] || {};
}

// 무작위로 선생님 선정 (인원에 따라 다름)
function selectRandomTeachers() {
    if (teacherNames.length >= 3) {
        // 3명 이상: 중복 없이 3명 선발 (각 문항당 1명)
        const shuffled = [...teacherNames].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3);
    } else if (teacherNames.length === 2) {
        // 2명: 중복 선택 허용하여 3명 선발
        const selected = [];
        for (let i = 0; i < 3; i++) {
            selected.push(teacherNames[Math.floor(Math.random() * 2)]);
        }
        return selected;
    } else {
        // 1명: 같은 사람이 3개 문항 모두 답변
        return [teacherNames[0], teacherNames[0], teacherNames[0]];
    }
}

// 선생님 선정 애니메이션
async function showTeacherSelectionAnimation(selectedTeachers) {
    const animationDiv = document.getElementById('teacher-selection-animation');
    animationDiv.classList.remove('hidden');
    
    // 모든 선생님 이름 표시
    let animationHTML = '<div class="animation-container"><h3>🎲 선생님 선정 중...</h3><div class="teacher-pool">';
    teacherNames.forEach((name, index) => {
        animationHTML += `<div class="teacher-card" id="teacher-${index}">${name}</div>`;
    });
    animationHTML += '</div></div>';
    animationDiv.innerHTML = animationHTML;
    
    // 애니메이션: 모든 카드 깜빡이기
    const allCards = document.querySelectorAll('.teacher-card');
    for (let i = 0; i < 3; i++) {
        allCards.forEach(card => {
            card.classList.add('blinking');
        });
        await sleep(300);
        allCards.forEach(card => {
            card.classList.remove('blinking');
        });
        await sleep(200);
    }
    
    // 선정된 선생님 강조
    const selectedIndices = selectedTeachers.map(teacher => 
        teacherNames.findIndex(name => name === teacher)
    );
    
    for (let i = 0; i < selectedTeachers.length; i++) {
        const teacherIndex = selectedIndices[i];
        const card = document.getElementById(`teacher-${teacherIndex}`);
        if (card) {
            await sleep(500);
            card.classList.add('selected');
            card.textContent = `${selectedTeachers[i]} ✓`;
        }
    }
    
    await sleep(1000);
    animationDiv.classList.add('hidden');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 선생님 선정하기 버튼 클릭
let selectedTeachersGlobal = [];

async function selectTeachers() {
    // 선정 버튼 비활성화
    const selectBtn = document.getElementById('select-teachers-btn');
    selectBtn.disabled = true;
    selectBtn.textContent = '선정 중...';
    
    // 무작위로 선생님 선정
    selectedTeachersGlobal = selectRandomTeachers();
    
    // 선정 애니메이션 표시
    await showTeacherSelectionAnimation(selectedTeachersGlobal);
    
    // 선정 결과 표시
    const selectedTeachersDiv = document.getElementById('selected-teachers');
    let resultHTML = '<div class="teacher-selection"><h3>🎯 답변할 선생님 선정 결과</h3>';
    
    if (teacherNames.length >= 3) {
        // 3명 이상: 각 문항당 1명씩
        resultHTML += `
            <div class="assignment-list">
                <div class="assignment-item">
                    <span class="question-number">문항 1번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[0]} 선생님</span>
                </div>
                <div class="assignment-item">
                    <span class="question-number">문항 2번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[1]} 선생님</span>
                </div>
                <div class="assignment-item">
                    <span class="question-number">문항 3번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[2]} 선생님</span>
                </div>
            </div>
        `;
        
        // 각 문항에 해당 선생님 이름 표시
        document.getElementById('label1').innerHTML = 
            `1. (학습 태도) 데이터에서 발견된 가장 큰 학습 저해 요인은 무엇인가요? <span class="assigned-teacher">→ ${selectedTeachersGlobal[0]} 선생님</span>`;
        document.getElementById('label2').innerHTML = 
            `2. (정서/심리) 학생의 숨겨진 강점이나 잠재력은 무엇인가요? <span class="assigned-teacher">→ ${selectedTeachersGlobal[1]} 선생님</span>`;
        document.getElementById('label3').innerHTML = 
            `3. (데이터 연결) 정량적 수치와 정성적 관찰 내용이 일치하나요, 아니면 모순되나요? 그 이유는? <span class="assigned-teacher">→ ${selectedTeachersGlobal[2]} 선생님</span>`;
    } else if (teacherNames.length === 2) {
        // 2명: 중복 선택 가능
        resultHTML += `
            <div class="assignment-list">
                <div class="assignment-item">
                    <span class="question-number">문항 1번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[0]} 선생님</span>
                </div>
                <div class="assignment-item">
                    <span class="question-number">문항 2번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[1]} 선생님</span>
                </div>
                <div class="assignment-item">
                    <span class="question-number">문항 3번</span>
                    <span class="teacher-name">${selectedTeachersGlobal[2]} 선생님</span>
                </div>
            </div>
        `;
        
        document.getElementById('label1').innerHTML = 
            `1. (학습 태도) 데이터에서 발견된 가장 큰 학습 저해 요인은 무엇인가요? <span class="assigned-teacher">→ ${selectedTeachersGlobal[0]} 선생님</span>`;
        document.getElementById('label2').innerHTML = 
            `2. (정서/심리) 학생의 숨겨진 강점이나 잠재력은 무엇인가요? <span class="assigned-teacher">→ ${selectedTeachersGlobal[1]} 선생님</span>`;
        document.getElementById('label3').innerHTML = 
            `3. (데이터 연결) 정량적 수치와 정성적 관찰 내용이 일치하나요, 아니면 모순되나요? 그 이유는? <span class="assigned-teacher">→ ${selectedTeachersGlobal[2]} 선생님</span>`;
    } else {
        // 1명: 모든 문항 답변
        resultHTML += `
            <p class="selected-teacher-name">${selectedTeachersGlobal[0]} 선생님께서 모든 문항에 답변해주세요!</p>
        `;
    }
    
    resultHTML += '</div>';
    selectedTeachersDiv.innerHTML = resultHTML;
    selectedTeachersDiv.classList.remove('hidden');
    
    // 선정 섹션 숨기고 답변 섹션 표시
    document.getElementById('teacher-selection-section').classList.add('hidden');
    document.getElementById('answer-section').classList.remove('hidden');
    
    // 답변 입력 필드 활성화
    document.getElementById('answer1').disabled = false;
    document.getElementById('answer2').disabled = false;
    document.getElementById('answer3').disabled = false;
}

// 3단계: 분석 제출
function submitAnalysis() {
    processAnalysis();
}

// 교육학자 관점에서의 학생 사례 분석
function getEducationalAnalysis(caseId) {
    const analyses = {
        'A': {
            title: '교육학자 관점: 학습 동기 부족 학생의 특성 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>내재적 동기 부족</strong>과 <strong>학습 목적 인식 부재</strong>가 핵심 문제입니다. 
                형성평가 점수가 80점에서 45점으로 급락한 것은 단순한 학습 능력 문제가 아니라 
                <strong>의미 부여의 부재</strong>에서 비롯됩니다. 게임에 대한 높은 관심과 수학에 대한 무관심의 대비는 
                <strong>즉각적 피드백과 성취감</strong>의 차이를 보여줍니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>게임에 대한 집중력과 관심은 <strong>높은 인지 능력</strong>과 <strong>도전 의식</strong>을 보여줍니다. 
                이러한 특성을 학습에 연결할 수 있다면 큰 변화가 가능합니다. 
                <strong>게이미피케이션(Gamification)</strong> 접근법이나 
                <strong>프로젝트 기반 학습</strong>을 통해 학습 목적을 체감할 수 있도록 지원해야 합니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(LMS 접속률 40%, 과제 제출률 20%)와 정성 데이터("수학은 왜 배우는지 모르겠어요")는 
                <strong>완벽하게 일치</strong>합니다. 이는 단순한 게으름이 아니라 <strong>의미 부여의 부재</strong>를 명확히 보여줍니다. 
                부모의 맞벌이로 인한 방과 후 관리 부재는 환경적 요인으로, 
                <strong>학교 내에서의 의미 있는 학습 경험 제공</strong>이 더욱 중요합니다.</p>
            `
        },
        'B': {
            title: '교육학자 관점: 시험 불안 및 완벽주의 학생의 특성 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>과도한 완벽주의</strong>와 <strong>시험 불안</strong>이 학습 효율을 저해하고 있습니다. 
                LMS 접속률과 과제 제출률이 100%인 것은 높은 성취 동기를 보여주지만, 
                정답률 60%와 문제 풀이 시간이 평균의 2배인 것은 <strong>인지 과부하</strong>와 
                <strong>과도한 자기 검증</strong>을 의미합니다. 
                "문제를 틀리면 얼굴이 빨개지고 당황함"은 <strong>실패에 대한 두려움</strong>이 학습을 방해하고 있음을 보여줍니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>완벽한 필기와 100% 과제 제출률은 <strong>높은 책임감</strong>과 <strong>성실성</strong>을 보여줍니다. 
                개념 이해도가 높다는 것은 <strong>기초 학력이 탄탄</strong>함을 의미합니다. 
                이러한 강점을 바탕으로 <strong>실수 허용 문화</strong>를 만들고, 
                <strong>과정 중심 평가</strong>를 통해 불안을 완화할 수 있습니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(높은 참여도, 낮은 정답률)와 정성 데이터(완벽한 필기, 당황하는 모습)는 
                <strong>일관된 패턴</strong>을 보입니다. 높은 노력 대비 낮은 성과는 
                <strong>학습 전략의 비효율성</strong>을 의미하며, 
                <strong>메타인지 전략 교육</strong>과 <strong>스트레스 관리 기법</strong>이 필요합니다.</p>
            `
        },
        'C': {
            title: '교육학자 관점: 협업형 학습자 특성 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>사회적 학습자(Social Learner)</strong> 특성을 보이며, 
                개별 학습보다 협업 학습에서 높은 성과를 보입니다. 
                개별 평가 점수 55%와 조별 활동 참여도 95%의 차이는 
                <strong>학습 스타일과 평가 방식의 불일치</strong>를 보여줍니다. 
                "혼자 공부하는 게 재미없어요"는 <strong>사회적 상호작용</strong>이 학습 동기의 핵심임을 의미합니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>조별 활동에서의 리더십과 창의성은 <strong>협업 능력</strong>과 <strong>의사소통 능력</strong>이 뛰어남을 보여줍니다. 
                이러한 강점은 <strong>21세기 핵심 역량</strong>에 해당하며, 
                <strong>프로젝트 기반 학습(PBL)</strong>이나 <strong>협력 학습</strong>을 통해 
                개별 학습 능력도 함께 향상시킬 수 있습니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(조별 활동 95%, 개별 평가 55%)와 정성 데이터(리더십 발휘, 개별 과제 미루기)는 
                <strong>명확한 대조</strong>를 보입니다. 이는 학습 환경에 따른 성과 차이를 의미하며, 
                <strong>학습 환경 다양화</strong>와 <strong>개별 학습 전략 교육</strong>이 필요합니다.</p>
            `
        },
        'D': {
            title: '교육학자 관점: 창의적 학습자와 전통적 평가의 괴리 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>창의적 사고</strong>와 <strong>다양한 관점</strong>을 가진 학습자입니다. 
                창의 프로젝트 점수 95%와 필기 평가 점수 50%의 차이는 
                <strong>평가 방식과 학습자 특성의 불일치</strong>를 보여줍니다. 
                "제 방식으로 표현하고 싶은데 점수가 안 나와요"는 
                <strong>표현 방식의 다양성</strong>이 인정되지 않아 좌절감을 느끼고 있음을 의미합니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>포트폴리오와 프로젝트에서의 뛰어난 창의성은 <strong>고차원적 사고 능력</strong>을 보여줍니다. 
                이러한 능력은 <strong>미래 사회가 요구하는 역량</strong>이며, 
                <strong>다양한 평가 방식</strong>(포트폴리오, 프로젝트, 자기평가 등)을 통해 
                학습자의 잠재력을 최대한 발휘할 수 있습니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(창의 프로젝트 95%, 필기 평가 50%)와 정성 데이터(다양한 관점, 정형화된 답안 어려움)는 
                <strong>평가 방식에 따른 성과 차이</strong>를 명확히 보여줍니다. 
                이는 <strong>다중지능 이론</strong>의 관점에서 학습자의 강점을 인정하고, 
                <strong>평가의 다양화</strong>가 필요함을 시사합니다.</p>
            `
        },
        'E': {
            title: '교육학자 관점: 학습 전략 부재 학생의 특성 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>높은 학습 의욕</strong>에도 불구하고 <strong>효율적인 학습 전략</strong>이 부재합니다. 
                일일 학습 시간 3시간(평균 1.5시간의 2배)에도 불구하고 평가 점수 65%는 
                <strong>학습 방법의 비효율성</strong>을 보여줍니다. 
                "상세한 노트 필기"와 "핵심 파악 실패"는 <strong>정보 처리 전략</strong>의 문제를 의미합니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>높은 학습 의욕(과제 제출률 95%, LMS 접속률 90%)과 성실한 태도는 
                <strong>학습에 대한 긍정적 태도</strong>를 보여줍니다. 
                이러한 동기를 바탕으로 <strong>메타인지 전략</strong>과 
                <strong>효율적인 학습 방법</strong>을 교육한다면 큰 성장이 가능합니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(높은 참여도, 낮은 성과)와 정성 데이터(상세한 필기, 핵심 파악 실패)는 
                <strong>일관된 패턴</strong>을 보입니다. 이는 <strong>학습 전략 교육</strong>의 필요성을 명확히 보여주며, 
                <strong>인지 전략 훈련</strong>과 <strong>학습 방법 다양화</strong>가 필요합니다.</p>
            `
        },
        'F': {
            title: '교육학자 관점: 디지털 리터러시 격차 학생의 특성 분석',
            content: `
                <p><strong>1. 학습 저해 요인 분석:</strong></p>
                <p>이 학생은 <strong>디지털 리터러시 부족</strong>으로 인해 학습 기회에 접근하지 못하고 있습니다. 
                온라인 수업 출석률 50%와 오프라인 수업 참여도 85%의 차이는 
                <strong>학습 환경에 따른 성과 차이</strong>를 보여줍니다. 
                "컴퓨터를 잘 못 다뤄서 과제 제출이 어려워요"는 
                <strong>기술적 장벽</strong>이 학습을 방해하고 있음을 의미합니다.</p>
                
                <p><strong>2. 숨겨진 강점 및 잠재력:</strong></p>
                <p>오프라인에서의 적극적인 발표와 참여는 <strong>높은 학습 의욕</strong>과 
                <strong>의사소통 능력</strong>을 보여줍니다. 이러한 강점을 바탕으로 
                <strong>디지털 기기 사용 교육</strong>과 <strong>단계적 디지털 환경 적응</strong>을 지원한다면 
                학습 격차를 해소할 수 있습니다.</p>
                
                <p><strong>3. 데이터 연결성 분석:</strong></p>
                <p>정량 데이터(낮은 온라인 참여, 높은 오프라인 참여)와 정성 데이터(디지털 기기 어려움, 오프라인 적극성)는 
                <strong>명확한 대조</strong>를 보입니다. 이는 <strong>디지털 격차</strong>의 문제이며, 
                <strong>디지털 리터러시 교육</strong>과 <strong>하이브리드 학습 환경</strong> 구축이 필요합니다.</p>
            `
        }
    };
    
    return analyses[caseId] || { title: '교육학자 관점 분석', content: '<p>분석 내용이 준비되지 않았습니다.</p>' };
}

// 전문적인 교육학자 의견서 생성
function generateExpertOpinion(answers) {
    const expertOpinion = getExpertAnalysis(currentCase.id, selectedSubject, answers);
    return expertOpinion;
}

// 교육학자 관점에서의 전문적이고 날카로운 분석
function getExpertAnalysis(caseId, subject, userAnswers) {
    let opinionHTML = `
        <div class="expert-opinion">
            <h3>🎓 교육학자 전문 의견서</h3>
            <div class="opinion-header">
                <p><strong>분석 대상:</strong> Case ${currentCase.id}. ${currentCase.name} (${currentCase.grade}, ${currentCase.gender}) - ${subject} 과목</p>
                <p><strong>분석 일자:</strong> ${new Date().toLocaleDateString('ko-KR')}</p>
            </div>
    `;
    
    // 1. 제시된 답변에 대한 날카로운 비판 및 평가
    opinionHTML += `
        <div class="opinion-section">
            <h4>1. 제시된 분석에 대한 전문가 평가</h4>
    `;
    
    userAnswers.forEach((answer, index) => {
        const eval = evaluateAnswerQuality(answer.answer, `question${index + 1}`);
        const questionLabels = ['학습 저해 요인', '숨겨진 강점/잠재력', '데이터 연결성'];
        
        opinionHTML += `
            <div class="answer-evaluation">
                <h5>${index + 1}. ${questionLabels[index]} 분석</h5>
                <div class="user-answer-box">
                    <strong>제시된 분석:</strong>
                    <p>${answer.answer || '(분석 없음)'}</p>
                </div>
        `;
        
        if (eval.quality === 'poor') {
            opinionHTML += `
                <div class="expert-critique negative">
                    <strong>⚠️ 비판적 평가:</strong>
                    <p>제시된 분석은 구체성과 깊이가 부족합니다. 데이터와의 연결성이 약하며, 교육학적 근거가 명확하지 않습니다. 
                    ${subject} 과목의 특성을 고려한 구체적인 분석이 필요합니다.</p>
                    <p><strong>개선 방향:</strong> 정량적 수치와 정성적 관찰을 구체적으로 연결하여 분석의 타당성을 높여야 합니다.</p>
                </div>
            `;
        } else if (eval.quality === 'fair') {
            opinionHTML += `
                <div class="expert-critique moderate">
                    <strong>📊 중립적 평가:</strong>
                    <p>분석의 방향은 적절하나, 더욱 구체적인 근거와 예시가 필요합니다. 
                    ${subject} 과목의 특성과 학생의 데이터를 더욱 깊이 있게 연결하여 분석의 설득력을 높일 수 있습니다.</p>
                </div>
            `;
        } else {
            opinionHTML += `
                <div class="expert-critique positive">
                    <strong>✅ 긍정적 평가:</strong>
                    <p>데이터를 바탕으로 한 체계적인 분석이 이루어졌습니다. 다만, ${subject} 과목 특성을 더욱 명확히 반영한다면 
                    더욱 전문적인 분석이 될 것입니다.</p>
                </div>
            `;
        }
        
        opinionHTML += `</div>`;
    });
    
    opinionHTML += `</div>`;
    
    // 2. 전문가 관점에서의 종합 분석
    const expertAnalysis = getEducationalAnalysis(caseId);
    opinionHTML += `
        <div class="opinion-section">
            <h4>2. 전문가 종합 분석</h4>
            <div class="expert-analysis-content">
                ${expertAnalysis.content}
            </div>
        </div>
    `;
    
    // 3. 구체적인 개선 방안 및 제언
    opinionHTML += `
        <div class="opinion-section">
            <h4>3. 전문가 제언: ${subject} 과목 특성을 고려한 지원 방안</h4>
            <div class="recommendations">
    `;
    
    const recommendations = getSubjectSpecificRecommendations(caseId, subject);
    recommendations.forEach((rec, index) => {
        opinionHTML += `
            <div class="recommendation-item">
                <strong>${index + 1}. ${rec.title}</strong>
                <p>${rec.content}</p>
            </div>
        `;
    });
    
    opinionHTML += `
            </div>
        </div>
        <div class="opinion-footer">
            <p><strong>결론:</strong> 학생 개별 특성과 ${subject} 과목의 특성을 종합적으로 고려한 맞춤형 지원 방안의 수립이 필요합니다. 
            단순한 문제 해결보다는 학생의 잠재력을 발휘할 수 있는 환경 조성에 중점을 두어야 합니다.</p>
        </div>
        </div>
    `;
    
    return opinionHTML;
}

// 과목별 맞춤형 제언 생성
function getSubjectSpecificRecommendations(caseId, subject) {
    const recommendations = {
        'A': [
            {
                title: '학습 목적 인식 강화',
                content: `${subject} 과목의 실생활 활용 사례를 게임적 요소와 연결하여 학습 동기를 자극할 수 있습니다. 
                프로젝트 기반 학습을 통해 즉각적인 피드백과 성취감을 제공하세요.`
            },
            {
                title: '학습 환경 개선',
                content: `방과 후 관리 부재를 보완하기 위해 학교 내 ${subject} 과목 학습 지원 프로그램을 운영하고, 
                AI 기반 맞춤형 학습 콘텐츠를 활용하여 학생의 흥미를 유지하세요.`
            }
        ],
        'B': [
            {
                title: '시험 불안 완화 전략',
                content: `${subject} 과목에서 실수를 학습의 과정으로 인식하도록 하는 문화를 조성하세요. 
                형성평가와 과정 중심 평가를 강화하여 완벽주의 성향을 완화합니다.`
            },
            {
                title: '학습 전략 최적화',
                content: `${subject} 과목의 기본 개념 이해도가 높다는 강점을 활용하여, 
                응용 문제 해결을 위한 단계적 접근법을 지도하세요.`
            }
        ],
        'C': [
            {
                title: '협업 학습 활용',
                content: `${subject} 과목의 조별 활동을 확대하고, 협업 과정에서 개별 학습 능력도 함께 향상시킬 수 있는 
                하이브리드 학습 모델을 도입하세요.`
            },
            {
                title: '개별 학습 동기 부여',
                content: `${subject} 과목의 개별 과제를 협업 활동의 연장선으로 설계하여, 
                사회적 학습 특성을 활용한 개별 학습 습관 형성을 지원하세요.`
            }
        ],
        'D': [
            {
                title: '평가 방식 다양화',
                content: `${subject} 과목에서 포트폴리오, 프로젝트, 자기평가 등 다양한 평가 방식을 도입하여 
                창의적 재능을 인정하고 평가하세요.`
            },
            {
                title: '표현 방식 다양화',
                content: `${subject} 과목의 답안 작성 방식을 다양화하여, 
                정형화된 답안뿐만 아니라 창의적인 표현을 인정하는 평가 기준을 마련하세요.`
            }
        ],
        'E': [
            {
                title: '메타인지 전략 교육',
                content: `${subject} 과목의 학습 전략을 체계적으로 교육하고, 
                핵심 개념 파악을 위한 정보 처리 전략을 습득하도록 지원하세요.`
            },
            {
                title: '효율적 학습 방법 안내',
                content: `${subject} 과목에서 노트 필기의 질을 높이고, 
                시간 대비 학습 효율을 개선할 수 있는 구체적인 학습 방법을 제시하세요.`
            }
        ],
        'F': [
            {
                title: '디지털 리터러시 교육',
                content: `${subject} 과목의 디지털 학습 환경에 점진적으로 적응할 수 있도록 
                기초 디지털 기기 사용법과 학습 플랫폼 활용법을 체계적으로 교육하세요.`
            },
            {
                title: '하이브리드 학습 환경',
                content: `${subject} 과목에서 오프라인과 온라인을 연결하는 하이브리드 학습 환경을 구축하여, 
                오프라인에서의 강점을 온라인 학습에도 연결할 수 있도록 지원하세요.`
            }
        ]
    };
    
    return recommendations[caseId] || [];
}

// 분석 처리 및 피드백
function processAnalysis() {
    const answer1 = document.getElementById('answer1').value.trim();
    const answer2 = document.getElementById('answer2').value.trim();
    const answer3 = document.getElementById('answer3').value.trim();
    
    if (!answer1 || !answer2 || !answer3) {
        alert('모든 항목에 답변을 입력해주세요.');
        return;
    }
    
    const answers = [
        { answer: answer1, question: 1 },
        { answer: answer2, question: 2 },
        { answer: answer3, question: 3 }
    ];
    
    // 전문적인 교육학자 의견서 생성
    const expertOpinion = generateExpertOpinion(answers);
    
    const feedback = document.getElementById('analysis-feedback');
    feedback.innerHTML = expertOpinion;
    feedback.classList.remove('hidden');
    
    // 최종 메시지 표시
    const finalMessage = document.getElementById('final-message');
    finalMessage.innerHTML = `
        <p>✨ 전문가 의견서가 제시되었습니다!</p>
        <p style="margin-top: 15px; font-size: 1.1em;">교육학적 관점에서의 날카로운 분석을 참고하여 학생 지원 방안을 수립해보세요. 💙</p>
    `;
    finalMessage.classList.remove('hidden');
}

// 3단계: CASE 정보 및 데이터 표시
function displayStep3Info() {
    // CASE 설명 표시
    const caseInfoDiv = document.getElementById('step3-case-info');
    let caseInfoHTML = `
        <div class="step3-case-content">
            <h3>📖 CASE 설명</h3>
            <div class="case-content">
                <h4>Case ${currentCase.id}. ${currentCase.name} (${currentCase.grade}, ${currentCase.gender})${selectedSubject ? ` - ${selectedSubject} 과목` : ''}</h4>
                <p><strong>배경:</strong> ${currentCase.background}</p>
                <p><strong>교사의 주요 고민:</strong> ${currentCase.concern}</p>
            </div>
        </div>
    `;
    caseInfoDiv.innerHTML = caseInfoHTML;
    
    // 데이터 표시 (2단계와 동일한 형식)
    const dataInfoDiv = document.getElementById('step3-data-info');
    
    let quantitativeHTML = `<div class="data-section"><h3>📈 정량 데이터</h3><table class="data-table"><thead><tr><th>항목</th><th>학생 수치</th><th>평균</th></tr></thead><tbody>`;
    
    // LMS 접속률
    if (currentCase.quantitative.lms_access) {
        quantitativeHTML += `<tr><td>LMS 접속률</td><td><span class="highlight">${currentCase.quantitative.lms_access.value}${currentCase.quantitative.lms_access.unit}</span></td><td>${currentCase.quantitative.lms_access.average}${currentCase.quantitative.lms_access.unit}</td></tr>`;
    }
    
    // 과제 제출률
    if (currentCase.quantitative.assignment_submit) {
        quantitativeHTML += `<tr><td>과제 제출률</td><td><span class="highlight">${currentCase.quantitative.assignment_submit.value}${currentCase.quantitative.assignment_submit.unit}</span></td><td>${currentCase.quantitative.assignment_submit.average}${currentCase.quantitative.assignment_submit.unit}</td></tr>`;
    }
    
    // 형성평가 점수 추이
    if (currentCase.quantitative.formative_scores) {
        quantitativeHTML += `<tr><td colspan="3"><strong>형성평가 점수 추이:</strong></td></tr>`;
        currentCase.quantitative.formative_scores.forEach(item => {
            quantitativeHTML += `<tr><td>${item.month}</td><td><span class="highlight">${item.score}점</span></td><td>-</td></tr>`;
        });
    }
    
    // 기타 정량 데이터
    if (currentCase.quantitative.problem_time) {
        quantitativeHTML += `<tr><td>문제 풀이 소요 시간</td><td><span class="highlight">${currentCase.quantitative.problem_time.value}</span></td><td>${currentCase.quantitative.problem_time.average}</td></tr>`;
    }
    if (currentCase.quantitative.accuracy) {
        quantitativeHTML += `<tr><td>정답률</td><td><span class="highlight">${currentCase.quantitative.accuracy.value}${currentCase.quantitative.accuracy.unit}</span></td><td>${currentCase.quantitative.accuracy.average}${currentCase.quantitative.accuracy.unit}</td></tr>`;
    }
    if (currentCase.quantitative.group_activity) {
        quantitativeHTML += `<tr><td>조별 활동 참여도</td><td><span class="highlight">${currentCase.quantitative.group_activity.value}${currentCase.quantitative.group_activity.unit}</span></td><td>${currentCase.quantitative.group_activity.average}${currentCase.quantitative.group_activity.unit}</td></tr>`;
    }
    if (currentCase.quantitative.individual_test) {
        quantitativeHTML += `<tr><td>개별 평가 점수</td><td><span class="highlight">${currentCase.quantitative.individual_test.value}${currentCase.quantitative.individual_test.unit}</span></td><td>${currentCase.quantitative.individual_test.average}${currentCase.quantitative.individual_test.unit}</td></tr>`;
    }
    if (currentCase.quantitative.creative_project) {
        quantitativeHTML += `<tr><td>창의 프로젝트 점수</td><td><span class="highlight">${currentCase.quantitative.creative_project.value}${currentCase.quantitative.creative_project.unit}</span></td><td>${currentCase.quantitative.creative_project.average}${currentCase.quantitative.creative_project.unit}</td></tr>`;
    }
    if (currentCase.quantitative.written_test) {
        quantitativeHTML += `<tr><td>필기 평가 점수</td><td><span class="highlight">${currentCase.quantitative.written_test.value}${currentCase.quantitative.written_test.unit}</span></td><td>${currentCase.quantitative.written_test.average}${currentCase.quantitative.written_test.unit}</td></tr>`;
    }
    if (currentCase.quantitative.study_time) {
        quantitativeHTML += `<tr><td>일일 학습 시간</td><td><span class="highlight">${currentCase.quantitative.study_time.value}</span></td><td>${currentCase.quantitative.study_time.average}</td></tr>`;
    }
    if (currentCase.quantitative.test_score) {
        quantitativeHTML += `<tr><td>평가 점수</td><td><span class="highlight">${currentCase.quantitative.test_score.value}${currentCase.quantitative.test_score.unit}</span></td><td>${currentCase.quantitative.test_score.average}${currentCase.quantitative.test_score.unit}</td></tr>`;
    }
    if (currentCase.quantitative.online_attendance) {
        quantitativeHTML += `<tr><td>온라인 수업 출석률</td><td><span class="highlight">${currentCase.quantitative.online_attendance.value}${currentCase.quantitative.online_attendance.unit}</span></td><td>${currentCase.quantitative.online_attendance.average}${currentCase.quantitative.online_attendance.unit}</td></tr>`;
    }
    if (currentCase.quantitative.offline_participation) {
        quantitativeHTML += `<tr><td>오프라인 수업 참여도</td><td><span class="highlight">${currentCase.quantitative.offline_participation.value}${currentCase.quantitative.offline_participation.unit}</span></td><td>${currentCase.quantitative.offline_participation.average}${currentCase.quantitative.offline_participation.unit}</td></tr>`;
    }
    
    quantitativeHTML += '</tbody></table></div>';
    
    // 과목별 정성 데이터 생성
    const qualitativeData = getQualitativeDataBySubject(currentCase, selectedSubject);
    
    let qualitativeHTML = '<div class="data-section"><h3>📝 정성 데이터</h3><ul class="data-list">';
    qualitativeData.forEach(item => {
        qualitativeHTML += `<li><strong>(${item.type})</strong> ${item.content}</li>`;
    });
    qualitativeHTML += '</ul></div>';
    
    dataInfoDiv.innerHTML = quantitativeHTML + qualitativeHTML;
}

// 단계 이동
function goToStep(step) {
    // 현재 단계 숨기기
    document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
    
    // 다음 단계 표시
    if (step === 2) {
        displayStep2();
        document.getElementById('step2-content').classList.remove('hidden');
        // 배경 변경 (2단계: 교실 느낌)
        document.body.className = 'step-2';
    } else if (step === 3) {
        // 3단계 진입 시 초기 상태 설정
        displayStep3Info(); // CASE 정보 및 데이터 표시
        document.getElementById('step3-content').classList.remove('hidden');
        // 배경 변경 (3단계: 학교 느낌)
        document.body.className = 'step-3';
    }
    
    currentStep = step;
    updateProgressBar(step);
}

// 다음 단계로
function goToNextStep() {
    if (currentStep < 3) {
        goToStep(currentStep + 1);
    }
}

// 진행 상황 표시 업데이트
function updateProgressBar(step) {
    for (let i = 1; i <= 3; i++) {
        const stepEl = document.getElementById(`step-${i}`);
        if (i <= step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    }
}


