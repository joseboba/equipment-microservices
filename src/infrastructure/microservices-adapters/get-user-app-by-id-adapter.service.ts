import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { UserAppDto } from './dtos/user-app.dto';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';
import { AdapterErrorValidation, Response } from 'incident-management-commons';
import { BusinessErrors } from '../../modules/equipment/errors/business-error';

@Injectable()
export class GetUserAppByIdAdapterService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly _httpService: HttpService,
  ) {}

  async execute(userId: number): Promise<UserAppDto | { error: string } | null> {
    const { baseUrl } = this._configService.get('user.getUserAppByUserAppId');
    const url = `${baseUrl}/api/user/by-id/${userId}`;
    return firstValueFrom(
      this._httpService.get<Response<{ data?: UserAppDto }>>(url).pipe(
        map((res) => {
          console.log('[UserAdapter] Respuesta microservicio:', res.data);
          const userApp = res.data?.data as UserAppDto | undefined;
          if (!userApp || !userApp.isActive) return { error: 'USER.NotFound' };
          if (!userApp.userType || !userApp.userType.isTechnical) {
            console.log('[UserAdapter] Usuario no es técnico:', userApp);
            return { error: 'USER.NoUserTechnical' };
          }
          return userApp;
        }),
        catchError((error: AxiosError | any) => {
          console.error('[UserAdapter] Error comunicación:', error.message, error.response?.data);
          throw new AdapterErrorValidation().execute(error);
        }),
      ),
    );
  }
}
