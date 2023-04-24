const NFTs = []

function mintNFT(NameSaint, PatronSaint, Symbol){
    const NFT = {
        "NameSaint": NameSaint,
        "PatronSaint": PatronSaint,
        "Symbol": Symbol,
    }
    NFTs.push (NFT);
    console.log ("NameSaint " + NameSaint);
}

function listNFTs() {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID:  \t\t\t\t" + (i + 1));
        console.log("\nName of Saint:  \t" + NFTs[i].NameSaint);
        console.log("\Patron Saint: \t\t" + NFTs[i].PatronSaint);
        console.log("\Symbol:  \t\t\t" + NFTs[i].Symbol);
    }
}

function getTotalSupply () {
    console.log("\n" + NFTs.length);
}
let myNFT1 = mintNFT("Tarcisius", "Altar Servers", "Holy Eucharist");
let myNFT2 = mintNFT("Cecilia", "Musicians", "G Cleff");
let myNFT3 = mintNFT("Anthony de Padua", "Lost Things", "Magnifying Glass");
let myNFT4 = mintNFT("Francis of Assisi", "Animals & Environment", "Earth");

listNFTs();
getTotalSupply();
