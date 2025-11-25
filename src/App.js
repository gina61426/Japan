import React, { useState } from "react";
import { MapPin, Info, Users, ArrowRight } from "lucide-react";

export const tripData = [
  {
    id: "day1",
    date: "11/28 (四)",
    location: "東京",
    weather: "晴時多雲 12°C",
    events: [
      {
        time: "航班",
        title: "NH852 前往東京",
        desc: "台北松山(TSA) -> 東京羽田(HND)",
        type: "flight",
        icon: "✈️",
      },
      {
        time: "晚間",
        title: "入住 東京帝國酒店",
        desc: "經典奢華，位置絕佳。",
        type: "hotel",
        icon: "🏨",
        geo: { lat: 35.6734, lng: 139.7593, name: "Imperial Hotel Tokyo" },
      },
    ],
  },
  {
    id: "day2",
    date: "11/29 (五)",
    location: "東京 -> 名古屋",
    weather: "晴天 14°C",
    events: [
      {
        time: "12:00",
        title: "退房 Check-out",
        desc: "準備前往東京車站",
        type: "activity",
        icon: "🧳",
      },
      {
        time: "交通",
        title: "新幹線 NOZOMI 369",
        desc: "東京 -> 名古屋",
        type: "train",
        icon: "🚄",
        highlight: true,
        details: [
          "9號車 16-A: 大姐",
          "9號車 16-B: 二姐",
          "9號車 16-C: 爸",
          "9號車 16-D: 君佩",
          "9號車 7-C: 佳鈺",
          "9號車 7-D: 媽媽",
        ],
      },
      {
        time: "入住",
        title: "TIAD, Autograph Collection",
        desc: "名古屋傲途格精選酒店",
        type: "hotel",
        icon: "🏨",
        geo: {
          lat: 35.1638,
          lng: 136.9083,
          name: "TIAD, Autograph Collection",
        },
      },
      {
        time: "晚餐",
        title: "懷石 八泉 (Hassent)",
        desc: "訂位 6 人",
        type: "food",
        icon: "🍱",
        geo: { lat: 35.1352, lng: 136.9764, name: "Kaiseki Hassent" },
      },
    ],
  },
  {
    id: "day3",
    date: "11/30 (六)",
    location: "名古屋近郊",
    weather: "多雲 13°C",
    events: [
      {
        time: "10:00",
        title: "包車一日遊 (10小時)",
        desc: "名古屋市區 -> 永保寺 -> 四季櫻 -> 香嵐溪 -> 名古屋",
        type: "car",
        icon: "🚐",
        details: ["賞楓名所：香嵐溪", "小原四季櫻：櫻花與紅葉共演"],
      },
      {
        time: "晚餐",
        title: "晚餐自理",
        desc: "自由探索名古屋美食",
        type: "food",
        icon: "🍜",
      },
    ],
  },
  {
    id: "day4",
    date: "12/1 (日)",
    location: "名古屋",
    weather: "晴天 15°C",
    events: [
      {
        time: "白天",
        title: "名古屋市區觀光",
        desc: "名古屋城、德川園、東山動植物園",
        type: "sightseeing",
        icon: "🏯",
        geo: { lat: 35.1847, lng: 136.9, name: "名古屋城" },
      },
      {
        time: "18:00",
        title: "焼肉 雪月花 栄",
        desc: "訂位 6 人 (Tanaka Satoru)",
        type: "food",
        icon: "🥩",
        geo: { lat: 35.1687, lng: 136.908, name: "焼肉 雪月花 栄" },
      },
    ],
  },
  {
    id: "day5",
    date: "12/2 (一)",
    location: "名古屋 -> 琵琶湖",
    weather: "陰天 11°C",
    events: [
      {
        time: "12:00",
        title: "退房 Check-out",
        desc: "",
        type: "activity",
        icon: "🧳",
      },
      {
        time: "13:30",
        title: "包車前往琵琶湖",
        desc: "預計 15:30 抵達",
        type: "car",
        icon: "🚐",
      },
      {
        time: "入住",
        title: "琵琶湖萬豪酒店",
        desc: "Lake Biwa Marriott Hotel",
        type: "hotel",
        icon: "🏨",
        geo: { lat: 35.109, lng: 135.9458, name: "Lake Biwa Marriott Hotel" },
      },
      {
        time: "18:30",
        title: "近江かど萬 (Kadoman)",
        desc: "近江牛專門店 晚餐訂位",
        type: "food",
        icon: "🥩",
        geo: { lat: 35.0766, lng: 135.9328, name: "Omi Beef Kadoman" },
      },
    ],
  },
  {
    id: "day6",
    date: "12/3 (二)",
    location: "滋賀",
    weather: "多雲 10°C",
    events: [
      {
        time: "全日",
        title: "滋賀觀光",
        desc: "教林坊、浮御堂(滿月寺)、白鬚神社(水中鳥居)、近江八幡(彥根城)",
        type: "sightseeing",
        icon: "⛩️",
        geo: { lat: 35.2897, lng: 136.008, name: "白鬚神社" },
      },
      { time: "晚餐", title: "晚餐待定", desc: "", type: "food", icon: "🍽️" },
    ],
  },
  {
    id: "day7",
    date: "12/4 (三)",
    location: "琵琶湖 -> 金澤",
    weather: "雨轉陰 9°C",
    events: [
      {
        time: "09:30",
        title: "退房 & 包車出發",
        desc: "前往金澤，沿途觀光",
        type: "car",
        icon: "🚐",
      },
      {
        time: "中途",
        title: "海津大崎 & 氣比神宮",
        desc: "道の駅 藤樹の里あどがわ 休息",
        type: "sightseeing",
        icon: "📷",
      },
      {
        time: "中途",
        title: "那谷寺",
        desc: "奇岩遊仙境",
        type: "sightseeing",
        icon: "🍂",
      },
      {
        time: "18:30",
        title: "抵達金澤 & 結束包車",
        desc: "入住 THE SANRAKU HOTEL KANAZAWA",
        type: "hotel",
        icon: "🏨",
        geo: {
          lat: 36.5707,
          lng: 136.6576,
          name: "THE SANRAKU HOTEL KANAZAWA",
        },
      },
      {
        time: "18:30",
        title: "Zeniya (錢屋)",
        desc: "日本料理 晚餐訂位",
        type: "food",
        icon: "🍱",
        geo: { lat: 36.5623, lng: 136.6534, name: "Zeniya Kanazawa" },
      },
    ],
  },
  {
    id: "day8",
    date: "12/5 (四)",
    location: "金澤",
    weather: "多雲 8°C",
    events: [
      {
        time: "全日",
        title: "金澤市區巡禮",
        desc: "兼六園、金澤城公園、玉泉園、石川四高紀念公園",
        type: "sightseeing",
        icon: "🌳",
        geo: { lat: 36.562, lng: 136.6625, name: "Kenroku-en" },
      },
      {
        time: "晚餐",
        title: "近江町市場",
        desc: "海鮮丼、螃蟹",
        type: "food",
        icon: "🦀",
        geo: { lat: 36.5718, lng: 136.6555, name: "Omicho Market" },
      },
    ],
  },
  {
    id: "day9",
    date: "12/6 (五)",
    location: "金澤",
    weather: "多雲 8°C",
    events: [
      {
        time: "全日",
        title: "古都風情散策",
        desc: "長町武家屋敷跡、茶屋街、尾山神社",
        type: "sightseeing",
        icon: "🍵",
        geo: { lat: 36.5739, lng: 136.6669, name: "Higashi Chaya District" },
      },
      { time: "晚餐", title: "晚餐自理", desc: "", type: "food", icon: "🍽️" },
    ],
  },
  {
    id: "day10",
    date: "12/7 (六)",
    location: "金澤 -> 東京",
    weather: "晴天 13°C",
    events: [
      {
        time: "10:05",
        title: "新幹線 Kagayaki 508",
        desc: "前往東京 (Gran Class 頭等艙)",
        type: "train",
        icon: "🚅",
        highlight: true,
        details: ["12號車 1-B, 1-C", "12號車 2-B, 2-C", "12號車 4-B, 4-C"],
      },
      {
        time: "12:36",
        title: "抵達東京",
        desc: "轉搭計程車直奔飯店",
        type: "taxi",
        icon: "🚕",
      },
      {
        time: "入住",
        title: "Janu Tokyo",
        desc: "麻布台之丘 Azabudai Hills",
        type: "hotel",
        icon: "🏨",
        geo: { lat: 35.6605, lng: 139.7408, name: "Janu Tokyo" },
      },
      {
        time: "下午",
        title: "賞楓行程",
        desc: "明治神宮外苑、日比谷公園、新宿御苑",
        type: "sightseeing",
        icon: "🍁",
      },
      {
        time: "17:00",
        title: "Ebisu Yoroniku",
        desc: "晚餐訂位 (至 19:30)",
        type: "food",
        icon: "🥩",
        geo: { lat: 35.6468, lng: 139.7088, name: "Ebisu Yoroniku" },
      },
    ],
  },
  {
    id: "day11",
    date: "12/8 (日)",
    location: "東京近郊",
    weather: "晴天 12°C",
    events: [
      {
        time: "早上",
        title: "高尾山 & 昭和紀念公園",
        desc: "觀賞楓葉與銀杏 (搭乘中央線)",
        type: "sightseeing",
        icon: "🍁",
        geo: { lat: 35.6253, lng: 139.2435, name: "Mount Takao" },
      },
      {
        time: "20:30",
        title: "Ginza Kitagawa",
        desc: "晚餐訂位",
        type: "food",
        icon: "🍣",
        geo: { lat: 35.6713, lng: 139.7645, name: "Ginza Kitagawa" },
      },
    ],
  },
  {
    id: "day12",
    date: "12/9 (一)",
    location: "東京 -> 台北",
    weather: "晴天",
    events: [
      {
        time: "10:00",
        title: "退房 Check-out",
        desc: "前往羽田機場",
        type: "activity",
        icon: "🧳",
      },
      {
        time: "10:40",
        title: "抵達機場 Check-in",
        desc: "預留時間逛免稅店",
        type: "flight",
        icon: "✈️",
      },
      {
        time: "12:40",
        title: "航班 NH853",
        desc: "東京羽田(HND) -> 台北松山(TSA)",
        type: "flight",
        icon: "🛫",
      },
    ],
  },
];

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const currentTrip = tripData[activeDay];

  const openMap = (geo) => {
    if (!geo) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lng}&query_place_id=${geo.name}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-10">
      {/* 頂部導航卡片 */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-gray-800">日本家族旅行 🇯🇵</h1>
            <p className="text-xs text-gray-500">12天11夜 • 東京/名古屋/金澤</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">
              {currentTrip.date}
            </div>
            <div className="text-xs text-gray-500">{currentTrip.weather}</div>
          </div>
        </div>

        {/* 天數滑動條 */}
        <div className="flex overflow-x-auto py-2 px-2 hide-scrollbar bg-gray-50/50">
          {tripData.map((day, idx) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(idx)}
              className={`flex-shrink-0 px-4 py-1.5 mx-1 rounded-full text-sm font-medium transition-all ${
                activeDay === idx
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Day {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 主要行程區 */}
      <div className="max-w-md mx-auto px-4 mt-4">
        <div className="mb-4 ml-1">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mr-2">
            📍 {currentTrip.location}
          </span>
        </div>
        <div className="space-y-4">
          {currentTrip.events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 relative overflow-hidden"
            >
              {/* 左側時間與圖示 */}
              <div className="flex flex-col items-center min-w-[3.5rem]">
                <span className="text-sm font-bold text-gray-400 mb-1">
                  {event.time}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl
                  ${
                    event.type === "food"
                      ? "bg-orange-100"
                      : event.type === "train"
                      ? "bg-green-100"
                      : event.type === "hotel"
                      ? "bg-purple-100"
                      : "bg-blue-50"
                  }
                `}
                >
                  {event.icon}
                </div>
                {idx !== currentTrip.events.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-100 absolute top-14 left-[2.6rem] -z-10" />
                )}
              </div>

              {/* 右側內容 */}
              <div className="flex-1 pb-2">
                <h3 className="font-bold text-gray-800 text-lg leading-tight">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 whitespace-pre-line">
                  {event.desc}
                </p>

                {/* 座位表/詳細資訊區塊 (重點功能) */}
                {event.highlight && event.details && (
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2 text-yellow-800 font-bold text-xs uppercase tracking-wide">
                      <Users size={14} />
                      座位安排 / 重點資訊
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {event.details.map((detail, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-700 bg-white px-2 py-1 rounded border border-yellow-100 shadow-sm"
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 導航按鈕 */}
                {event.geo && (
                  <button
                    onClick={() => openMap(event.geo)}
                    className="mt-3 flex items-center gap-1.5 text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1.5 rounded-lg active:bg-blue-100 transition-colors"
                  >
                    <MapPin size={16} />
                    導航去這裡
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="h-10"></div> {/* 底部留白 */}
      </div>
    </div>
  );
}
