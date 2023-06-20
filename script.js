document.getElementById("main").addEventListener("load", start);

function start() {
    document.getElementById("title").className = "active";
    setTimeout(function(){
        document.getElementById("title").className = "inactive";
        setTimeout(function(){
            document.getElementById("main").className = "absolute defaultB border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:via-blue-200 after:bg-gradient-conic after:from-sky-200 after:blur-2xl after:content-[''] before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:opacity-40 after:dark:via-[#0141ff] after:dark:blur-2xl after:dark:backdrop-blur-2xl";
        }, 1000)
    }, 300 )
  }

alert("i work");
