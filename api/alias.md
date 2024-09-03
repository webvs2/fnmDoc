# Use

```sh
fnm alias [OPTIONS] <TO_VERSION> <NAME>

```

## example

<p>让我们把某个版本名字设置成哥斯拉</p>

```sh
fnm install 22.7.0
## Next
fnm alias 22.7.0 Godzilla
## Next
fnm use Godzilla
```

 <p> 如果你全部做到了，恭喜你，有了一个可以执行node 脚本的哥斯拉 :tada:</p>
 <p>如果你想删除哥斯拉（😭）,那你可以狠心的使用下面的命令</p>

```sh
fnm unalias 22.7.0 Godzilla
```

## introduce

安装一个新的 Node.js 版本。使用此命令时，需要指定要安装的版本号或版本别名
