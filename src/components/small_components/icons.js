import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faFileDownload, faSave, faEdit, faTrashAlt, faBaby, faBiking, faBone, faClinicMedical, faCoffee, faHeartbeat, faRobot, faSkating, faSnowboarding, faTshirt, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const coffee = <FontAwesomeIcon icon={faCoffee} color="brown" />;
export const electronics = <FontAwesomeIcon icon={faRobot} color="black" />;
export const food = <FontAwesomeIcon icon={faUtensils} color="green" />;
export const health = <FontAwesomeIcon icon={faHeartbeat} color="red" />;
export const drugs = <FontAwesomeIcon icon={faClinicMedical} color="pink" />;
export const skateboarding = <FontAwesomeIcon icon={faSkating} color="blue" />;
export const snowboarding = <FontAwesomeIcon icon={faSnowboarding} color="lightblue" />;
export const bmx = <FontAwesomeIcon icon={faBiking} color="purple" />;
export const yoga = <FontAwesomeIcon icon={faBaby} color="orange" />;
export const clothes = <FontAwesomeIcon icon={faTshirt} color="lightblue" />;
export const pets = <FontAwesomeIcon icon={faBone} color="pink" />;
export const FileUpload = <FontAwesomeIcon icon={faFileUpload} color="red" />;
export const FileDownload = <FontAwesomeIcon icon={faFileDownload} color="red" />;
export const Save = <FontAwesomeIcon icon={faSave} color="red" />;
export const Edit = <FontAwesomeIcon icon={faEdit} color="red" />;
export const TrashAlt = <FontAwesomeIcon icon={faTrashAlt} color="red" />;

export const icons = {
    coffee: coffee,
    electronics: electronics,
    food: food,
    health: health,
    drugs: drugs,
    skateboarding: skateboarding,
    snowboarding: snowboarding,
    bmx: bmx,
    yoga: yoga,
    clothes: clothes,
    pets: pets,
    FileUpload: FileUpload,
    FileDownload: FileDownload,
    Save: Save,
    Edit: Edit,
    TrashAlt: TrashAlt
}
