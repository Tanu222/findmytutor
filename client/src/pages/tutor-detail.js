import '../assets/styles/tutor-detail.css'
const TutorDetail = () => {
    return(
        <div class="container mt-5 mb-5 tutor-detail">
    <div class="row no-gutters">
        <div class="col-md-2 col-lg-2"><img src="https://randomuser.me/api/portraits/men/57.jpg"/></div>
        <div class="col-md-8 col-lg-8">
            <div class="d-flex flex-column">
                <div class="d-flex flex-row justify-content-between align-items-center p-5">
                    <h3 class="display-5">Amelly Anderson</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i>
                </div>
                <div class="p-3 bg-black text-white">
                    <h6>Web designer  Developer</h6>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default TutorDetail;