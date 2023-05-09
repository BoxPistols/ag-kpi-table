import pandas as pd

csv_file = "marketing_dummy_data.csv"
json_file = "marketing_dummy_data.json"

df = pd.read_csv(csv_file, encoding="utf-8")
df.to_json(json_file, orient="records", force_ascii=False)

print(f"JSONファイル '{json_file}' を生成しました。")
