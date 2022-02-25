# message_channel_js
- メインスレッドを介さないで、ワーカー同士でメッセージをやり取りする
- MessageChannelを作成し、送信するMessagePortを指定することでワーカー同士でメッセージをやり取りする

```
$ node main.js
worker1 received message: 'message from worker2'
worker2 received message: 'message from worker1'
worker1 received message: 'message from worker2'
worker2 received message: 'message from worker1'
worker1 received message: 'message from worker2'
worker2 received message: 'message from worker1'
```
