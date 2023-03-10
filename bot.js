const handleUser= require('./Functions/handleUser')

async function bot(bot) {

    bot.command("getid", async(ctx)=>{
      await handleUser(ctx)
        let { message_id } = await ctx.replyWithMarkdown(`Hi @${ctx.message.from.username} đ \n\nâ Please Note Your ID: ${"```"}${ctx.message.from.id}${"```"}\n\nâ ď¸ this message will be auto-deleted in 30 secs`,{reply_to_message_id: ctx.message.message_id})
        setTimeout(async () => {
            ctx.deleteMessage(message_id)
        }, process.env.COUNTDOWN)
    })

    bot.hears('Hi', async(ctx)=>{
      await handleUser(ctx)
        let { message_id } = await ctx.replyWithMarkdown(`Hi @${ctx.message.from.username} đ \n\nâ Please Note Your ID: ${"```"}${ctx.message.from.id}${"```"}\n\nâ ď¸ this message will be auto-deleted in 30 secs`,{reply_to_message_id: ctx.message.message_id})
        setTimeout(async () => {
            ctx.deleteMessage(message_id)
        }, process.env.COUNTDOWN)
    })

    bot.hears('hi', async(ctx)=>{
      await handleUser(ctx)
        let { message_id } = await ctx.replyWithMarkdown(`Hi @${ctx.message.from.username} đ \n\nâ Please Note Your ID: ${"```"}${ctx.message.from.id}${"```"}\n\nâ ď¸ this message will be auto-deleted in 30 secs`,{reply_to_message_id: ctx.message.message_id})
        setTimeout(async () => {
            ctx.deleteMessage(message_id)
        }, process.env.COUNTDOWN)
    })

    // new_chat_members
    bot.on("new_chat_members", async (ctx) => {
        await handleUser(ctx)
        let { message_id } = await ctx.replyWithMarkdown(`Hi @${ctx.message.from.username} đ \n\nâ Please Note Your ID: ${"```"}${ctx.message.from.id}${"```"}\n\nâ ď¸ this message will be auto-deleted in 30 secs`)
        setTimeout(async () => {
            ctx.deleteMessage(message_id)
        }, process.env.COUNTDOWN)
    })

    bot.on("group_chat_created", (ctx) => {
        let creator = ctx.message.from.username;
        if (creator !== process.env.BOT_ADMIN) {
          ctx
            .reply(
              `@${creator}, LoL you are not authorized to create a group with me. Contact @${process.env.BOT_ADMIN} for access`
            )
            .then(() => {
              ctx.leaveChat();
            });
        }
      });
      
      bot.on("supergroup_chat_created", (ctx) => {
        let creator = ctx.message.from.username;
        if (creator !== process.env.BOT_ADMIN) {
          ctx
            .reply(
              `@${creator}, LoL you are not authorized to create a group with me. Contact @${process.env.BOT_ADMIN} for access`
            )
            .then(() => {
              ctx.leaveChat();
            });
        }
      });
      
      bot.on("new_chat_members", (ctx) => {
        let creator = ctx.message.from.username;
        let newMember = ctx.message.new_chat_member.username;
        if (newMember == process.env.BOT_USERNAME) {
          if (ctx.message.from.username !== process.env.BOT_ADMIN) {
            ctx.reply(
              `@${creator}, LoL you are not authorized to create a group with me. Contact @${process.env.BOT_ADMIN} for access`
            );
            ctx.leaveChat();
          }
        }
      });

      bot.on("left_chat_member", async(ctx)=>{
        let leftedUserName= ctx.message.left_chat_member.username;
        let leftedUserId= ctx.message.left_chat_member.id;
      })
      
}

module.exports = bot