let dining_all = ['学1', '学2', '学3', '学4', '学5', '留园', '清真', '出去', '校内其他'];
let dining_near = ['学1', '学3', '学5', '留园', '清真'];
let wind = {
    '学1': [
        { 'floor': '一层', 'window': ['1号窗口淮南牛肉汤、豆浆', '2号窗口大饼夹一切', '4号窗口煲仔饭', '5号窗口三叔公面', '6号窗口山东煎饼', '7号窗口好粥道', '8号窗口杭州小笼包', '11-15号窗口基础大伙菜', '16号窗口好年水饺', '17号窗口陕西扯面', '18号窗口花样主食', '20号窗口云吞、米线'] },
        { 'floor': '二层', 'window': ['1号窗口脆皮鸡米饭', '2号窗口粗粮细作', '3-4号窗口教工餐小碗菜、精品菜', '5-6号窗口小火锅', '7号窗口粉小二', '8号窗口面夫子', '11号窗口盖浇饭', '13号窗口锡纸烧', '14号窗口兰州拉面', '15号窗口重庆小面、拌面', '16号窗口水煮肉片', '17号窗口五谷渔粉', '18号窗口纸包鱼、焖面', '19号窗口麻辣香锅'] }
    ],
    '学2': [
        { 'floor': '一层', 'window': ['无数据'] },
        { 'floor': '二层', 'window': ['无数据'] }
    ],
    '学3': [
        { 'floor': '一层', 'window': ['1号窗口麻辣烫', '2号窗口豆花饭', '3号窗口苕粉', '4号窗口鸡腿肉拌饭', '5号窗口东北打卤面', '6号窗口饼卷', '7号窗口铁板饭', '9-13号窗口基础大伙', '14号窗口煎饼', '15号窗口铁板炒饭/炒饼', '17号窗口水饺', '18-19号窗口刀削面'] },
        { 'floor': '二层', 'window': ['1号窗口麻辣香锅', '3号窗口石锅拌饭', '4号窗口板面/盖饭', '5号窗口炸鸡', '8号窗口炸串', '10号窗口米饭套餐', '11号萌锅蒸饭', '12-13号窗口烤盘饭', '18-19号窗口重庆小面'] }
    ],
    '学4': [
        { 'floor': '一层', 'window': ['5号精品菜、6-10号基础伙', '11号窗口包子馒头花卷', '15号三叔公面条', '16-17号窗口水饺', '18号烤盘饭', '19号炒饭', '20号各种粥', '21-23号窗口各种面包、饼', '25号煲仔饭', '26号蜜雪冰城', '27号小卖部'] },
        { 'floor': '二层', 'window': ['1号炸鸡汉堡', '2号-3号手抓饼', '4-5号牛肉饭', '6-7号拌饭', '8-10号麻辣烫 鸭血粉丝', '11-12号拉面', '13-15号盖浇饭', '18-20号刀削面', '21-23号窗口重庆小面', '24-25号麻辣香锅、黄焖鸡米饭'] }
    ],
    '学5': [
        { 'floor': '一层', 'window': ['1-2号窗口F+牛肉饭', '5-9号窗口基本伙', '10-11号窗口热干菜', '13号窗口水饺', '14号窗口三叔公面条', '15-16号窗口扒饭', '17号窗口掉渣饼', '18号窗口羊汤', '19号窗口营养粥/炒饭', '20号窗口云吞', '21号窗口麻辣香锅/麻辣烫', '22-23号窗口刀削面'] },
        { 'floor': '二层', 'window': ['无数据'] }
    ],
    '清真': [
        { 'floor': '一层', 'window': ['2号窗口麻辣香锅', '3号窗口烤鱼', '4号-6号窗口基础伙', '7号窗口纸包鱼、泡泡鸡', '8号-9号窗口牛肉拉面、拌面、水饺'] }
    ],
    '留园': [
        { 'floor': '一层', 'window': ['1.2号窗口麻辣烫、麻辣香锅、麻辣拌', '5-7号窗口基础大伙菜', '8号窗口渔粉', '9号窗口烤盘饭', '10-13号窗口基础大伙菜', '14.15号窗口干锅煎肉饭', '16号窗口铁板炒饭、炒饼', '17.18号窗口主烤大人', '21-23号窗口面条', '24号窗口煎饼', '25号窗口炸串', '26号窗口米线', '27号窗口砂锅面', '28号窗口刀削面', '29.30号窗口饺子'] },
        { 'floor': '二层', 'window': ['无数据'] }
    ],
    '出去': [{ 'floor': '无数据', 'window': ['无数据'] }],
    '校内其他': [{ 'floor': '无数据', 'window': ['青园', '平园小火锅', '齐园'] }]
};
function geteat(choice) {
    const d = choice == 1 ? dining_all : dining_near;
    const hall = d[Math.floor(Math.random() * d.length)];
    const { floor, window } = wind[hall][Math.floor(Math.random() * Object.keys(wind[hall]).length)];
    const win = window[Math.floor(Math.random() * window.length)];
    document.getElementById('knoweat').innerHTML = `${hall}@${floor}：${win}`.replace(/[\@：]无数据/g, '');
}

function handleHallSelection() {
    const halls = document.querySelectorAll('input[name="hall"]:checked');
    halls.forEach((hall) => {
        geteat(hall.value);
    });
}

const inputElements = document.querySelectorAll('input[name="hall"]');
inputElements.forEach((inputElement) => {
    inputElement.addEventListener('change', handleHallSelection);
});

function share() {
    if (!navigator.share) {
        alert("该页面暂不支持分享");
    } else {
        navigator.share({
            title: window.location.title,
            url: window.location.href,
            text: document.getElementById('knoweat').innerHTML
        });
    }
}