

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event13_Act4(runtime, localVars)
	{
		runtime.globalVars.NumeroVidas --;
	},

	async FolhaDeEventosFase1_Event14_Act1(runtime, localVars)
	{
		runtime.globalVars.NumeroVidas = 3;
	},

	async FolhaDeEventosFase1_Event21_Act4(runtime, localVars)
	{
		runtime.globalVars.NumeroVidas ++;
	},

	async FolhaDeEventosFase1_Event20_Act3(runtime, localVars)
	{
		runtime.globalVars.TemChave = true;
	},

	async FolhaDeEventosFase1_Event26_Act2(runtime, localVars)
	{
		runtime.globalVars.NumeroVidas = 3;
		runtime.globalVars.TemChave = false;
	},

	async FolhaDeEventosFase1_Event30_Act3(runtime, localVars)
	{
		runtime.globalVars.TemChave = false;
	},

	async FolhaDeEventosFase1_Event27_Act3(runtime, localVars)
	{
		runtime.globalVars.TemChave = false;
	},

	async FolhaDeEventosFase1_Event28_Act3(runtime, localVars)
	{
		runtime.globalVars.TemChave = false;
	},

	async FolhaDeEventosFase1_Event29_Act3(runtime, localVars)
	{
		runtime.globalVars.TemChave = false;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
