// Manifest semua soal - reference ke JSON files
const EXAMS_REGISTRY = {
  "2011-07": "/asset/n3/2011/07.json",
  "2011-12": "/asset/n3/2011/12.json",
  "2012-07": "/asset/n3/2012/07.json",
  "2012-12": "/asset/n3/2012/12.json",
  "2013-07": "/asset/n3/2013/07.json",
  "2013-12": "/asset/n3/2013/12.json",
  "2014-07": "/asset/n3/2014/07.json",
  "2014-12": "/asset/n3/2014/12.json",
  "2015-07": "/asset/n3/2015/07.json",
  "2015-12": "/asset/n3/2015/12.json",
  "2016-07": "/asset/n3/2016/07.json",
  "2016-12": "/asset/n3/2016/12.json",
  "2017-07": "/asset/n3/2017/07.json",
  "2017-12": "/asset/n3/2017/12.json",
  "2018-07": "/asset/n3/2018/07.json",
  "2018-12": "/asset/n3/2018/12.json",
  "2019-07": "/asset/n3/2019/07.json",
  "2019-12": "/asset/n3/2019/12.json",
  "2020-07": "/asset/n3/2020/07.json",
  "2020-12": "/asset/n3/2020/12.json",
  "2021-07": "/asset/n3/2021/07.json",
  "2021-12": "/asset/n3/2021/12.json",
  "2022-07": "/asset/n3/2022/07.json",
  "2022-12": "/asset/n3/2022/12.json",
  "2023-07": "/asset/n3/2023/07.json",
  "2023-12": "/asset/n3/2023/12.json",
  "2024-07": "/asset/n3/2024/07.json",
  "2024-12": "/asset/n3/2024/12.json",
  "2025-07": "/asset/n3/2025/07.json",
  "2025-12": "/asset/n3/2025/12.json",
} as const;

type ExamKey = keyof typeof EXAMS_REGISTRY;

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}` as ExamKey;
  const filePath = EXAMS_REGISTRY[key];
  
  if (!filePath) return null;
  
  try {
    const baseUrl = "https://sieraaa13.github.io/my-jlpt-web";
    const response = await fetch(`${baseUrl}${filePath}`, {
      next: { revalidate: 86400 },
    });
    
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading exam:", error);
    return null;
  }
}
