// 副本數據
const dungeonData = [
    {
        name: '霸龍長堡壘群 - 復古的隱詛咒',
        difficulty: '單人',
        openings: [0, 0, 0, 0],
        total: 0,
        extra: '75, 100'
    },
    {
        name: '霸龍長堡壘群 - 復古的隱詛咒',
        difficulty: '普通',
        openings: [360, 600, 0, 0],
        total: 960,
        extra: '75, 100'
    },
    {
        name: '霸龍長堡壘群 - 復古的隱詛咒',
        difficulty: '困難',
        openings: [560, 1120, 0, 0],
        total: 1680,
        extra: '175, 275'
    },
    {
        name: '霸龍長堡壘群 - 貪渴的機械探索',
        difficulty: '單人',
        openings: [0, 0, 0, 0],
        total: 0,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 貪渴的機械探索',
        difficulty: '普通',
        openings: [400, 720, 0, 0],
        total: 1120,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 貪渴的機械探索',
        difficulty: '困難',
        openings: [640, 1440, 0, 0],
        total: 2080,
        extra: '225, 375'
    },
    {
        name: '霸龍長堡壘群 - 深夜鬼蜘蛛',
        difficulty: '單人',
        openings: [0, 0, 0, 0],
        total: 0,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 深夜鬼蜘蛛',
        difficulty: '普通',
        openings: [600, 600, 1200, 0],
        total: 2400,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 深夜鬼蜘蛛',
        difficulty: '困難',
        openings: [1000, 1000, 1000, 1500],
        total: 4500,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 李炎亞郡奪香族',
        difficulty: '普通',
        openings: [800, 800, 800, 1200],
        total: 3600,
        extra: '100, 150'
    },
    {
        name: '霸龍長堡壘群 - 李炎亞郡奪香族',
        difficulty: '困難',
        openings: [1000, 1000, 1000, 1400],
        total: 4400,
        extra: '300, 300'
    }
];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const tableBody = document.getElementById('tableBody');
const noResults = document.getElementById('noResults');

// 渲染表格
function renderTable(data) {
    tableBody.innerHTML = '';

    if (data.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    data.forEach(dungeon => {
        const row = document.createElement('tr');
        const difficultyClass = getDifficultyClass(dungeon.difficulty);

        row.innerHTML = `
            <td>${dungeon.name}</td>
            <td><span class="difficulty ${difficultyClass}">${dungeon.difficulty}</span></td>
            <td>${dungeon.openings[0]}</td>
            <td>${dungeon.openings[1]}</td>
            <td>${dungeon.openings[2]}</td>
            <td>${dungeon.openings[3]}</td>
            <td><strong>${dungeon.total}</strong></td>
            <td>${dungeon.extra}</td>
        `;

        tableBody.appendChild(row);
    });
}

// 獲取難度級別的樣式類
function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case '單人':
            return 'hunter';
        case '普通':
            return 'normal';
        case '困難':
            return 'hard';
        default:
            return '';
    }
}

// 篩選數據
function filterData() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDifficulty = difficultyFilter.value;

    const filtered = dungeonData.filter(dungeon => {
        const matchesSearch = dungeon.name.toLowerCase().includes(searchTerm);
        const matchesDifficulty = !selectedDifficulty || dungeon.difficulty === selectedDifficulty;

        return matchesSearch && matchesDifficulty;
    });

    renderTable(filtered);
}

// 事件監聽
searchInput.addEventListener('input', filterData);
difficultyFilter.addEventListener('change', filterData);

// 初始化
renderTable(dungeonData);