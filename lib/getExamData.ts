import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12";
import { exam201207 } from "../data/exams/2012/07";
import { exam201212 } from "../data/exams/2012/12";
import { exam201307 } from "../data/exams/2013/07";
import { exam201312 } from "../data/exams/2013/12";
import { exam201407 } from "../data/exams/2014/07";
import { exam201412 } from "../data/exams/2014/12";
import { exam201512 } from "../data/exams/2015/12";
import { exam201607 } from "../data/exams/2016/07";
import { exam201612 } from "../data/exams/2016/12";
import { exam201707 } from "../data/exams/2017/07";
import { exam201712 } from "../data/exams/2017/12";
import { exam201812 } from "../data/exams/2018/12";
import { exam201907 } from "../data/exams/2019/07";
import { exam202212 } from "../data/exams/2022/12";


const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  "2011-12": exam201112,
  "2012-07": exam201207,
  "2012-12": exam201212,
  "2013-07": exam201307,
  "2013-12": exam201312,
  "2014-07": exam201407,
  "2014-12": exam201412,
  "2015-12": exam201512,
  "2016-07": exam201607,
  "2016-12": exam201612,
  "2017-07": exam201607,
  "2017-12": exam201612,
  "2018-12": exam201812,
  "2019-07": exam201907,
  "2022-12": exam202212,
};

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];
  if (!examData) return null;
  if (!examData.kanji || !examData.bunpou || !examData.dokkai) {
    console.error(`Invalid data structure for ${key}`);
    return null;
  }
  return examData;
}

export function getAvailableExams() {
  return Object.keys(EXAMS_DATA).map((key) => {
    const [year, period] = key.split("-");
    const monthName = period === "07" ? "July" : "December";
    return { key, year, period, label: `${year} ${monthName}` };
  });
}
