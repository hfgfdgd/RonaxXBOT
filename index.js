//VARIABLE OBLIGATOIRE POUR MARCHER

const Discord = require('discord.js')
const client = new Discord.Client();
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync('database.json')

var bot = new Discord.Client();
var Prefix = ("&")
var prefix = ("&")

const lowd = require('lowdb')  
const Filesync =require('lowdb/adapters/FileSync')   

const Adapter = new Filesync('database.json');
const db = lowd(Adapter);

db.defaults({ histoires: [], xp: []}).write()

//TOUT SE QUE FAIT LE BOT QUAND IL SE CONNECTE

bot.on('ready', () => {
    bot.user.setGame("🤖&help | &aide🤖",);
    bot.user.setAvatar("https://cdn.discordapp.com/attachments/521979028396048384/524304572521381888/eraser_2018-09-30_06-12-41.png")
    console.log("Je suis connecté tu peut m'utiliser!")
});

bot.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');
        
//MESSAGE HELP | AIDE

bot.on("message", (message) => {
    if (message.content === Prefix+"help" |message.content === Prefix+"aide"){
        let embed = new Discord.RichEmbed()
        .setTitle("Aides Pour Les Commandes")
        .setThumbnail(message.author.avatarURL)
        .addField("**Prefix**:","**&**")
        .addField("**Commandes D'aides**:","**&**help ou **&**aide")
        .addField("**Pour supprimer des message**:", "**&**clear le nombre de message")
        .setColor("#17FF00")
        .setFooter("🔥By SloWManI🔥");
        message.channel.send(embed);
        console.log("Commande Help|Aide demandé")
    }
    })

    //AVATAR EN GROS

    client.on('message', message => {
        if (message.content === Prefix+'avatar') {
          message.reply(message.author.avatarURL);
        }
      });
      
      client.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');

    //MESSAGE BIENVENUE

      client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(ch => ch.name === 'bienvenue');
        if (!channel) return;
        channel.send(`Bienvenue sur le serveur🙂🎉🎉🎉, ${member}`);
      });
      
      client.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');
      
    //MESSAGE AUREVOIR

      client.on('guildMemberRemove', member => {
        const channel = member.guild.channels.find(ch => ch.name === 'aurevoir');
        if (!channel) return;
        channel.send(`${member} ,On espère que tu reviendra bientot🙂🎉🎉🎉`);
      });
      
      client.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');

    //MESSAGE SALUT

bot.on("message", (message) => {
    if (message.content === prefix+"salut"){
        message.reply("Bonjour Sava?🙂🙂");
        console.log("Salut demandé")
}})

    //KICK

        client.on('message', message => {
          if (!message.guild) return;
        
          if (message.content.startsWith(Prefix+'kick')) {
          
            const user = message.mentions.users.first();
            
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() => {
                  message.reply(`⛔${user.tag} a bien été expulsé⛔`);
                  console.log("Une Personne a été Expulser!!")
                }).catch(err => {
                  message.reply('Je ne peut pas kick cette personne !');
                  console.error(err);
                });
              } else {
                message.reply('Je ne peut pas kick cette personne !');
              }
            } else {
              message.reply('Tu doit mentionner la personne a kick !');
            }
          }
        });
        
        client.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');


    //BAN

        client.on('message', message => {
            if (!message.guild) return;
            if (message.content.startsWith(Prefix+'ban')) {
              const user = message.mentions.users.first();
              if (user) {
                const member = message.guild.member(user);
                if (member) {
                  member.ban({
                    reason: '⛔Il na pas respecter les régles !⛔',
                  }).then(() => {
                    message.reply(`⛔${user.tag} a bien été banni !⛔`);
                    console.log("Une Personne a été Banni!!")
                  }).catch(err => {
                    message.reply('Je ne pas bannir ce menbre !');
                    console.error(err);
                  });
                } else {
                  message.reply('Je ne peut pas bannir ce membre !');
                }
              } else {
                message.reply('Tu doit mentionner la personne a bannir !');
              }
            }
          });
          
          client.login('NTIyODE2MDg5MDM0MzI2MDM3.DvQf9g.uuVtajCvFesvAX1q_BOalZRAhvI');

    //COMMANDE ADMIN

    bot.on("message", (message) => {
        if (message.content === Prefix+"admin"){
            let embed = new Discord.RichEmbed()
            .setTitle("**🤖COMMANDES ADMINISTRATEUR🤖**")
            .addField("Pour kick quelqu'un : ","**&**kick @la personne")
            .addField("Pour Ban quelqu'un : ","**&**ban @la personne")
            .addField("Pour Mute quelqu'un : ","**&**mute @la personne")
            .addField("Pour Démute quelqu'un : ","**&**unmute @la personne")
            .setColor("#00FFE4")
            .setFooter("🔥By SloWManI🔥");
            message.channel.send(embed);
            console.log("Commandes ADMIN demandé")
        }
    })


    //CHAINE YTB

    bot.on("message", (message) => {
      if (message.content === Prefix+"ytb" |message.content === Prefix+"yt" |message.content === Prefix+"youtube"){
          let embed = new Discord.RichEmbed()
          .setTitle("CHAINE YOUTUBE")
          .addField("Chaine de **SloWManI**:","https://www.youtube.com/channel/UCJdsRljgir8zyjUSRFbnhVg")
          .setThumbnail("https://cdn.discordapp.com/attachments/521979028396048384/523918339672637441/20180930_185309.jpg")
          .setColor("#FF0000")
          .setFooter("🔥By SloWManI🔥");
          message.channel.send(embed);
          console.log("Commande YTB | YT demandé")
        }
      })

  //INFO SUS SOIT

  client.on('message', async message => { 
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 

        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()
        .setColor("#F000FF")
        .setTitle(`Statistiques du joueurs : ${message.author.username}`)
        .addField(`ID du joueurs :id:`, msgauthor, true)
        .addField(`Date d'inscription du joueur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        .setFooter("🔥By SloWManI🔥");
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send(stats_embed);
        console.log("Info demandé en privé")

      
  }})

//INFO SUR MOI ET SERVEUR 
client.on('message', async message => {
  if (message.content === prefix + "info") {
    var info_embed = new Discord.RichEmbed()
    .setColor("#00E8FF")
    .setTitle("Voici les informations sur moi et le serveur !")
    .addField(" :robot: Nom :", `${client.user.tag}`, true)
    .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
    .addField("ID :id: ", `${client.user.id}`)
    .addField("Nombre de membres", message.guild.members.size)
    .addField("Nombre de catégories et de salons", message.guild.channels.size)
    .setFooter("🔥By SloWManI🔥")
    message.channel.sendMessage(info_embed)
    console.log("Commande Info demandé !")
  }}) 

  //CLEAR | SUPPR MESSAGE

  client.on('message', async message => {
    if(message.content.startsWith(prefix + "clear")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");
  
      let args = message.content.split(" ").slice(1);
  
      if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(`${args[0]} messages ont été supprimés !`);
      });
    }})
  
//MUTE | DEMUTE QUELQU'UN


client.on('message', async message => {
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
  
    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }
  
    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
  
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    });
  }
  
  if(message.content.startsWith(prefix + "unmute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
  
    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }
  
    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
  
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} n'est plus mute !`);
    });
  }})


  //MESSAGE COMMANDE AMUSANT
  client.on('message', async message => {
    if(message.content === prefix + "fun") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('FFAA00')
      .setTitle(`😁😁 Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
      .addField("**&**salut", "Le bot répond !")
      .addField("**&**avatar", "Le bot vous envoit votre avatar en gros !")
      .addField("**&**stats", "Le bot vous envoie des informations sur votre profil !")
      .addField("**&**info", "Donne des informations sur le bot et le serveur !")
      .addField("**&**ytb", "Donne la chaine ytb du créateur du bot")
      .setFooter("🔥By SloWManI🔥")
      .setTimestamp()
      message.channel.send(fun_embed);
      console.log("Commande FUN demandé !")
    }})
