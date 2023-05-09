import csv
import json

filename = "marketing_dummy_data.csv"

# CSVファイルを読み込み、全ての行をリストとして取得
with open(filename, mode="r", newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    data = [row for row in reader]

# ネストされたJSONデータを構築
nested_data = []

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

for index, column_name in enumerate(column_names):
    parent_node = {
        "id": index + 1,
        "name": column_name,
        "children": []
    }

    # 各データ行を子ノードとして追加
    for record_index, row in enumerate(data):
        child_node = {
            "id": (index + 1) * 1000 + record_index + 1,
            "name": row[column_name],
            "value": record_index + 1
        }
        parent_node["children"].append(child_node)

    nested_data.append(parent_node)

# JSONファイルとして出力
output_filename = "nested_data.json"
with open(output_filename, "w", encoding="utf-8") as f:
    json.dump(nested_data, f, ensure_ascii=False, indent=2)

print(f"JSONファイル '{output_filename}' を生成しました。")
