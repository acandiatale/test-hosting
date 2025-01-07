export default class Home {
    constructor() {
        document.title = "VoxelVital - 홈";
    }

    async getHtml() {
        return `
            <div class="home">
                <section class="first-section">
                    <div class="background-text">VOXELVITAL</div>
                </section>
                
                <section class="second-section">
                    <div class="pillow-container">
                        <img src="/assets/pillow.png" alt="Voxelvital Pillow" class="pillow-image">
                        <div class="pillow-text">당신의 경추1번에서 7번까지 자유를 주세요</div>
                    </div>
                </section>
            </div>
        `;
    }
} 