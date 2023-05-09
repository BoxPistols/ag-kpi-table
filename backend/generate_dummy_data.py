import json
import random
from faker import Faker

fake = Faker("ja_JP")

column_names = [
    "プロダクト",
    "プライス",
    "プロモーション",
    "プレイス",
    "ターゲット",
    "セグメント",
    "ポジショニング",
    "ブランディング",
    "パッケージ",
    "価格戦略",
    "市場シェア",
    "市場調査",
    "競合分析",
    "製品開発",
    "製品ライフサイクル",
    "顧客満足度",
    "顧客維持",
    "リピート購入",
    "アップセル",
    "クロスセル",
    "リファラル",
    "オムニチャネル",
    "オンライン広告",
    "オフライン広告",
    "SNSマーケティング",
    "SEO",
    "SEM",
    "CTR",
    "コンバージョン率",
    "ROAS",
]

titles = [f"特徴 {i}" for i in range(1, 6)]
record_count = [random.randint(200, 500) for _ in range(5)]


def create_random_record():
    record = {}
    for column_name in random.sample(column_names, random.randint(20, len(column_names))):
        if column_name.endswith("率") or column_name.endswith("確率"):
            record[column_name] = round(random.uniform(0, 1), 3)
        else:
            record[column_name] = random.randint(10, 1000000)
    return record


data = [
    {
        "id": i,
        "name": f"KPI指標 {i}",
        "columns": column_names,
        "children": [
            {
                "title": title,
                "items": [create_random_record() for _ in range(record_count[index])]
            }
            for index, title in enumerate(titles)
        ]
    }
    for i in range(1, 6)
]

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)


# import json
# import random
# from faker import Faker

# fake = Faker("ja_JP")

# column_names = [
#     "プロダクト",
#     "プライス",
#     "プロモーション",
#     "プレイス",
#     "ターゲット",
#     "セグメント",
#     "ポジショニング",
#     "ブランディング",
#     "パッケージ",
#     "価格戦略",
#     "市場シェア",
#     "市場調査",
#     "競合分析",
#     "製品開発",
#     "製品ライフサイクル",
#     "顧客満足度",
#     "顧客維持",
#     "リピート購入",
#     "アップセル",
#     "クロスセル",
#     "リファラル",
#     "オムニチャネル",
#     "オンライン広告",
#     "オフライン広告",
#     "SNSマーケティング",
#     "SEO",
#     "SEM",
#     "CTR",
#     "コンバージョン率",
#     "ROAS",
# ]


# def create_random_record():
#     record = {}
#     num_columns = min(len(column_names), random.randint(20, 50))
#     for column_name in random.sample(column_names, num_columns):
#         if random.random() < 0.5:
#             record[column_name] = fake.word()
#         else:
#             record[column_name] = random.randint(1, 100)
#     return record


# data = [
#     {
#         "id": i,
#         "name": fake.word(),
#         "columns": column_names,
#         "children": [
#             {
#                 "title": f"{fake.word()}特徴量セット_{i}",
#                 "items": [create_random_record() for _ in range(random.randint(200, 500))]
#             } for i in range(1, 6)
#         ]
#     } for i in range(1, 6)
# ]

# with open("data.json", "w", encoding="utf-8") as f:
#     json.dump(data, f, ensure_ascii=False, indent=2)


# import csv
# import json
# import random
# from faker import Faker

# fake = Faker("ja_JP")

# # テーブルの設定
# num_tables = 5
# min_columns = 20
# max_columns = 30
# min_records = 200
# max_records = 280

# column_prefix = "マーケティング指標"

# # テーブルのデータを格納するリスト
# tables = []

# for i in range(num_tables):
#     num_columns = random.randint(min_columns, max_columns)
#     num_records = random.randint(min_records, max_records)

#     # カラム名を生成
#     column_names = [f"{column_prefix} {j+1}" for j in range(num_columns)]

#     # レコードを生成
#     records = []
#     for _ in range(num_records):
#         record = [fake.name() if j == 0 else fake.random_number(digits=3)
#                   for j in range(num_columns)]
#         records.append(record)

#     # テーブルデータを追加
#     tables.append({
#         "column_names": column_names,
#         "records": records
#     })

#     # CSVファイルに出力
#     with open(f"table_{i+1}.csv", "w", newline="", encoding="utf-8") as csvfile:
#         writer = csv.writer(csvfile)
#         writer.writerow(column_names)
#         writer.writerows(records)

# # JSONファイルに出力
# with open("tables.json", "w", encoding="utf-8") as jsonfile:
#     json.dump(tables, jsonfile, ensure_ascii=False, indent=2)


# import csv
# import random
# from faker import Faker

# fake = Faker("ja_JP")

# column_names = [
#     "プロダクト",
#     "プライス",
#     "プロモーション",
#     "プレイス",
#     "ターゲット",
#     "セグメント",
#     "ポジショニング",
#     "ブランディング",
#     "パッケージ",
#     "価格戦略",
#     "市場シェア",
#     "市場調査",
#     "競合分析",
#     "製品開発",
#     "製品ライフサイクル",
#     "顧客満足度",
#     "顧客維持",
#     "リピート購入",
#     "アップセル",
#     "クロスセル",
#     "リファラル",
#     "オムニチャネル",
#     "オンライン広告",
#     "オフライン広告",
#     "SNSマーケティング",
#     "SEO",
#     "SEM",
#     "CTR",
#     "コンバージョン率",
#     "ROAS",
# ]

# num_records = 525
# filename = "marketing_dummy_data.csv"

# with open(filename, mode="w", newline="", encoding="utf-8") as f:
#     writer = csv.DictWriter(f, fieldnames=column_names)
#     writer.writeheader()

#     for _ in range(num_records):
#         row_data = {column_name: fake.word() for column_name in column_names}
#         writer.writerow(row_data)

# print(f"CSVファイル '{filename}' を生成しました。")
