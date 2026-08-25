name: Generate Activity Graph

on:
  schedule:
    - cron: '0 0 * * *'   # runs once a day at midnight UTC
  workflow_dispatch:        # lets you trigger it manually from the Actions tab

permissions:
  contents: write

jobs:
  build-graph:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Generate graph
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GH_USERNAME: ashilohfaith-debug
        run: node generate-graph.mjs

      - name: Commit updated graph
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add activity-graph.svg
          git diff --quiet --cached || git commit -m "chore: update activity graph"
          git push
