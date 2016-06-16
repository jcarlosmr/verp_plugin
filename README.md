# VERP Plugin

This plugin sets the mail_from using VERP

The idea behind this plugin is to try to create an smtp for a bulk mail server.

In the company that i work has an event notification service for our clients.
Actualy our bulk mail service provider have a little problems.
Then i proposed to realize a research how to do the notifications, and then i found haraka.

This plugin is part of a biggest project to create a little service to do this task

## First
* [Install nodejs][1]
* [Install haraka][2]

## Plugin Installation

`npm install --save https://github.com/jcarlosmr/verp_plugin.git`

Add `verp_plugin` to your config/plugins after the data.header plugin

## Configuration

Configure the domain property in the config/verp_domain.ini file

```
[rpdomain]
;domain=bulkserver.domain.com
```

[1]: http://nodejs.org/
[2]: https://github.com/haraka/Haraka/blob/master/README.md
