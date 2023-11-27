# 非同期処理が入った layout をネストしたらどうなるのか?

直列実行されてたらパフォーマンスが悪いよな…と思って確認してみた。

**結論: 並行処理されてるので問題なし**

# 検証方法:

1. `npm install` などしてセットアップを行う
2. `npm run dev` を行う
3. localhost:3000/foo にアクセスする
4. コンソールのログを確認


確認すると、 app/layout.tsx と app/foo/layout.tsx が同時にレンダリングされ始めていることが分かる。また、両方が完了したら初めてブラウザで表示されることも分かる。

つまり、 app/layout.tsx でログインセッションをフェッチして、app/foo/layout.tsx でユーザーデータをフェッチといったことをするとき、ログインセッションのフェッチが完了後にユーザーデータのフェッチが始まるといったことはない。
